import Paragraph from "@/components/motxion/paragraph";
import { Separator } from "@/components/ui/separator";
import InvertedCursor from "@/components/previews/inverted-cursor/inverted-cursor";
import { SparklesCore } from "@/components/sparkels";

const Home = () => {
  return (
    <div className="h-full w-full cursor-none">
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={2}
        particleDensity={7}
        speed={0.5}
        className="w-full h-full fixed left-0 top-0"
        particleColor="#FFFFFF"
      />
      <div className="flex flex-col justify-start py-20 relative">
        <InvertedCursor />
        <div className="flex flex-col items-end text-start gap-0 pb-40">
          <span className="flex flex-col gap-0">
            <span className="text-[9rem] leading-[8rem] h-[8rem] font-semibold text-left overflow-hidden">
              <span className="block animate-reveal">STUNNING</span>
            </span>
            <span className="text-[9rem] leading-[8rem] text-primary font-semibold text-left overflow-hidden">
              <span className="block animate-reveal">TYPE-SAFE</span>
            </span>
            <span className="flex items-end gap-4 text-[9rem] leading-[8rem] font-semibold text-left overflow-hidden">
              <span className="block animate-reveal">ANIMATED</span>
              <span className="flex flex-col justify-center text-xl leading-8 font-medium gap-0 animate-reveal">
                <span>JUST COPY,</span>
                <span>PASTE</span>
                <span>AND SHINE!</span>
              </span>
            </span>
            <span className="text-[9rem] leading-[8rem] font-semibold text-left overflow-hidden">
              <span className="block animate-reveal">COMPONENTS</span>
            </span>
          </span>
        </div>
        <section className="flex justify-end">
          <div className="flex flex-col justify-center items-center gap-4 overflow-hidden">
            <span className="text-sm text-typeface-1">BUILT WITH</span>
            <span className="flex justify-end items-center gap-24 animate-reveal">
              <img src="/nextjs-icon.svg" alt="nextjs-icon" />
              <img src="/react-icon.svg" alt="react-icon" />
              <img src="/framer-motion-icon.svg" alt="framer-motion-icon" />
              <img src="/tailwind-icon.svg" alt="tailwind-icon" />
            </span>
          </div>
        </section>
        <Paragraph
          value="Transform Your React Apps with Beautiful, Type-Safe Animated Components - Effortlessly Ready to Use!"
          className="justify-end"
        />
        <section className="relative flex justify-end">
          <h2 className="absolute top-0 left-0">ANIMATION TYPES</h2>
          <div className="text-8xl tracking-wider font-semibold inline-flex overflow-hidden flex-col">
            <Separator className="bg-typeface-1" />
            {animationTypeLinks.map((item, index) => {
              return (
                <>
                  <span
                    key={index}
                    data-char={item.attr}
                    className="py-6 pr-10 cursor-pointer relative overflow-hidden transition-transform before:content-[attr(data-char)] before:absolute before:top-full before:left-0 before:py-6 before:pl-6 before:w-full before:h-full before:bg-typeface-1 before:transition-[top] before:duration-300 before:ease-in-out before:transform-cpu hover:before:top-0 hover:text-background"
                  >
                    {item.title}
                  </span>
                  <Separator className="bg-typeface-1" />
                </>
              );
            })}
          </div>
        </section>
      </div>
      <span className="bg-blue-900 opacity-30 h-4/5 w-full rounded-full fixed -bottom-[70%] left-0 blur-[700px] -z-30" />
    </div>
  );
};

export default Home;

const animationTypeLinks = [
  {
    title: "CURSOR EFFECT",
    attr: "CURSOR EFFECT",
  },
  {
    title: "ON SCROLL",
    attr: "ON SCROLL",
  },
  {
    title: "TEXT",
    attr: "TEXT",
  },
  {
    title: "& MUCH MORE...",
    attr: "& MUCH MORE...",
  },
];
