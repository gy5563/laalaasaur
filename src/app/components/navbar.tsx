'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { RiMenuFill } from 'react-icons/ri';

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useGSAP(() => {
    const navbar = navbarRef.current;
    
    gsap.from(navbar, {
      translateY: -100,
    })
  })

  useEffect(() => {
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
        hideNavbar(); // scrolling down
      } else {
        showNavbar(); // scrolling up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAnimating]);

  return (
    <div
      ref={navbarRef}
      className='fixed top-0 left-0 w-full z-999 text-black py-4 px-2 sm:px-6 md:px-24'
      style={{ transform: 'translateY(0)', opacity: 1 }}
    >
      <div className='mx-auto flex justify-end items-center'>
        <ul className='navbar flex text-[clamp(20px,4vw,28px)] font-manrope font-normal'>
          <div className='w-12 h-12 bg-black flex justify-center items-center rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer'>
            <RiMenuFill className='text-white'/>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;