'use client'

import useMousePosition from "@/hooks/useMousePosition";
import useScrollPosition from "@/hooks/useScrollPosition";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from 'lenis'
import { useEffect } from 'react';

const InvertedCursor = () => {
  const { scrollYProgress } = useScroll()
  const { x: mouseX, y: mouseY } = useMousePosition()
  const {y: scrollY } = useScrollPosition()
  const adjustedX = useTransform(scrollYProgress, [0, 1], [mouseX! - 190, mouseX! - 190]);
  const adjustedY = useTransform(scrollYProgress, [0, 1], [mouseY! + scrollY - 80, mouseY! + scrollY - 80]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);
  return (
    <motion.span
          className="h-6 w-6 rounded-full bg-typeface-1 mix-blend-difference absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none transform"
          style={{
            left: adjustedX,
            top: adjustedY,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        ></motion.span>
  )
}

export default InvertedCursor