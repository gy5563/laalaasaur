// /app/animations/heroAnimations.ts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function animateHero({
  section,
  topLayer,
  headingOne,
  headingTwo,
  myText,
  portfolioText,
  showcaseText,
  paragraphOne,
  galleryOne,
  galleryTwo,
  galleryThree,
  galleryFour,
  galleryFive,
}: {
  section: HTMLElement;
  topLayer: HTMLElement;
  headingOne: HTMLElement;
  headingTwo: HTMLElement;
  myText: HTMLElement;
  portfolioText: HTMLElement;
  showcaseText: HTMLElement;
  paragraphOne: HTMLElement;
  galleryOne: HTMLElement;
  galleryTwo: HTMLElement;
  galleryThree: HTMLElement;
  galleryFour: HTMLElement;
  galleryFive: HTMLElement;
}) {
  const tl = gsap.timeline({ delay: 0.3 });

  tl.fromTo(
    headingOne,
    { opacity: 0, scale: 0.75, rotateX: -90 },
    {
      transformOrigin: 'center bottom -10px',
      opacity: 1,
      scale: 1,
      rotateX: 0,
      duration: 1,
      ease: 'power4.out',
    }
  )
    .fromTo(
      headingTwo,
      { opacity: 0, scale: 0.75, rotateX: -90 },
      {
        transformOrigin: 'center bottom -10px',
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 1,
        ease: 'power4.out',
      },
      '-=0.7'
    )
    .fromTo(
      myText,
      { opacity: 0, scale: 0.75, rotateX: -90 },
      {
        transformOrigin: 'center bottom -30px',
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 1,
        ease: 'power4.out',
      },
      '-=0.7'
    )
    .fromTo(
      portfolioText,
      { opacity: 0, scale: 0.75, rotateX: -90 },
      {
        transformOrigin: 'center bottom -30px',
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 1,
        ease: 'power4.out',
      },
      '-=0.7'
    )
    .fromTo(
      showcaseText,
      { opacity: 0, scale: 0.75, rotateX: -90 },
      {
        transformOrigin: 'center bottom -30px',
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 1,
        ease: 'power4.out',
      },
      '-=0.7'
    );

  gsap.to(topLayer, {
    clipPath: 'inset(0% 0% 0% 100%)',
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

  gsap.to(headingOne, {
    xPercent: -50,
    scrollTrigger: {
      trigger: topLayer,
      start: 'top top',
      end: () => `+=${topLayer.offsetWidth}`,
      scrub: true,
    },
  });

  //Gallery Animations
  gsap.to(galleryOne, {
    clipPath: "inset(0% 0% 0% 0%)",
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: galleryOne,
      start: 'center bottom',
    },
  });

  gsap.to(galleryTwo, {
    clipPath: "inset(0% 0% 0% 0%)",
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: galleryTwo,
      start: 'center bottom',
    },
  });

  gsap.to(galleryThree, {
    clipPath: "inset(0% 0% 0% 0%)",
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: galleryThree,
      start: 'center bottom',
    },
  });

  gsap.to(galleryFour, {
    clipPath: "inset(0% 0% 0% 0%)",
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: galleryFour,
      start: 'center bottom',
    },
  });

  gsap.to(galleryFive, {
    clipPath: "inset(0% 0% 0% 0%)",
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: galleryFive,
      start: 'center bottom',
    },
  });
}
