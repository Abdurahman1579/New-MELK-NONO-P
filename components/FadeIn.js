'use client';

import { useEffect, useRef, useState } from 'react';

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const getDirectionClass = () => {
    switch (direction) {
      case 'down':
        return 'translate-y-[-30px]';
      case 'left':
        return 'translate-x-[30px]';
      case 'right':
        return 'translate-x-[-30px]';
      case 'up':
      default:
        return 'translate-y-[30px]';
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: '700ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}s`,
      }}
      className={`transform ${
        isVisible
          ? 'opacity-100 translate-x-0 translate-y-0'
          : `opacity-0 ${getDirectionClass()}`
      } ${className}`}
    >
      {children}
    </div>
  );
}