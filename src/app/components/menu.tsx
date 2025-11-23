'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { RiCloseLargeFill, RiArrowRightUpLine } from 'react-icons/ri';

interface MenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const menuLinks = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '#services' }, // Add IDs to your sections in page.tsx
  { title: 'Projects', href: '#projects' },
  { title: 'About', href: '#about' },
  { title: 'Contact', href: '#contact' },
];

const Menu = ({ isOpen, closeMenu }: MenuProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      if (!panelRef.current || !overlayRef.current) return;

      gsap.set(panelRef.current, { xPercent: 100 }); // Start off-screen right
      gsap.set(overlayRef.current, { opacity: 0, pointerEvents: 'none' });

      tl.current = gsap
        .timeline({ paused: true })
        .to(overlayRef.current, {
          opacity: 1,
          duration: 0.3,
          pointerEvents: 'all',
        })
        .to(
          panelRef.current,
          {
            xPercent: 0,
            duration: 0.5,
            ease: 'power3.out',
          },
          '<',
        ) // Start at same time as overlay
        .from(
          '.menu-link-item',
          {
            x: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.4,
            ease: 'power2.out',
          },
          '-=0.3',
        ); // Overlap slightly with panel slide
    },
    { scope: containerRef },
  );

  // Control the timeline based on isOpen prop
  useGSAP(() => {
    if (tl.current) {
      if (isOpen) {
        tl.current.play();
        document.body.style.overflow = 'hidden'; // Lock scroll
      } else {
        tl.current.reverse();
        document.body.style.overflow = ''; // Unlock scroll
      }
    }
  }, [isOpen]);

  return (
    <div ref={containerRef} className='relative z-[9999]'>
      {/* Dark Overlay */}
      <div
        ref={overlayRef}
        onClick={closeMenu}
        className='fixed inset-0 bg-black/60 backdrop-blur-sm'
      />

      {/* Sidebar Panel */}
      <div
        ref={panelRef}
        className='fixed top-0 right-0 h-screen w-full md:w-[450px] bg-[#141414] border-l border-white/10 flex flex-col justify-between p-8 sm:p-12'
      >
        {/* Header: Close Button */}
        <div className='flex justify-between items-center'>
          <span className='font-zalando text-amber-50/50 uppercase text-sm tracking-widest'>
            Navigation
          </span>
          <button
            onClick={closeMenu}
            className='group w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300'
          >
            <RiCloseLargeFill className='group-hover:rotate-90 transition-transform duration-300' />
          </button>
        </div>

        {/* Main Links */}
        <div className='flex flex-col gap-2'>
          {menuLinks.map((link, index) => (
            <div key={index} className='menu-link-item overflow-hidden'>
              <Link
                href={link.href}
                onClick={closeMenu}
                className='group flex items-center justify-between text-4xl sm:text-5xl font-zalando text-amber-50 hover:text-white transition-colors'
              >
                <span className='group-hover:translate-x-4 transition-transform duration-300'>
                  {link.title}
                </span>
                <RiArrowRightUpLine className='opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-2xl' />
              </Link>
            </div>
          ))}
        </div>

        {/* Footer Information */}
        <div className='menu-link-item flex flex-col gap-4 border-t border-white/10 pt-8'>
          <h4 className='font-poppins text-amber-50/60 text-sm'>Get in touch</h4>
          <a
            href='mailto:hello@laalaa.com'
            className='font-zalando text-2xl text-amber-50 hover:underline'
          >
            yang6405@gmail.com
          </a>
          <div className='flex gap-4 font-poppins text-xs text-amber-50/40 mt-2'>
            <a href='#' className='hover:text-white'>
              LinkedIn
            </a>
            <a href='#' className='hover:text-white'>
              Instagram
            </a>
            <a href='#' className='hover:text-white'>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
