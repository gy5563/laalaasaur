'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const topLayerRef = useRef<HTMLDivElement>(null);
  const headingOne = useRef<HTMLHeadingElement>(null);
  const headingTwo = useRef<HTMLHeadingElement>(null);
  const paragraphOne = useRef<HTMLHeadingElement>(null);
  const myText = useRef<HTMLHeadingElement>(null);
  const portfolioText = useRef<HTMLHeadingElement>(null);
  const showcaseText = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const topLayer = topLayerRef.current;
    const heading1 = headingOne.current;
    const heading2 = headingTwo.current;
    const my = myText.current;
    const portfolio = portfolioText.current;
    const showcase = showcaseText.current;

    let tl = gsap.timeline({delay: 0.3});
    tl.fromTo(heading1, { opacity: 0, scale: 0.8, rotateX: -90, }, { transformOrigin: "center bottom -10px", opacity: 1, scale: 1, rotateX: 0, duration: 1, ease: 'power4.out' }, )
      .fromTo(heading2, { opacity: 0, scale: 0.8, rotateX: -90, }, { transformOrigin: "center bottom -10px", opacity: 1, scale: 1, rotateX: 0, duration: 1, ease: 'power4.out' }, "-=0.7")
      .fromTo(my, { opacity: 0, scale: 0.9, rotateX: -90, }, { transformOrigin: "center bottom -30px", opacity: 1, scale: 1, rotateX: 0, duration: 1, ease: 'power4.out' }, "-=0.7")
      .fromTo(portfolio, { opacity: 0, scale: 0.9, rotateX: -90, }, { transformOrigin: "center bottom -30px", opacity: 1, scale: 1, rotateX: 0, duration: 1, ease: 'power4.out' }, "-=0.7")
      .fromTo(showcase, { opacity: 0, scale: 0.9, rotateX: -90, }, { transformOrigin: "center bottom -30px", opacity: 1, scale: 1, rotateX: 0, duration: 1, ease: 'power4.out' }, "-=0.7");


    if (!section || !topLayer) return;

    gsap.to(topLayer, {
      clipPath: 'inset(0% 0% 0% 100%)', // Reveal from right to left
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${section.offsetWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
      ease: 'none',
    });

    gsap.to(heading1,{
      xPercent: -50,
      scrollTrigger: {
        trigger: topLayer,
        start: 'top top',
        end: () => `+=${topLayer.offsetWidth}`,
        scrub: true,
      }
    })
  }, []);

  return (
    <>
        <section
          ref={sectionRef}
          className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center px-16 perspective-[600px]"
        >
          {/* Bottom layer (revealed) */}
          <div className="absolute inset-0 bg-linear-to-t from-neutral-900 to-black text-white flex items-end justify-start text-4xl font-bold z-10">
            <p ref={paragraphOne}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />Fugiat deserunt porro ipsa debitis recusandae blanditiis aut, <br />natus illum at molestiae incidunt exercitationem, <br />veritatis iure quia sapiente animi asperiores, cumque quas?</p>
          </div>
          {/* Top layer (clipped away on scroll) */}
          <div
            ref={topLayerRef}
            className="absolute inset-0 bg-white text-black flex items-end justify-start px-80 py-4 text-4xl font-bold z-20"
            style={{
              clipPath: 'inset(0% 0% 0% 0%)', // fully visible at start
            }}
          >
            <div className='perspective-[400px]'>
              <h2 ref={myText} className='transform-3d text-8xl'>My</h2>
              <h2 ref={portfolioText} className='transform-3d text-8xl'>Portfolio</h2>
              <h2 ref={showcaseText} className='transform-3d text-8xl'>Showcase</h2>
            </div>
          </div>
          <h1 ref={headingOne} className='z-100 lg:text-9xl md:text-6xl sm:text-3xl font-jost font-normal text-amber-50 mix-blend-difference transform-3d'>hello</h1>
          <h1 ref={headingTwo} className='z-100 lg:text-9xl md:text-6xl sm:text-3xl font-jost font-normal text-amber-50 mix-blend-difference transform-3d'>I'm Laalaasaur</h1>
      </section>
      <section>
        <h1>The work I did, and the people I helped.</h1>
        <div className='grid grid-cols-3 grid-rows-3 gap-4 px-24'>
            <div className='bg-black h-72'></div>
            <div className='bg-black h-72'></div>
            <div className='bg-black h-72'></div>
            <div className='bg-black h-72'></div>
            <div className='bg-black h-72'></div>
            <div className='bg-black h-72'></div>
            <div className='bg-black h-72'></div>
            <div className='bg-black h-72'></div>
            <div className='bg-black h-72'></div>
        </div>
      </section>
    </>

  );
};

export default Main;