import { cn } from "@/lib/utils";

export const WavyWord = ({
  value,
  delay,
  className,
}: {
  value: string;
  delay?: number;
  className?: string;
}) => {
  delay = delay || 30;
  const characters = value.split("");
  return (
    <div
      className={cn(
        "group px-4 py-2 flex h-[5rem] text-5xl font-semibold cursor-default overflow-hidden",
        className
      )}
    >
      <span className="inline-flex overflow-hidden">
        {characters.map((char, index) => {
          return (
            <span
              key={index}
              data-char={char}
              style={{
                transitionDelay: `calc(${delay}ms * ${index})`,
              }}
              className={`inline-block relative transition-transform duration-500 group-hover:translate-y-full before:content-[attr(data-char)] before:left-0 before:absolute before:-top-full`}
            >
              {char}
            </span>
          );
        })}
      </span>
    </div>
  );
};