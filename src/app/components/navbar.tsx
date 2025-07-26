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
      className="fixed top-0 left-0 w-full z-50 text-black px-6 py-4 bg-gradient-to-t from-transparent to-white"
      style={{ transform: 'translateY(0)', opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-jost font-normal">Logo</div>
        <ul className="flex gap-6 text-xl font-jost font-normal">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
