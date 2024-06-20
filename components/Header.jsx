'use client';

import React from 'react';
import ThemeToggler from './ThemeToggler';

// Components
import Logo from './Logo';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';

const Header = () => {
  return (
    <header>
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
