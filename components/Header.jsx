'use client';

import React, { useState, useEffect } from 'react';
import ThemeToggler from './ThemeToggler';
import { usePathname } from 'next/navigation';

// Components
import Logo from './Logo';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setHeader(true) : setHeader(false);
    });

    // remove Events
    return () => window.removeEventListener('scroll', scrollYPos);
  }, []);

  return (
    <header
      className={`${
        header
          ? 'py-4 bg-tertiary shadow-lg dark:bg-accent'
          : 'py-6 dark:bg-transparent'
      } sticky top-0 z-30 transition-all duration-300 ${
        pathname === '/' && 'bg-[#fff]'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Navbar
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />

            <div className="xl:hidden">
              <MobileNavbar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
