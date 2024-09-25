'use client'

import Lenis from 'lenis'
import { useEffect, useRef } from 'react';
import gsap from "gsap";

export default function InvertedCursor() {
  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef(null);
  const size = 30;

  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };
    moveCircle(mouse.current.x, mouse.current.y);
  };

  const moveCircle = (x: number, y: number) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative h-full">
      <div
        ref={circle}
        style={{
          width: size,
          height: size,
        }}
        className="top-0 left-0 fixed rounded-full bg-typeface-1 pointer-events-none mix-blend-difference z-[100]"
      />
    </div>
  );
}
