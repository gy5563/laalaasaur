'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { animateHero } from './animations/gsapAnimation';
import InfiniteMarquee from './test'
import { ReactLenis } from 'lenis/react'
import { MdOutlineArrowOutward } from 'react-icons/md';
import { FaAsterisk } from "react-icons/fa";

const Main = () => {
  //Hero section
  const sectionRef = useRef<HTMLDivElement>(null);
  const topLayerRef = useRef<HTMLDivElement>(null);
  const heading1 = useRef<HTMLHeadingElement>(null);
  const heading2 = useRef<HTMLHeadingElement>(null);
  const myText = useRef<HTMLHeadingElement>(null);
  const myEmail = useRef<HTMLHeadingElement>(null);
  const portfolioText = useRef<HTMLHeadingElement>(null);
  const showcaseText = useRef<HTMLHeadingElement>(null);
  const contactText = useRef<HTMLHeadingElement>(null);
  //Gallery
  const gallery1 = useRef<HTMLHeadingElement>(null);
  const gallery2 = useRef<HTMLHeadingElement>(null);
  const gallery3 = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (
      sectionRef.current &&
      topLayerRef.current &&
      heading1.current &&
      heading2.current &&
      myText.current &&
      portfolioText.current &&
      showcaseText.current &&
      contactText.current &&
      myEmail.current &&
      gallery1.current &&
      gallery2.current &&
      gallery3.current 
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
        contactText: contactText.current,
        myEmail: myEmail.current,
        //Gallery
        galleryOne: gallery1.current,
        galleryTwo: gallery2.current,
        galleryThree: gallery3.current,
      });
    }
  }, []);

  return (
    <>
      <ReactLenis root />
      <section
        ref={sectionRef}
        className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center"
      >
        <div className='container'>
          <h1 ref={heading1} className='perspective-h1 relative z-200 text-[clamp(36px,20vw,240px)] leading-none font-manrope font-bold text-amber-50 mix-blend-difference transform-3d'>Hello</h1>
          <h1 ref={heading2} className='perspective-h1 relative z-200 text-[clamp(36px,20vw,240px)] leading-none font-manrope font-bold text-amber-50 mix-blend-difference transform-3d'>I&apos;m Guang</h1>

          {/* Bottom layer (revealed) */}
          <div className="absolute px-2 sm:px-6 md:px-24 py-8 inset-0 bg-linear-to-t from-neutral-900 to-black font-manrope font-light text-white flex items-end z-10">
            <div className='basis-1/2'>
              <p className='text-[clamp(20px,4vw,32px)]'>Hi! Welcome to my portfolio showcase, I am Guang Yang, a web dev enthusiatic, specialized in front-end development. Currently discovering full stacks development, stay around for more projects upload!</p>
            </div>
            <div className='basis-1/2 '>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className='flex justify-end items-center text-[clamp(20px,4vw,24px)]'>LinkedIn<MdOutlineArrowOutward className='arrow text-[24px]' /></span>
                  <span className='flex justify-end items-center text-[clamp(20px,4vw,24px)]'>CodePen<MdOutlineArrowOutward className='arrow text-[24px]' /></span>
                  <span className='flex justify-end items-center text-[clamp(20px,4vw,24px)]'>LinkedIn<MdOutlineArrowOutward className='arrow text-[24px]' /></span>
                </a>
            </div>
          </div>

          {/* Top layer (clipped away on scroll) */}
          <div
            ref={topLayerRef}
           className="absolute py-4 px-2 sm:px-6 md:px-24 inset-0 bg-white text-black flex items-end justify-between z-20"
            style={{
              clipPath: 'inset(0% 0% 0% 0%)', // fully visible at start
            }}
          >
            <div className='perspective-[400px] flex flex-col gap-3'>
              <span ref={myText} className='text-[clamp(20px,4vw,36px)] leading-[1] font-manrope font-normal transform-3d'>/Web Designer</span>
              <span ref={portfolioText} className='text-[clamp(20px,4vw,36px)] leading-[1] font-manrope font-normal transform-3d'>/Front-End Web Developer</span>
              <span ref={showcaseText} className='text-[clamp(20px,4vw,36px)] leading-[1] font-manrope font-normal transform-3d'>/Web Animator</span>
            </div>
            <div className='perspective-[400px] flex flex-col font-manrope'>
              <span ref={contactText} className='flex items-center text-[clamp(20px,4vw,28px)] font-normal'><MdOutlineArrowOutward className='arrow text-[24px]' />Contact Me</span>
              <span ref={myEmail} className='email text-[clamp(20px,4vw,36px)] font-normal transform-3d'><a href="mailto:yang6405@gmail.com">yang6405@gmail.com</a></span>
            </div>
          </div>
        </div>
      </section>

      <section className='flex justify-center'>
        <div className='container'>
          <div className='mt-6'>
            <h1 className='font-manrope font-medium text-[clamp(24px,8vw,52px)] transform-3d'>Showcase of some works I did</h1>
          </div>
          <div className='mt-6 flex justify-center gap-2'>
            <div className='flex flex-col basis-1/2'>
              <div ref={gallery1} className='clip-path'>
                <img
                  src='images/showcase-01.jpg'
                  alt='Random'
                  className='showcase w-full h-[600px] object-cover'
                />
                <div className='flex justify-between items-center'>
                  <span className='font-manrope font-medium text-[clamp(24px,8vw,52px)]'>Timeless Vacation</span>
                  <MdOutlineArrowOutward className='arrow text-[52px]' />
                </div>
              </div>
            </div>
            <div className='flex flex-col basis-1/2'>
              <div ref={gallery2} className='clip-path'>
                <img
                  src='images/showcase-03.jpg'
                  alt='Random'
                  className='showcase w-full h-[400px] object-cover'
                />
                <div className='flex justify-between items-center'>
                  <span className='font-manrope font-medium text-[clamp(24px,8vw,52px)]'>Chooi & Company</span>
                  <MdOutlineArrowOutward className='arrow text-[52px]' />
                </div>
              </div>
              <div ref={gallery3} className='clip-path'>
                <img
                  src='images/showcase-02.jpg'
                  alt='Random'
                  className='showcase w-full h-[500px] object-cover'
                />
                <div className='flex justify-between items-center'>
                  <span className='font-manrope font-medium text-[clamp(24px,8vw,52px)]'>Otter Barista</span>
                  <MdOutlineArrowOutward className='arrow text-[52px]' />
                </div>
              </div>
            </div>
          </div>
          <InfiniteMarquee />
          <div className='mt-6 flex'>
            <div className='basis-1/2'>
              <div className='w-[clamp(200px,4vw,600px)]'>
                <h1 className='font-manrope font-medium text-[clamp(24px,4vw,36px)]'>Tech stack I use for most of the projects</h1>
              </div>
            </div>
            <div className='basis-1/2'>
              <div className='grid grid-cols-2 grid-rows-2 border border-gray-400 font-manrope h-dvh'>
                <div className='flex justify-center items-center border-r border-b border-gray-400'>
                  <img
                    src='images/nextjs.webp'
                    alt='Random'
                    className='h-8 object-cover'
                  />
                </div>
                <div className='flex justify-center items-center border-b border-gray-400'>
                  <img
                    src='images/gsap.png'
                    alt='Random'
                    className='h-8 object-cover'
                  />
                </div>
                <div className='flex justify-center items-center border-r border-gray-400'>
                  <img
                    src='images/tailwindcss.png'
                    alt='Random'
                    className='h-8 object-cover'
                  />
                </div>
                <div className='flex justify-center items-center'>
                  <img
                    src='images/wordpress.png'
                    alt='Random'
                    className='h-8 object-cover'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center'>
            <div className='basis-3/4'>
              <h1 className='font-manrope text-[clamp(36px,20vw,80px)]'>Always open to great collaboration opportunities.</h1>
            </div>
            <div className="relative w-[200px] h-[200px] basis-1/4">
              {/* Circle text */}
              <svg
                className="rotate-text"
                viewBox="0 0 200 200"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                  />
                </defs>
                <text
                  className="font-manrope font-semibold"
                  fontSize="16"
                  fill="#000"
                  textAnchor="middle"
                  style={{ letterSpacing: "2px" }}
                >
                  <textPath href="#circlePath" startOffset="50%">
                    Would like to say hi, drop me a email
                  </textPath>
                </text>
              </svg>

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <FaAsterisk className='arrow text-[36px]' />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Main;