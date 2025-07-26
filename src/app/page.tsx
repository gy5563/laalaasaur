'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { animateHero } from './animations/gsapAnimation';
import InfiniteMarquee from './test'

const Main = () => {
  //Hero section
  const sectionRef = useRef<HTMLDivElement>(null);
  const topLayerRef = useRef<HTMLDivElement>(null);
  const heading1 = useRef<HTMLHeadingElement>(null);
  const heading2 = useRef<HTMLHeadingElement>(null);
  const paragraphOne = useRef<HTMLHeadingElement>(null);
  const myText = useRef<HTMLHeadingElement>(null);
  const portfolioText = useRef<HTMLHeadingElement>(null);
  const showcaseText = useRef<HTMLHeadingElement>(null);
  //Gallery
  const gallery1 = useRef<HTMLHeadingElement>(null);
  const gallery2 = useRef<HTMLHeadingElement>(null);
  const gallery3 = useRef<HTMLHeadingElement>(null);
  const gallery4 = useRef<HTMLHeadingElement>(null);
  const gallery5 = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (
      sectionRef.current &&
      topLayerRef.current &&
      heading1.current &&
      heading2.current &&
      myText.current &&
      portfolioText.current &&
      showcaseText.current &&
      paragraphOne.current &&
      gallery1.current &&
      gallery2.current &&
      gallery3.current &&
      gallery4.current &&
      gallery5.current
    ) {
      animateHero({
        //Hero section
        section: sectionRef.current,
        topLayer: topLayerRef.current,
        headingOne: heading1.current,
        headingTwo: heading2.current,
        myText: myText.current,
        portfolioText: portfolioText.current,
        showcaseText: showcaseText.current,
        paragraphOne: paragraphOne.current,
        //Gallery
        galleryOne: gallery1.current,
        galleryTwo: gallery2.current,
        galleryThree: gallery3.current,
        galleryFour: gallery4.current,
        galleryFive: gallery5.current,
      });
    }
  }, []);

  return (
    <>
        <section
          ref={sectionRef}
          className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center px-16 perspective-[600px]"
        >
          {/* Bottom layer (revealed) */}
          <div className="absolute inset-0 bg-linear-to-t from-neutral-900 to-black text-white flex items-end justify-start font-jost text-4xl z-10">
            <p ref={paragraphOne}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />Fugiat deserunt porro ipsa debitis recusandae blanditiis aut, <br />natus illum at molestiae incidunt exercitationem, <br />veritatis iure quia sapiente animi asperiores, cumque quas?</p>
          </div>
          {/* Top layer (clipped away on scroll) */}
          <div
            ref={topLayerRef}
            className="absolute inset-0 bg-white text-black flex items-end justify-start text-4xl font-bold z-20"
            style={{
              clipPath: 'inset(0% 0% 0% 0%)', // fully visible at start
            }}
          >
            <div className='perspective-[400px] flex flex-col -translate-y-1/4 translate-x-1/4'>
              <span ref={myText} className='text-[clamp(24px,8vw,72px)] font-jost font-normal transform-3d text-8xl'>My</span>
              <span ref={portfolioText} className='text-[clamp(24px,8vw,72px)] font-jost font-normal transform-3d text-8xl'>Portfolio</span>
              <span ref={showcaseText} className='text-[clamp(24px,8vw,72px)] font-jost font-normal transform-3d text-8xl'>Showcase</span>
            </div>
          </div>
          <h1 ref={heading1} className='z-100 text-[clamp(36px,12vw,160px)] font-jost font-normal text-amber-50 mix-blend-difference transform-3d'>hello</h1>
          <h1 ref={heading2} className='z-100 text-[clamp(36px,12vw,160px)] font-jost font-normal text-amber-50 mix-blend-difference transform-3d'>I&apos;m Laalaasaur</h1>
      </section>
      <section className='px-[8%]'>
        <div className='mt-6 w-[900px]'>
          <h1 className='text-[clamp(24px,8vw,72px)] font-jost font-normal transform-3d text-8xl'>The work I did, and the people I helped.</h1>
        </div>
        <div className='mt-6 flex justify-center'>
          <div className='flex flex-col basis-1/2'>
            <div ref={gallery1} className='clip-path'>
              <img
                src='https://picsum.photos/id/231/200/300'
                alt='Random'
                className='w-full h-[200px] object-cover'
              />
            </div>
            <div ref={gallery2} className='clip-path'>
              <img
                src='https://picsum.photos/id/5/200/300'
                alt='Random'
                className='w-full h-[200px] object-cover'
              />
            </div>
            <div ref={gallery3} className='clip-path'>
              <img
                src='https://picsum.photos/id/237/200/300'
                alt='Random'
                className='w-full h-[600px] object-cover'
              />
            </div>
          </div>
          <div className='flex flex-col basis-1/2'>
            <div ref={gallery4} className='clip-path'>
              <img
                src='https://picsum.photos/id/123/200/300'
                alt='Random'
                className='w-full h-[400px] object-cover'
              />
            </div>
            <div ref={gallery5} className='clip-path'>
              <img
                src='https://picsum.photos/id/66/200/300'
                alt='Random'
                className='w-full h-[200px] object-cover'
              />
            </div>
          </div>
        </div>
        <InfiniteMarquee />
      </section>
    </>

  );
};

export default Main;