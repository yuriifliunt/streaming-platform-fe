'use client';

import { useState, useEffect } from 'react';
import TabascoAnimation from './Tabasco';
import { LanguageButton } from './LanguageButton';
import { ThemeToggleButton } from './ThemeToggleButton';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-light p-4 text-dark shadow-dark transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <TabascoAnimation />
        <div className='flex gap-4'>
          <LanguageButton />
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
