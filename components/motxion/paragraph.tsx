"use client";

import { useRef } from "react";
import { useScroll, motion, MotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
cn

export default function Paragraph({ value, className }: { value: string; className?: string }) {
  const element = useRef(null);
  const parent = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["0.25 end", "end 1.1"],
  });

  const {scrollYProgress: parentProgress } = useScroll({
    target: parent,
    offset: ['start center', 'center center']
  })


  const words = value.split(" ");
  return (
    <div
      ref={element}
      className="relative h-[calc(100vh+94*3*1vh)]"
    >
      <div className={cn("sticky top-0 min-h-[100vh] text-6xl flex justify-center items-center mx-auto", className)}>
        <motion.p
        ref={parent} 
        style={{opacity: parentProgress}}
        className="font-medium max-w-[1200px] p-10 flex-wrap leading-[4rem]">
             <span className="text-sm tracking-widest font-semibold px-24 inline-flex relative -top-6">VISION</span>
          {words.map((word, idx) => {
            const start = idx / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={idx} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            );
          })}
        </motion.p>
      </div>
    </div>
  );
}

const Word = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: number[];
  progress: MotionValue<number>;
}) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className=" inline-block mr-3 relative">
      {characters.map((character, idx) => {
        const start = range[0] + step * idx;
        const end = range[0] + step * (idx + 1);
        return (
          <Character key={idx} range={[start, end]} progress={progress}>
            {character}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: number[];
  progress: MotionValue<number>;
}) => {

    const opacity = useTransform(progress, range, [0, 1])
  return (
    <span>
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity: opacity }} >{children}</motion.span>
    </span>
  )
};
