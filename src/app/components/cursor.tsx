'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { usePathname } from 'next/navigation'; // 1. Import usePathname
import '../globals.css';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // 2. Get the current route

  useGSAP(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const el = cursorRef.current;
    const oel = cursorOuterRef.current;
    if (!el || !oel) return;

    // 3. Define defaults explicitly (Avoid computing styles that might be stuck)
    const defaults = {
      scale: 1,
      opacity: 1,
      backgroundColor: 'white', // Your default CSS value
      borderRadius: '100%', // Your default CSS value
    };

    const outerDefaults = {
      scale: 1,
      backgroundColor: 'transparent',
      border: '1px solid rgba(255, 255, 255, 0.3)', // Your default CSS value
    };

    // 4. FORCE RESET: Snap cursor back to normal whenever path changes
    gsap.set(el, defaults);
    gsap.set(oel, outerDefaults);
    gsap.set(el.querySelector('.arrow'), { opacity: 0, scale: 0.5 });

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

    // 5. Select all links (This now runs again on every route change)
    const hoverTargets = document.querySelectorAll('.links');

    hoverTargets.forEach((target) => {
      const onEnter = () => {
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
      };

      const onLeave = () => {
        gsap.to(el, { ...defaults, duration: 0.25 });
        gsap.to(oel, { ...outerDefaults, duration: 0.25 });
        gsap.to(el.querySelector('.arrow'), {
          opacity: 0,
          scale: 0.5,
          duration: 0.1,
          ease: 'power3.in',
        });
      };

      target.addEventListener('mouseenter', onEnter);
      target.addEventListener('mouseleave', onLeave);

      // Store cleanup for this specific element
      (target as any)._cursorCleanup = () => {
        target.removeEventListener('mouseenter', onEnter);
        target.removeEventListener('mouseleave', onLeave);
      };
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      // Cleanup event listeners from links
      hoverTargets.forEach((target) => {
        if ((target as any)._cursorCleanup) {
          (target as any)._cursorCleanup();
        }
      });
    };
  }, [pathname]); // 6. Dependency Array: Re-run this entire logic when pathname changes

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
