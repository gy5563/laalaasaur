// 'use client';

// import { useRef } from 'react';
// import Image from 'next/image';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function ParallaxImage({
//   src,
//   alt,
//   link,
// }: {
//   src: string;
//   alt: string;
//   link: string;
// }) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const imgRef = useRef<HTMLImageElement>(null);

//   useGSAP(
//     () => {
//       gsap.fromTo(
//         imgRef.current,
//         { y: -50 },
//         {
//           y: 50,
//           ease: 'none',
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: 'top bottom',
//             end: 'bottom top',
//             scrub: true,
//           },
//         },
//       );
//     },
//     { scope: containerRef },
//   );

//   return (
//     <a
//       href={link}
//       target='_blank'
//       rel='noopener noreferrer'
//       className='block overflow-hidden rounded-lg group h-[300px] md:h-[400px] relative'
//       ref={containerRef}
//     >
//       <div className='absolute inset-0 z-10 bg-black/20 group-hover:bg-transparent transition-all duration-500' />
//       <Image
//         ref={imgRef}
//         src={src}
//         alt={alt}
//         fill
//         className='object-cover scale-125 transition-transform duration-700 group-hover:scale-110'
//       />
//     </a>
//   );
// }
