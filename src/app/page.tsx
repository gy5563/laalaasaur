'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ReactLenis } from 'lenis/react';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { RiAsterisk } from 'react-icons/ri';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Main = () => {

  useGSAP(() => {
    const split = SplitText.create(".split", { type: "words, chars" });

    // now animate the characters in a staggered fashion
    gsap.from(split.chars, {
      duration: 1,
      y: 100,       // animate from 100px below
      autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
      stagger: 0.05 // 0.05 seconds between each
    });

    gsap.to(".gallery", {
      clipPath: "inset(0% 0% 0% 0%)", // reveal fully
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".gallery",
        start: "top center"
      }
    });
  }, []);

  return (
    <>
      <ReactLenis root />
      <section className='max-w-full h-screen flex flex-col justify-center items-center'>
        <div className='max-w-7xl flex flex-col items-start gap-6'>
          <h1
            className='font-zalando font-bold perspective-h1 relative z-200 leading-none text-amber-50 split'
          >
            Hello,{' '}
            <span className='inline-block translate-y-3'>
              <Image
                className='max-w-32 rounded-2xl shadow-lg'
                src='/images/portrait.png'
                alt='Description'
                width='120'
                height='120'
              />
            </span>
          </h1>
          <h1
            className='font-zalando font-bold perspective-h1 relative z-200 leading-none text-amber-50 split'
          >
            I&apos;m Guang Yang
          </h1>
          <p className='font-poppins font-light text-amber-50 max-w-2xl'>
            I&apos;m a Front-end Web Developer and UI/UX Designer from Selangor,
            Malaysia. Available for work.
          </p>
          <a href='#' className='font-poppins rounded-4xl px-4 py-1.5 border border-white text-amber-50 font-light flex justify-center items-center gap-1 hover:bg-amber-50 hover:text-[#1b1b1b] transition duration-300 ease-in-out'>Reach me out!<RiArrowRightUpLine className='text-2xl' /></a>
        </div>
      </section>

      <section className='container flex justify-center max-w-full pb-30'>
        <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between'>
          <div className='flex flex-col basis-1/2 gap-3'>
            <span className='uppercase font-zalando text-amber-50 text-[1rem]'>Skills</span>
            <h2 className='font-zalando font-bold text-amber-50 leading-tight max-w-2xl'>
              All those technologies I use
            </h2>
            <p className='font-poppins font-light text-amber-50 max-w-2xl'>I build things mostly with these — but I love learning new ones.</p>
          </div>

          <div className='flex basis-1/2 gap-6'>
            <div className='flex flex-wrap flex-col gap-4'>
              <h3 className='font-zalando text-amber-50 text-2xl pb-2 [writing-mode:vertical-lr] [text-orientation:mixed]'>Tech Stack</h3>
              <ul className='flex gap-1 flex-wrap'>
                <li className='tags'>HTML</li>
                <li className='tags'>CSS</li>
                <li className='tags'>JavaScript</li>
                <li className='tags'>React</li>
                <li className='tags'>NextJS</li>
                <li className='tags'>TailwindCSS</li>
                <li className='tags'>GSAP</li>
                <li className='tags'>Motion</li>
              </ul>
            </div>

            <div className='flex flex-wrap flex-col gap-3'>
              <h3 className='font-zalando text-amber-50 text-2xl pb-2 [writing-mode:vertical-lr] [text-orientation:mixed]'>Other Tools</h3>
              <ul className='flex gap-1 flex-wrap'>
                <li className='tags'>Figma</li>
                <li className='tags'>Adobe XD</li>
                <li className='tags'>Adobe Photoshop</li>
                <li className='tags'>Adobe Illustratorp</li>
                <li className='tags'>Framer</li>
                <li className='tags'>Shopify</li>
                <li className='tags'>WordPress</li>
                <li className='tags'>Webflow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='container flex justify-center max-w-full pb-30'>
        <div className='flex flex-col gap-12'>
          <div className='max-w-3xl flex flex-col gap-6'>
            <span className='uppercase font-zalando text-amber-50 text-[1rem]'>Services</span>
            <h2 className='font-zalando font-bold text-amber-50 leading-tight'>
              Explore my comprehensive service offerings
            </h2>
            <p className='font-poppins font-light text-amber-50 max-w-2xl'>Every service I offer is designed to help you attract, impress, and convert.</p>
          </div>

          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='border-l border-amber-50 pl-4 basis-1/4 flex flex-col justify-between'>
              <h3 className='font-zalando text-amber-50 text-2xl pb-2'>/Website<br /> Design</h3>
              <p className='font-poppins font-light text-amber-50'>I create user-focused interfaces that make navigation effortless and enjoyable, helping visitors stay longer and engage more deeply.</p>
            </div>
            <div className='border-l border-amber-50 pl-4 basis-1/4 flex flex-col justify-between'>
              <h3 className='font-zalando text-amber-50 text-2xl pb-2'>/Frontend Development</h3>
              <p className='font-poppins font-light text-amber-50'>Using modern frameworks like React and Tailwind, I ensure your site loads quickly, adapts perfectly to all screens, and delivers a seamless experience.</p>
            </div>
            <div className='border-l border-amber-50 pl-4 basis-1/4 flex flex-col justify-between'>
              <h3 className='font-zalando text-amber-50 text-2xl pb-2'>/Performance & Optimization</h3>
              <p className='font-poppins font-light text-amber-50'>I analyze and fine-tune your site’s speed, SEO, and accessibility to ensure every millisecond counts.</p>
            </div>
            <div className='border-l border-amber-50 pl-4 basis-1/4 flex flex-col justify-between'>
              <h3 className='font-zalando text-amber-50 text-2xl pb-2'>/Maintenance & Ongoing Support</h3>
              <p className='font-poppins font-light text-amber-50'>I provide regular updates, backups, and optimizations so you can focus on growing your business while I handle the tech side.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='container flex justify-center max-w-full pb-30'>
        <div className='flex flex-col gap-12'>
          <div className='max-w-3xl flex flex-col gap-6'>
            <span className='uppercase font-zalando text-amber-50 text-[1rem]'>Projects</span>
            <h2 className='font-zalando font-bold text-amber-50 leading-tight'>
              Featured works
            </h2>
            <p className='font-poppins font-light text-amber-50 max-w-2xl'>A selection of projects I’ve designed and built with care and precision.</p>
          </div>

          <div className='grid grid-cols-2 gap-12'>
            <div className='flex flex-col gap-3'>
              <Image
                className='shadow-lg w-full aspect-video object-cover gallery'
                src='/images/showcase-01.jpg'
                alt='Description'
                width={800}
                height={800}
              />
              <div className='flex justify-between items-center'>
                <h3 className='font-zalando text-amber-50 text-2xl'>Timeless Vacation</h3>
                <RiArrowRightUpLine className='text-4xl text-amber-50' />
              </div>
              <div className='flex'>
                <a href='https://timeless-vacation.com/' className='font-poppins font-light text-amber-50 '>https://timeless-vacation.com/</a>
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <Image
                className='shadow-lg w-full aspect-video object-cover gallery'
                src='/images/showcase-02.jpg'
                alt='Description'
                width={800}
                height={800}
              />
              <div className='flex justify-between items-center'>
                <h3 className='font-zalando text-amber-50 text-2xl'>Otter Barista</h3>
                <RiArrowRightUpLine className='text-4xl text-amber-50' />
              </div>
              <div className='flex'>
                <a href='https://otterbarista.com/' target='_blank' className='font-poppins font-light text-amber-50'>https://otterbarista.com/</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='flex justify-center'>
        <div className='flex-col items-center text-black p-6'>
          <div className='basis-1/2'>
            <h3 className='font-zalando font-normal text-amber-50'>
              Want something custom? Let’s talk about your idea!
            </h3>
            <a href='#' className='font-poppins rounded-4xl px-4 py-1.5 border border-white text-amber-50 font-light flex justify-center items-center gap-1 hover:bg-amber-50 hover:text-[#1b1b1b] transition duration-300 ease-in-out'>Reach me out!<RiArrowRightUpLine className='text-2xl' /></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
