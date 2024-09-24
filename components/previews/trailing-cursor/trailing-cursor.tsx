import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";
import { cn } from "@/lib/utils";

const TrailingCursor = ({
  posX,
  posY,
  duration,
  className,
}: {
  posX?: number;
  posY?: number;
  duration?: number;
  className?: string;
}) => {
  posX = posX || 500;
  posY = posY || 300;
  duration = duration || 3;
  const { x, y } = useMousePosition();
  return (
    <motion.div
      className={cn(
        "h-[300px] w-[300px] rounded-full bg-gradient-to-t from-[#92209D]  via-[#D84549] to-[#D34740] blur-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        className
      )}
      animate={{
        left: x - posX,
        top: y - posY,
      }}
      transition={{ type: "tween", ease: "backOut", duration: duration }}
    ></motion.div>
  );
};

export default TrailingCursor;
