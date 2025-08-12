import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div id="home" className="relative hero-with-watercolor flex items-center justify-center text-center overflow-hidden py-32 md:py-48">
      {/* 背景画像オーバーレイ */}
      <div className="absolute inset-0 bg-black/20 z-5"></div>
      
      <div className="relative z-10 p-6">
        <h1 className="text-4xl md:text-5xl font-serif-jp font-extrabold text-white leading-tight animate-fade-in-glow" style={{textShadow: '0 2px 30px rgba(0,0,0,0.8), 0 0 60px rgba(255,255,255,0.3)'}}>
          僕の挑戦は、息子の未来への祈りだ。
        </h1>
        <p className="text-white/90 mt-4 text-md md:text-lg max-w-2xl mx-auto animate-fade-in-glow" style={{ animationDelay: '1.2s', textShadow: '0 2px 20px rgba(0,0,0,0.7)' }}>
          Fランク卒、工場勤務、息子の難病...。ドン底で見つけたUEFNという希望。僕が歩んできた道のりと、挑戦の記録。
        </p>
      </div>
    </div>
  );
};

export default HeroSection;