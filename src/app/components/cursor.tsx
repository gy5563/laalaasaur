'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import '../globals.css';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 🧠 Disable cursor for mobile / touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const el = cursorRef.current;
    const oel = cursorOuterRef.current;
    if (!el || !oel) return;

    // Save original styles
    const originalInner = {
      scale: 1,
      backgroundColor: window.getComputedStyle(el).backgroundColor,
      borderRadius: window.getComputedStyle(el).borderRadius,
    };

    const originalOuter = {
      scale: 1,
      backgroundColor: window.getComputedStyle(oel).backgroundColor,
      border: window.getComputedStyle(oel).border,
    };

    // 🖱️ Move cursor smoothly
    const moveCursor = (e: MouseEvent) => {
      gsap.to(el, {
        duration: 0.15,
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out',
      });

      gsap.to(oel, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out',
      });
    };

    document.addEventListener('mousemove', moveCursor);

    // 🎯 Hover animations for elements with .links
    const hoverTargets = document.querySelectorAll('.links');

    hoverTargets.forEach((target) => {
      target.addEventListener('mouseenter', () => {
        gsap.to(el, {
          scale: 4,
          opacity: 0.9,
          backgroundColor: '#f5f5f5',
          duration: 0.25,
        });
        gsap.to(oel, { scale: 0, duration: 0.25 });
        gsap.to(el.querySelector('.arrow'), {
          opacity: 1,
          scale: 1,
          duration: 0.1,
          ease: 'power3.out',
        });
      });

      target.addEventListener('mouseleave', () => {
        gsap.to(el, { ...originalInner, duration: 0.25 });
        gsap.to(oel, { ...originalOuter, duration: 0.25 });
        gsap.to(el.querySelector('.arrow'), {
          opacity: 0,
          scale: 0.5,
          duration: 0.1,
          ease: 'power3.in',
        });
      });
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorOuterRef}
        className='custom-cursor-outer fixed top-0 left-0 w-6 h-6 border border-white/30 rounded-full pointer-events-none z-[9999]'
      />
      <div
        ref={cursorRef}
        className='custom-cursor fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none flex items-center justify-center z-[10000]'
      >
        <MdOutlineArrowOutward className='arrow text-[12px] text-black opacity-0 scale-50 transition-all duration-200' />
      </div>
    </>
  );
};

export default CustomCursor;
