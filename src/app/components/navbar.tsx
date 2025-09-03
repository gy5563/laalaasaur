'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

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
      className="fixed top-0 left-0 w-full z-50 text-black py-4 px-2 sm:px-6 md:px-24 bg-gradient-to-b from-[#ffffffe8] from-[0%] via-[#ffffff6c] via-[65%] to-transparent to-[100%]"
      style={{ transform: 'translateY(0)', opacity: 1 }}
    >
      <div className="mx-auto flex justify-between items-center">
        <span className='font-manrope font-bold text-[clamp(12px,4vw,32px)]'>GuangY.</span>
        <ul className="navbar flex gap-8 text-[clamp(12px,4vw,20px)] font-manrope font-normal">
          <li className='menu'>Home</li>
          <li className='menu'>About</li>
          <li className='menu'>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
