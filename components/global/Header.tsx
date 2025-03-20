'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import gsap from 'gsap';
import TabascoAnimation from './Tabasco';
import { Navigation } from './Navigation';

const Header = () => {
  const [isVisibleHeader, setIsVisibleHeader] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLButtonElement | null>(null);

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY.current) {
      setIsVisibleHeader(false);
    } else {
      setIsVisibleHeader(true);
    }
    lastScrollY.current = window.scrollY;
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      burgerRef.current &&
      !burgerRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, { y: 0, opacity: 1, duration: 0.45, display: 'flex', ease: 'power2.out' });
    } else {
      gsap.to(menuRef.current, { y: -20, opacity: 0, duration: 0.3, display: 'none', ease: 'power2.in' });
    }
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-light p-[30px] lg:p-[50px] text-dark transition-transform duration-300 ${
        isVisibleHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <TabascoAnimation />
        
        <div className='hidden lg:flex gap-4 lg:gap-6 items-center'>
          <Navigation />
        </div>

        <button
          ref={burgerRef}
          className='lg:hidden p-2 focus:outline-none cursor-pointer'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-1 bg-dark mb-1"></div>
          <div className="w-6 h-1 bg-dark mb-1"></div>
          <div className="w-6 h-1 bg-dark"></div>
        </button>
      </div>

      <div 
        ref={menuRef} 
        className="hidden lg:hidden absolute top-full left-0 w-full bg-light p-4 pb-10 shadow-lg flex-col gap-5 items-center opacity-0"
        style={{ transform: 'translateY(-20px)' }}
      >
        <Navigation />
      </div>
    </header>
  );
};

export default Header;