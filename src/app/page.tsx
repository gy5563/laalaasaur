'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { animateHero } from './animations/gsapAnimation';
import { ReactLenis } from 'lenis/react';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { RiAsterisk } from 'react-icons/ri';
import Image from 'next/image';
import CircularText from './components/circulartext';

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
      contactText.current &&
      myEmail.current &&
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
        contactText: contactText.current,
        myEmail: myEmail.current,
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
      <ReactLenis root />
      <section className='max-w-full h-screen flex flex-col justify-center items-center'>
        <div className='max-w-[1280px] flex flex-col items-start gap-6'>
          <h1
            ref={heading1}
            className='font-zalando font-bold perspective-h1 relative z-200 leading-none text-amber-50 transform-3d'
          >
            Hello,{' '}
            <span className='inline-block translate-y-[12px]'>
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
            ref={heading2}
            className='font-zalando font-bold perspective-h1 relative z-200 leading-none text-amber-50 transform-3d'
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

      <section className='flex justify-center max-w-full pb-30'>
        <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row container justify-between'>
          <div className='flex flex-col basis-1/2 gap-3'>
            <span className='uppercase font-zalando text-amber-50 text-[1rem]'>Skills</span>
            <h2 className='font-zalando font-bold text-amber-50 leading-[1.25] max-w-2xl'>
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

      <section className='flex justify-center max-w-full pb-30'>
        <div className='container flex flex-col gap-12'>
          <div className='max-w-3xl flex flex-col gap-6'>
            <span className='uppercase font-zalando text-amber-50 text-[1rem]'>Services</span>
            <h2 className='font-zalando font-bold text-amber-50 leading-[1.25]'>
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

      <section className='flex justify-center max-w-full pb-30'>
        <div className='container flex flex-col gap-12'>
          <div className='max-w-3xl flex flex-col gap-6'>
            <span className='uppercase font-zalando text-amber-50 text-[1rem]'>Projects</span>
            <h2 className='font-zalando font-bold text-amber-50 leading-[1.25]'>
              Featured works
            </h2>
            <p className='font-poppins font-light text-amber-50 max-w-2xl'>A selection of projects I’ve designed and built with care and precision.</p>
          </div>

          <div className='container grid grid-cols-2 gap-12'>
            <div className='flex flex-col gap-3'>
              <Image
                className='shadow-lg w-full aspect-[16/9] object-cover'
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
                className='shadow-lg w-full aspect-[16/9] object-cover'
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
        <div className='container'>
          <div className='flex-col items-center text-black p-6'>
            <div className='basis-1/2'>
              <h3 className='font-zalando font-normal text-amber-50'>
                Always open to great collaboration opportunities.
              </h3>
            </div>
            <CircularText
              text='DROP*ME*A*MESSAGE*'
              onHover='speedUp'
              spinDuration={20}
              className='font-poppins font-light'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
