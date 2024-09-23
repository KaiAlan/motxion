import { InstructionType, tocType } from "@/types/content";
import WavyLineTile from "@/components/previews/wavy-line-tile";


const previewCode = `import { WavyLine } from "./wavy-line"


const WavyLineTile = () => {
  return (
    <div className='h-[30vh] w-full flex justify-center items-center'>
      <div className='flex flex-col justify-start items-end gap-2'>
        <WavyLine value='"Words are, of course, the most powerful drug used by mankind."' className="text-lg h-12" />
        <span className="text-sm">— Rudyard Kipling</span>
      </div>
    </div>
  )
}

export default WavyLineTile`


const tableOfContents: tocType[] = [
    {
        id: "Preview",
        href: "#preview",
    },
    {
        id: "Installation",
        href: "#installation",
    },
];

const installationInstructions: InstructionType[] = [
    {
        instruction: "Install dependencies",
        instructionCode: "npm i clsx tailwind-merge",
        language: "shell",
    },
    {
        instruction: "Add util file",
        description: "Add this code to your util file.",
        instructionCode: `import { ClassValue, clsx } from "clsx";
  import { twMerge } from "tailwind-merge";
  
  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
  `,
        language: "ts",
    },
    {
        instruction: "Copy the source code",
        instructionCode: `import { cn } from "@/lib/utils";

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
                  transitionDelay: \`calc(\${delay}ms * \${index})\`,
                }}
                className={\`inline-block relative transition-transform duration-500 group-hover:translate-y-full before:content-[attr(data-char)] before:left-0 before:absolute before:-top-full\`}
              >
                {word}
              </span>
            );
          })}
        </span>
      </div>
    );
  };
  
  `,
        language: "tsx",
        fileName: "components/ui/wavy-line.tsx",
    },
];

export const wavyLinePageContent = {
    toc: tableOfContents,
    installationInstructions: installationInstructions,
    previewCode: previewCode,
    previewComponent: WavyLineTile
}