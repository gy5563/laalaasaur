'use client'
import styles from './page.module.css'
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

export default function Home() {

  const firstText = useRef<HTMLDivElement>(null);
  const secondText = useRef<HTMLDivElement>(null);
  const slider = useRef(null);
  let xPercent = 0;
  const direction = 1;

useEffect( () => {
  if (firstText.current && secondText.current) {
    secondText.current.innerHTML = firstText.current.innerHTML;
    requestAnimationFrame(animate);
  }
}, [])


const animate = () => {
  if(xPercent <= -100){
    xPercent = 0;
  }
  if(xPercent > 0){
    xPercent = -100;
  }
  gsap.set(firstText.current, {xPercent: xPercent})
  gsap.set(secondText.current, {xPercent: xPercent})
  xPercent += 0.1 * direction;
  requestAnimationFrame(animate);
}

  return (
    <main className={styles.main}>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText} className='text-[clamp(80px,6vw,200px)]'>Eat. Sleep. Wake. Work.</p>
          <p ref={secondText} className='text-[clamp(80px,6vw,200px)]'></p>
        </div>
      </div>
    </main>
  )
}