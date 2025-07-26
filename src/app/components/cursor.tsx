'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import '../globals.css';
import { useGSAP } from '@gsap/react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        duration: 0.2,
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out',
      });

      gsap.to(cursorOuterRef.current, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out',
      });
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorOuterRef} className="custom-cursor-outer" />
      <div ref={cursorRef} className="custom-cursor" />
    </>
  );
};

export default CustomCursor;