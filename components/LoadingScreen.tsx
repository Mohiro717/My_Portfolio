import React, { useState, useEffect, useRef } from 'react';

interface LoadingScreenProps {
  onFinished: () => void;
}

// Phases:
// 0: Progress ring is filling
// 1: Progress ring is fading out
// 2: First message animates in and lingers
// 3: First message fades out
// 4: Second message animates in
// 5: Final pause
// 6: Fading out whole screen
const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const [loadingDots, setLoadingDots] = useState('');
  const animationFrameId = useRef<number | null>(null);
  const [isSkipped, setIsSkipped] = useState(false);

  const messages = [
    "どんな逆境だって、",
    "僕は前を向いて歩き続ける"
  ];

  const loadingDuration = 2500;

  const handleSkip = () => {
    setIsSkipped(true);
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    onFinished();
  };

  // Progress ring animation
  useEffect(() => {
    if (phase !== 0 || isSkipped) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const newProgress = Math.min(100, (elapsedTime / loadingDuration) * 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        setPhase(1);
      }
    };
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [phase]);
  
  // Loading dots animation
  useEffect(() => {
    if (phase !== 0 || isSkipped) return;

    const interval = setInterval(() => {
        setLoadingDots(dots => (dots.length >= 3 ? '' : dots + '.'));
    }, 400);

    return () => clearInterval(interval);
  }, [phase]);


  // Phased animation sequence for messages and screen fade out
  useEffect(() => {
    if (isSkipped) return;
    let timer: NodeJS.Timeout;
    if (phase === 1) {      // Ring fades out
      timer = setTimeout(() => setPhase(2), 600);
    } else if (phase === 2) { // First message appears & lingers
      timer = setTimeout(() => setPhase(3), 2800);
    } else if (phase === 3) { // First message fades out
      timer = setTimeout(() => setPhase(4), 1200); // Duration of fade-out + pause
    } else if (phase === 4) { // Second message appears
      timer = setTimeout(() => setPhase(5), 2500); // Linger time
    } else if (phase === 5) { // Final pause
      timer = setTimeout(() => setPhase(6), 700);
    } else if (phase === 6) { // Fade out screen
      timer = setTimeout(onFinished, 1000);
    }
    return () => clearTimeout(timer);
  }, [phase, onFinished, isSkipped]);
  
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  
  const getMessage1Class = () => {
    if (phase === 2) return 'animate-intro-glow';
    if (phase === 3) return 'animate-fade-out-message';
    return 'opacity-0';
  }

  const getMessage2Class = () => {
    if (phase >= 4) return 'animate-intro-glow-strong';
    return 'opacity-0';
  }

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#111111] text-white font-serif-jp has-grain-effect overflow-hidden ${phase === 6 ? 'animate-fade-out-screen' : ''}`}
      aria-live="polite"
      role="status"
    >
      {/* Skip Button - Only show after progress ring phase */}
      {phase > 1 && (
        <button
          onClick={handleSkip}
          className="absolute top-6 right-6 text-white/60 hover:text-white/90 transition-all duration-300 text-lg font-serif-jp tracking-wider hover:scale-105 flex items-center gap-3"
          aria-label="スキップ"
        >
          <div className="flex">
            <span className="animate-pulse" style={{ animationDelay: '0ms' }}>＞</span>
            <span className="animate-pulse" style={{ animationDelay: '200ms' }}>＞</span>
            <span className="animate-pulse" style={{ animationDelay: '400ms' }}>＞</span>
          </div>
          <span>Skip</span>
        </button>
      )}
      <div className="relative text-center p-6 w-full max-w-sm h-48 flex items-center justify-center">
        {/* Progress Ring Container */}
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${phase > 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          aria-hidden={phase > 0}
        >
          <div className="relative w-32 h-32">
            <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              <defs>
                <filter id="glow-ring">
                  <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <circle className="text-white/10" strokeWidth="4" stroke="currentColor" fill="transparent" r={radius} cx="60" cy="60" />
              <circle
                className="text-white"
                strokeWidth="4"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx="60"
                cy="60"
                style={{ filter: 'url(#glow-ring)', transition: 'stroke-dashoffset 0.1s linear' }}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xl progress-ring__text" aria-label={`Loading ${Math.round(progress)} percent`}>
              {Math.round(progress)}%
            </span>
          </div>
          <p className="mt-6 text-sm text-white/50 tracking-widest" aria-hidden="true">
            Loading{loadingDots}
          </p>
        </div>
        
        {/* Messages Container */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
           <p 
             className={`absolute text-3xl md:text-4xl text-white ${getMessage1Class()}`}
             style={{ textShadow: '0 2px 15px rgba(255,255,255,0.2)' }}
             aria-hidden={phase < 2 || phase > 3}
           >
             {messages[0]}
           </p>
           
          <p 
            className={`absolute text-3xl md:text-4xl text-white whitespace-nowrap ${getMessage2Class()}`}
            style={{ textShadow: '0 2px 10px rgba(255,255,255,0.3)' }}
            aria-hidden={phase < 4}
          >
            {messages[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;