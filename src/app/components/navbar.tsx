'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { RiMenuFill } from 'react-icons/ri';
import Menu from './menu'; // Import the menu

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // State for the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    const navbar = navbarRef.current;
    gsap.from(navbar, { translateY: -100 });
  });

  useEffect(() => {
    // ... (Keep your existing Scroll Logic here, it is fine) ...
    const navbar = navbarRef.current;
    if (!navbar) return;

    const showNavbar = () => {
      if (isAnimating) return;
      setIsAnimating(true);
      gsap.to(navbar, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => setIsAnimating(false),
      });
    };

    const hideNavbar = () => {
      if (isAnimating) return;
      setIsAnimating(true);
      gsap.to(navbar, {
        y: -40,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => setIsAnimating(false),
      });
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        hideNavbar();
      } else {
        showNavbar();
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAnimating]);

  return (
    <>
      <div
        ref={navbarRef}
        className='fixed top-0 left-0 w-full z-[900] text-black py-4 px-2 sm:px-6 md:px-24'
      >
        <div className='mx-auto flex justify-end items-center'>
          {/* IMPORTANT: 
             We wrapped the menu icon in a button that sets state to TRUE 
          */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className='w-12 h-12 bg-black flex justify-center items-center rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg shadow-white/10'
          >
            <RiMenuFill className='text-white text-xl' />
          </button>
        </div>
      </div>

      {/* Render the Menu component outside the navbar div so it isn't affected by navbar transforms */}
      <Menu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
