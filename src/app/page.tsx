'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { animateHero } from './animations/gsapAnimation';
import InfiniteMarquee from './test'
import { ReactLenis } from 'lenis/react'
import { MdOutlineArrowOutward } from 'react-icons/md';
import { RiAsterisk } from "react-icons/ri";

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
            <div className='basis-1/2 flex flex-col gap-2'>
                <a
                  href="https://www.linkedin.com/in/hee-guang-yang-737929247/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className='links flex justify-end items-center text-[clamp(20px,4vw,24px)]'>LinkedIn<MdOutlineArrowOutward className='arrow text-[24px]' /></span>
                </a>
                <a 
                  href="https://codepen.io/gy5563"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className='links flex justify-end items-center text-[clamp(20px,4vw,24px)]'>CodePen<MdOutlineArrowOutward className='arrow text-[24px]' /></span>
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
              <span ref={myEmail} className='links text-[clamp(20px,4vw,36px)] font-normal transform-3d'><a href="mailto:yang6405@gmail.com">yang6405@gmail.com</a></span>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-6 flex justify-center'>
        <div className='container'>
          <div className='flex flex-col md:flex-row'>
            <div className='basis-1/2'>
              <h1 className='font-manrope font-medium text-[clamp(36px,4vw,52px)] border-b'>Tech Stacks I Use</h1>
            </div>

            <div className="mt-6 basis-1/2 grid grid-cols-4 gap-4 font-manrope">
              <div className='flex justify-center items-center p-4 sm:p-6 md:p-8'>
                <img
                  src='images/nextjs.png'
                  alt='Random'
                  className='h-[clamp(40px,6vw,80px)]'
                />
              </div>
              <div className='flex justify-center items-center p-4 sm:p-6 md:p-8'>
                <img
                  src='images/gsap.png'
                  alt='Random'
                  className='h-[clamp(30px,6vw,80px)]'
                />
              </div>
              <div className='flex justify-center items-center p-4 sm:p-6 md:p-8'>
                <img
                  src='images/tailwindcss.png'
                  alt='Random'
                  className='h-[clamp(40px,6vw,80px)]'
                />
              </div>
              <div className='flex justify-center items-center p-4 sm:p-6 md:p-8'>
                <img
                  src='images/wordpress.png'
                  alt='Random'
                  className='h-[clamp(40px,6vw,80px)]'
                />
              </div>
              <div className='flex justify-center items-center p-4 sm:p-6 md:p-8'>
                <img
                  src='images/html.png'
                  alt='Random'
                  className='h-[clamp(40px,6vw,80px)]'
                />
              </div>
              <div className='flex justify-center items-center p-4 sm:p-6 md:p-8'>
                <img
                  src='images/css.png'
                  alt='Random'
                  className='h-[clamp(40px,6vw,80px)]'
                />
              </div>
              <div className='flex justify-center items-center p-4 sm:p-6 md:p-8'>
                <img
                  src='images/javascript.png'
                  alt='Random'
                  className='h-[clamp(40px,6vw,80px)] w-full'
                />
              </div>
            </div>
          </div>
          
          <div className='mt-6'>
            <h1 className='font-manrope font-medium text-[clamp(36px,4vw,52px)] transform-3d border-b'>Showcase Of Some Works I Did</h1>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="clip-path" ref={gallery1}>
              <a 
                href="https://timeless-vacation.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images/showcase-01.jpg"
                  alt="Timeless Vacation"
                  className="links object-cover w-full"
                />
              </a>
              <div className="flex justify-between items-center mt-2">
                <span className="font-manrope font-medium text-[clamp(24px,8vw,52px)] leading-[1.1]">
                  Timeless Vacation
                </span>
                <MdOutlineArrowOutward className="arrow text-[52px]" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="clip-path" ref={gallery2}>
                <a 
                  href="https://chooi.com.my/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/showcase-03.jpg"
                    alt="Chooi & Company"
                    className="links object-cover w-full"
                  />
                </a>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-manrope font-medium text-[clamp(24px,8vw,52px)] leading-[1.1]">
                    Chooi & Company
                  </span>
                  <MdOutlineArrowOutward className="arrow text-[52px]" />
                </div>
              </div>

              <div className="clip-path" ref={gallery3}>
                <a 
                  href="https://otterbarista.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="images/showcase-02.jpg"
                    alt="Otter Barista"
                    className="links object-cover w-full"
                  />
                </a>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-manrope font-medium text-[clamp(24px,8vw,52px)] leading-[1.1]">
                    Otter Barista
                  </span>
                  <MdOutlineArrowOutward className="arrow text-[52px]" />
                </div>
              </div>
            </div>
            </div>

          </div>
        </div>
      </section>
          
      <InfiniteMarquee />
      <section className='flex justify-center'>
        <div className='container'>
          <div className='flex items-center text-black p-6'>
            <div className='basis-1/2'>
              <h1 className='font-manrope text-[clamp(24px,4vw,80px)] leading-[1.1] font-normal'>Always open to great collaboration opportunities.</h1>
            </div>
            <div className="relative w-[clamp(120px,20vw,300px)] h-[clamp(120px,20vw,300px)] basis-1/2">
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
                    d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                  />
                </defs>
                <text
                  className="font-manrope font-semibold"
                  fontSize="20"
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
                <RiAsterisk className='arrow text-[clamp(36px,4vw,128px)]' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;