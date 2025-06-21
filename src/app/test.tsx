'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const SplitReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const heading2Ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const heading = headingRef.current;
    const heading2 = heading2Ref.current;

    // if (!heading) return;

    // Split the heading into lines or words
    const tl = gsap.timeline({ defaults: { duration: 0.6, ease: 'power4.out', } });

    // Animate each line/word
    tl.fromTo(heading, { opacity: 0, scale: 0.8, rotateX: -90, }, { transformOrigin: "center bottom -10px", opacity: 1, scale: 1, rotateX: 0, duration: 1, ease: 'power4.out' }, )
      .fromTo(heading2, { opacity: 0, scale: 0.8, rotateX: -90,}, { transformOrigin: "center bottom -10px", opacity: 1, scale: 1, rotateX: 0, duration: 1, ease: 'power4.out' }, "-=0.7");

    // tl.timeScale(4);
  }, []);
  
  return (
    <div
      ref={containerRef}
      className="h-screen items-center justify-center bg-black text-white flex flex-col perspective-[600px]"
    >
      <h1
        ref={headingRef}
        className="text-[120px] font-savate font-bold uppercase text-center transform-3d"
      >
        SplitText SplitText
      </h1>
      <h2
        ref={heading2Ref}
        className="text-[120px] font-normal uppercase text-center transform-3d"
      >
        SplitText SplitText
      </h2>
    </div>
  );
};

export default SplitReveal;
