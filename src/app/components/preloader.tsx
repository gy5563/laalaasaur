'use client';

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { resolve } from 'path';

type Props = {
  onFinish: () => void;
};

export default function Preloader({ onFinish }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [shouldRender, setShouldRender] = useState(true);

  useGSAP(
    () => {
      // 1. Check session storage so we only show this ONCE per session
      // If you want it to show every time, remove this check.
      const hasVisited = sessionStorage.getItem('hasVisited');
      if (hasVisited) {
        setShouldRender(false);
        onFinish();
        return;
      }

      // Lock scroll during animation
      document.body.style.overflow = 'hidden';

      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem('hasVisited', 'true');
          document.body.style.overflow = '';
          onFinish();
        },
      });

      // --- STAGE 1: The Counter Animation ---
      const counterObj = { value: 0 };

      tl.to(counterObj, {
        value: 100,
        duration: 1.5,
        ease: 'power4.inOut',
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.floor(counterObj.value) + '%';
          }
        },
      });

      // --- STAGE 2: The Reveal (Curtain Up) ---
      tl.to(containerRef.current, {
        yPercent: -100, // Slide the whole div up
        duration: 0.8,
        ease: 'power4.inOut',
        delay: 0.2, // Pause slightly after reaching 100%
      });

      // Optional: Animate the contents inside (fade them out slightly as it moves up)
      tl.to(
        '.preloader-content',
        {
          y: -100,
          opacity: 0,
          duration: 0.5,
        },
        '<',
      ); // Start at same time as container slide
    },
    { scope: containerRef },
  );

  // If previously visited, don't render anything (prevents flashing)
  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      className='fixed inset-0 z-[99999] flex flex-col justify-between bg-[#141414] text-amber-50 p-6 sm:p-12'
    >
      {/* Top Section: Greeting */}
      <div className='preloader-content flex justify-start'>
        <div className='overflow-hidden'>
          <h2 className='font-poppins font-light text-sm sm:text-base animate-pulse'>
            Loading Experience...
          </h2>
        </div>
      </div>

      {/* Center Section: Big Title (Optional) */}
      <div className='preloader-content flex-1 flex items-center justify-center'>
        <h1 className='font-zalando text-4xl sm:text-6xl md:text-8xl tracking-tighter opacity-20'>
          GUANGYANG
        </h1>
      </div>

      {/* Bottom Section: Counter */}
      <div className='preloader-content flex justify-end items-end overflow-hidden'>
        <span
          ref={counterRef}
          className='font-zalando text-[15vw] sm:text-[12vw] leading-none translate-y-2'
        >
          0%
        </span>
      </div>
    </div>
  );
}
