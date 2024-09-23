import { InstructionType, tocType } from "@/types/content";
import WavyWordMenu from "@/components/previews/wavy-word-menu";


const previewCode = `import { WavyWord } from './wavy-word'

const WavyWordMenu = () => {
  return (
    <div className='h-[60vh] w-full flex justify-center items-center'>
      <div className='flex flex-col justify-start items-start gap-2'>
        <WavyWord value='HOME' className='text-2xl h-14' />
        <WavyWord value='PORTFOLIO' className='text-2xl h-14' />
        <WavyWord value='ABOUT' className='text-2xl h-14' />
        <WavyWord value='WORK' className='text-2xl h-14' />
        <WavyWord value='CONTACT' className='text-2xl h-14' />
      </div>
    </div>
  )
}

export default WavyWordMenu`


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
                transitionDelay: \`calc(\${delay}ms * \${index})\`,
              }}
              className={\`inline-block relative transition-transform duration-500 group-hover:translate-y-full before:content-[attr(data-char)] before:left-0 before:absolute before:-top-full\`}
            >
              {char}
            </span>
          );
        })}
      </span>
    </div>
  );
};
  `,
        language: "tsx",
        fileName: "components/ui/wavy-word.tsx",
    },
];

export const wavyWordPageContent = {
    toc: tableOfContents,
    installationInstructions: installationInstructions,
    previewCode: previewCode,
    previewComponent: WavyWordMenu
}