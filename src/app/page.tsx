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
    const split = SplitText.create('.split', { type: 'words, chars' });

    // now animate the characters in a staggered fashion
    gsap.from(split.chars, {
      duration: 1,
      y: 100, // animate from 100px below
      autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
      stagger: 0.05, // 0.05 seconds between each
    });

    gsap.to('.gallery', {
      clipPath: 'inset(0% 0% 0% 0%)', // reveal fully
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.gallery',
        start: 'top center',
      },
    });
  }, []);

  return (
    <>
      <ReactLenis root />
      <section className='max-w-full h-screen flex flex-col justify-center items-center px-4'>
        <div className='max-w-7xl flex flex-col items-start gap-6'>
          <div className='overflow-hidden py-4'>
            <h1 className='font-zalando font-bold text-6xl sm:text-6xl md:text-7xl lg:text-8xl text-amber-50 split'>
              Hello,{' '}
              <span className='inline-block translate-y-3'>
                <Image
                  className='max-w-16 sm:max-w-16 lg:max-w-28 rounded-2xl shadow-lg'
                  src='/images/portrait.png'
                  alt='Description'
                  width='120'
                  height='120'
                />
              </span>
              <br />
              I&apos;m Guang Yang
            </h1>
          </div>
          <p className='font-poppins font-light text-amber-50 max-w-2xl'>
            I&apos;m a Front-end Web Developer and UI/UX Designer from Selangor, Malaysia. Available
            for work.
          </p>
          <a
            href='mailto:yang6405@gmail.com'
            className='font-poppins rounded-4xl px-4 py-1.5 border border-white text-amber-50 font-light flex justify-center items-center gap-1 hover:bg-amber-50 hover:text-[#1b1b1b] transition duration-300 ease-in-out'
          >
            Reach me out!
            <RiArrowRightUpLine className='text-2xl' />
          </a>
        </div>
      </section>

      <section className='container flex flex-col md:flex-row lg:flex-row justify-between max-w-full pb-30'>
        <div className='flex flex-col gap-6 basis-1/2'>
          <span className='uppercase font-zalando text-amber-50 text-[1rem]'>Skills</span>
          <h2 className='font-zalando font-bold text-amber-50 leading-tight max-w-2xl text-4xl md:text-5xl lg:text-6xl'>
            All the technologies I use
          </h2>
          <p className='font-poppins font-light text-amber-50 max-w-2xl'>
            I build things mostly with these — but I love learning new ones.
          </p>
        </div>

        <div className='flex flex-col gap-12 justify-center basis-1/2'>
          <div className='flex flex-wrap flex-col gap-4'>
            <h3 className='font-zalando font-bold text-amber-50 text-2xl pb-2'>Tech Stack</h3>

            <div className='wrapper fadeout-horizontal max-w-2xs sm:max-w-2xs lg:max-w-3xl'>
              <div className='marquee-text'>
                <ul className='marquee-text-track font-poppins'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>TailwindCSS</li>
                  <li>React</li>
                  <li>NextJS</li>
                  <li>GSAP</li>
                  <li>Motion</li>
                  <li aria-hidden='true'>HTML</li>
                  <li aria-hidden='true'>CSS</li>
                  <li aria-hidden='true'>JavaScript</li>
                  <li aria-hidden='true'>TailwindCSS</li>
                  <li aria-hidden='true'>React</li>
                  <li aria-hidden='true'>NextJS</li>
                  <li aria-hidden='true'>GSAP</li>
                  <li aria-hidden='true'>Motion</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap flex-col gap-4'>
            <h3 className='font-zalando font-bold text-amber-50 text-2xl pb-2'>Other Tools</h3>

            <div className='wrapper fadeout-horizontal max-w-2xs sm:max-w-2xs lg:max-w-3xl'>
              <div className='marquee-text'>
                <ul className='marquee-text-track font-poppins'>
                  <li>Figma</li>
                  <li>Adobe XD</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <li>Framer</li>
                  <li>Shopify</li>
                  <li>WordPress</li>
                  <li>Webflow</li>
                  <li aria-hidden='true'>Figma</li>
                  <li aria-hidden='true'>Adobe XD</li>
                  <li aria-hidden='true'>Adobe Photoshop</li>
                  <li aria-hidden='true'>Adobe Illustrator</li>
                  <li aria-hidden='true'>Framer</li>
                  <li aria-hidden='true'>Shopify</li>
                  <li aria-hidden='true'>WordPress</li>
                  <li aria-hidden='true'>Webflow</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container flex justify-center max-w-full pb-30'>
        <div className='flex flex-col gap-12'>
          <div className='max-w-3xl flex flex-col gap-6'>
            <span className='uppercase font-zalando text-amber-50 text-[1rem]'>Services</span>
            <h2 className='font-zalando font-bold text-amber-50 leading-tight text-4xl md:text-5xl lg:text-6xl'>
              Explore my comprehensive service offerings
            </h2>
            <p className='font-poppins font-light text-amber-50 max-w-2xl'>
              Every service I offer is designed to help you attract, impress, and convert.
            </p>
          </div>

          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='border-l border-amber-50 pl-4 basis-1/4 flex flex-col justify-between'>
              <h3 className='font-zalando text-amber-50 text-2xl pb-2'>
                /Website
                <br /> Design
              </h3>
              <p className='font-poppins font-light text-amber-50'>
                I create user-focused interfaces that make navigation effortless and enjoyable,
                helping visitors stay longer and engage more deeply.
              </p>
            </div>
            <div className='border-l border-amber-50 pl-4 basis-1/4 flex flex-col justify-between'>
              <h3 className='font-zalando text-amber-50 text-2xl pb-2'>/Frontend Development</h3>
              <p className='font-poppins font-light text-amber-50'>
                Using modern frameworks like React and Tailwind, I ensure your site loads quickly,
                adapts perfectly to all screens, and delivers a seamless experience.
              </p>
            </div>
            <div className='border-l border-amber-50 pl-4 basis-1/4 flex flex-col justify-between'>
              <h3 className='font-zalando text-amber-50 text-2xl pb-2'>
                /Performance & Optimization
              </h3>
              <p className='font-poppins font-light text-amber-50'>
                I analyze and fine-tune your site’s speed, SEO, and accessibility to ensure every
                millisecond counts.
              </p>
            </div>
            <div className='border-l border-amber-50 pl-4 basis-1/4 flex flex-col justify-between'>
              <h3 className='font-zalando text-amber-50 text-2xl pb-2'>
                /Maintenance & Ongoing Support
              </h3>
              <p className='font-poppins font-light text-amber-50'>
                I provide regular updates, backups, and optimizations so you can focus on growing
                your business while I handle the tech side.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='container flex justify-center max-w-full pb-30'>
        <div className='flex flex-col gap-12'>
          <div className='max-w-3xl flex flex-col gap-6'>
            <span className='uppercase font-zalando text-amber-50 text-[1rem]'>Projects</span>
            <h2 className='font-zalando font-bold text-amber-50 leading-tight text-4xl md:text-5xl lg:text-6xl'>
              Featured works
            </h2>
            <p className='font-poppins font-light text-amber-50 max-w-2xl'>
              A selection of projects I’ve designed and built with care and precision.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12'>
            <div className='flex flex-col gap-3'>
              <a
                href='https://timeless-vacation.com/'
                className='hover:scale-90 transition duration-300 ease-in-out'
              >
                <Image
                  className='shadow-lg w-full aspect-video object-cover gallery'
                  src='/images/showcase-01.jpg'
                  alt='Description'
                  width={800}
                  height={800}
                />
              </a>
              <div className='flex justify-between items-center'>
                <h3 className='font-zalando text-amber-50 text-2xl'>Timeless Vacation</h3>
                <RiArrowRightUpLine className='text-4xl text-amber-50' />
              </div>
              <div className='flex'>
                <a
                  href='https://timeless-vacation.com/'
                  className='font-poppins font-light text-amber-50 '
                >
                  https://timeless-vacation.com/
                </a>
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <a href='https://ruma-home.com/' className='hover:scale-90 transition duration-300 ease-in-out'>
                <Image
                  className='shadow-lg w-full aspect-video object-cover gallery'
                  src='/images/showcase-06.jpg'
                  alt='Description'
                  width={800}
                  height={800}
                />
              </a>
              <div className='flex justify-between items-center'>
                <h3 className='font-zalando text-amber-50 text-2xl'>Ruma</h3>
                <RiArrowRightUpLine className='text-4xl text-amber-50' />
              </div>
              <div className='flex'>
                <a href='https://ruma-home.com/' className='font-poppins font-light text-amber-50 '>
                  https://ruma-home.com/
                </a>
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <a href='https://chooi.com.my/' className='hover:scale-90 transition duration-300 ease-in-out'>
                <Image
                  className='shadow-lg w-full aspect-video object-cover gallery'
                  src='/images/showcase-03.jpg'
                  alt='Description'
                  width={800}
                  height={800}
                />
              </a>
              <div className='flex justify-between items-center'>
                <h3 className='font-zalando text-amber-50 text-2xl'>Chooi & Company</h3>
                <RiArrowRightUpLine className='text-4xl text-amber-50' />
              </div>
              <div className='flex'>
                <a href='https://chooi.com.my/' className='font-poppins font-light text-amber-50 '>
                  https://chooi.com.my/
                </a>
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <a href='https://otterbarista.com/' className='hover:scale-90 transition duration-300 ease-in-out'>
                <Image
                  className='shadow-lg w-full aspect-video object-cover gallery'
                  src='/images/showcase-02.jpg'
                  alt='Description'
                  width={800}
                  height={800}
                />
              </a>
              <div className='flex justify-between items-center'>
                <h3 className='font-zalando text-amber-50 text-2xl'>Otter Barista</h3>
                <RiArrowRightUpLine className='text-4xl text-amber-50' />
              </div>
              <div className='flex'>
                <a
                  href='https://otterbarista.com/'
                  target='_blank'
                  className='font-poppins font-light text-amber-50'
                >
                  https://otterbarista.com/
                </a>
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
            <a
              href='#'
              className='font-poppins rounded-4xl px-4 py-1.5 border border-white text-amber-50 font-light flex justify-center items-center gap-1 hover:bg-amber-50 hover:text-[#1b1b1b] transition duration-300 ease-in-out'
            >
              Reach me out!
              <RiArrowRightUpLine className='text-2xl' />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
