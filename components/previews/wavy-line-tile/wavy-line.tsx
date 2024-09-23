import { cn } from "@/lib/utils";

export const WavyLine = ({
    value,
    delay,
    className,
  }: {
    value: string;
    delay?: number;
    className?: string;
  }) => {
    delay = delay || 30;
    const paragraph = value.split(" ");
    return (
      <div
        className={cn(
          "group px-4 py-2 flex h-[2.7rem] text-lg font-semibold cursor-default overflow-hidden",
          className
        )}
      >
        <span className="inline-flex gap-1 overflow-hidden">
          {paragraph.map((word, index) => {
            return (
              <span
                key={index}
                data-char={word}
                style={{
                  transitionDelay: `calc(${delay}ms * ${index})`,
                }}
                className={`inline-block relative transition-transform duration-500 group-hover:translate-y-full before:content-[attr(data-char)] before:left-0 before:absolute before:-top-full`}
              >
                {word}
              </span>
            );
          })}
        </span>
      </div>
    );
  };
  