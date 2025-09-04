'use client'

import { useEffect, useRef } from 'react'
import { MdArrowUpward } from "react-icons/md";
import gsap from 'gsap'

export default function ScrollToTop() {
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const el = btnRef.current

    // Initially hidden
    gsap.set(el, { autoAlpha: 0, y: 50 })

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out' })
      } else {
        gsap.to(el, { autoAlpha: 0, y: 50, duration: 0.4, ease: 'power2.in' })
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      ref={btnRef}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition-colors"
    >
      <MdArrowUpward size={20} />
    </button>
  )
}
