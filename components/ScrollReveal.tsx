import React, { useEffect, useRef, useState, useMemo } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const observerOptions = useMemo(() => ({
    threshold,
    triggerOnce,
  }), [threshold, triggerOnce]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (observerOptions.triggerOnce) {
            observer.unobserve(element);
          }
        } else {
            if (!observerOptions.triggerOnce) {
                setIsVisible(false);
            }
        }
      },
      { threshold: observerOptions.threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, observerOptions]);

  const style = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      className={`${className} reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
