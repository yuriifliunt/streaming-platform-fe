'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useConfigStore } from '@/store/configStore';
import { DARK_THEME, LIGHT_THEME } from '@/constants';
import { useTabascoAnimationStore } from '@/store/tabascoAnimationStore';

export const ThemeToggleButton = () => {
  const iconRef = useRef(null);
  const borderRef = useRef(null);
  const { theme, changeTheme } = useConfigStore();
  const { triggerAnimation } = useTabascoAnimationStore();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    changeTheme();

    if (savedTheme === DARK_THEME) {
      document.documentElement.classList.add(DARK_THEME);
    } else {
      document.documentElement.classList.remove(DARK_THEME);
    }
  }, [changeTheme]);

  const animateBorder = () => {
    gsap.set(borderRef.current, { opacity: 1, strokeDasharray: '40, 200', strokeDashoffset: 0 });

    gsap.to(borderRef.current, {
      strokeDashoffset: theme === DARK_THEME ? -200 : -240,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.to(borderRef.current, {
          opacity: 0,
          duration: 0,
        });
      },
    });
  };

  const toggleTheme = () => {
    const newMode = theme !== DARK_THEME;
    changeTheme();
    document.documentElement.classList.toggle(DARK_THEME, newMode);
    localStorage.setItem('theme', newMode ? DARK_THEME : LIGHT_THEME);

    gsap.to(iconRef.current, {
      x: newMode ? 40 : 0,
      duration: 0.5,
      ease: 'power2.out',
    });

    animateBorder();
    
    triggerAnimation();
  };

  return (
    <div
      onClick={toggleTheme}
      className="relative flex items-center cursor-pointer w-20 h-10 bg-light dark:bg-dark rounded-full p-1 transition-all duration-300 shadow-dark overflow-hidden"
    >
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 40">
        <rect
          ref={borderRef}
          x="1" y="1" width="78" height="38" rx="19"
          fill="none" stroke={theme === DARK_THEME ? "#facc15" : "#ba0021"} strokeWidth="2" strokeDasharray="40, 200" strokeDashoffset="200"
          className="opacity-0"
        />
      </svg>
      <div ref={iconRef} className="w-8 h-8 rounded-full shadow-md flex items-center justify-center">
        <Image src="/tabasco.svg" alt="Tabasco" width={32} height={32} />
      </div>
    </div>
  );
};
