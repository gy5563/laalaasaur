'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Background() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Random floating animation for Blob 1 (Top Left-ish)
    gsap.to(blob1Ref.current, {
      x: 'random(-200, 200)',
      y: 'random(-200, 200)',
      scale: 'random(0.6, 1.4)',
      duration: 'random(10, 20)',
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });

    // Random floating animation for Blob 2 (Bottom Right-ish)
    gsap.to(blob2Ref.current, {
      x: 'random(-200, 200)',
      y: 'random(-200, 200)',
      scale: 'random(0.6, 1.4)',
      duration: 'random(15, 25)',
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: 2,
    });
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full h-full -z-50 overflow-hidden pointer-events-none'>
      {/* 1. Base Dark Background (Matches your globals.css) */}
      <div className='absolute inset-0 bg-[#1b1b1b]' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#282f4f] to-[#1b1b1b] opacity-80' />

      {/* 2. Ambient Amber Glow Blobs */}
      <div
        ref={blob1Ref}
        className='absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-amber-500/10 rounded-full blur-[120px] mix-blend-screen'
      />
      <div
        ref={blob2Ref}
        className='absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen'
      />

      {/* 3. Noise Overlay (The Texture) */}
      {/* This adds the "film grain" look. opacity-5 is subtle, increase to 10 for more grit. */}
      <div
        className='absolute inset-0 opacity-[0.06] mix-blend-overlay'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
}
