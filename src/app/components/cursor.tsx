'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import '../globals.css';
import { useGSAP } from '@gsap/react';
import { MdOutlineArrowOutward } from "react-icons/md";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = cursorRef.current;
    const oel = cursorOuterRef.current;

    if (!el || !oel) return;

    // save original styles
    const originalInner = {
      scale: 1,
      backgroundColor: window.getComputedStyle(el!).backgroundColor,
      borderRadius: window.getComputedStyle(el!).borderRadius,
    };

    const originalOuter = {
      scale: 1,
      backgroundColor: window.getComputedStyle(oel!).backgroundColor,
      border: window.getComputedStyle(oel!).border,
    };

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        duration: 0.2,
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out',
      });

      gsap.to(cursorOuterRef.current, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out',
      });
    };

    document.addEventListener('mousemove', moveCursor);

    const hoverTargets = document.querySelectorAll(".links");

    hoverTargets.forEach((target) => {
    target.addEventListener("mouseenter", () => {
      gsap.to(el, {
        scale: 4,
        opacity: 0.9,
        backgroundColor: "#f5f5f5",
        duration: 0.3,
      });
      gsap.to(oel, {
        scale: 0,
        duration: 0.3,
      });
      gsap.to(el.querySelector(".arrow"), {
        opacity: 1,
        scale: 1,
        duration: 0.1,
        ease: "power3.out",
      });
    });
    target.addEventListener('mouseleave', () => {
      gsap.to(el, {
        ...originalInner, // revert inner
        duration: 0.3,
      });
      gsap.to(oel, {
        ...originalOuter, // revert outer
        duration: 0.3,
      });
      gsap.to(el.querySelector(".arrow"), {
        opacity: 0,
        scale: 0.5,
        duration: 0.1,
        ease: "power3.in",
      });
    });
  });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorOuterRef} className="custom-cursor-outer" />
      <div ref={cursorRef} className="custom-cursor">
        <MdOutlineArrowOutward className='arrow text-[12px]' />
      </div>
    </>
  );
};

export default CustomCursor;