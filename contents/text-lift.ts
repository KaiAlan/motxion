import { InstructionType, tocType } from "@/types/content";
import TextHoverLift from "@/components/previews/text-hover-lift";


const previewCode = `import TextLift from "./text-lift"

const TextHoverLift = () => {
  return (
    <div className='h-[50vh] w-full flex justify-center items-center'>
      <div className='flex flex-col justify-start items-start gap-2'>
        <TextLift value="EXPERIMENTS" />
      </div>
    </div>
  )
}

export default TextHoverLift`


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

const TextLift = ({ value, className }: { value: string; className?: string }) => {
  const characters = value.split("");
  return (
    <div className={cn("relative w-full px-2 py-1 flex text-center text-9xl font-semibold cursor-default  overflow-hidden", className)}>
      <span className=" inline-flex overflow-hidden">
        {characters.map((char, index) => {
          return (
            <span
              key={index}
              data-char={char}
              className={\`relative transition-transform duration-500 before:content-[attr(data-char)] before:left-0 before:absolute before:-top-full hover:translate-y-full hover:transform-cpu\`}
            >
              {char}
            </span>
          );
        })}
      </span>
    </div>
  );
};

export default TextLift;

  `,
        language: "tsx",
        fileName: "components/ui/text-lift.tsx",
    },
];


export const textLiftPageContent = {
    toc: tableOfContents,
    installationInstructions: installationInstructions,
    previewCode: previewCode,
    previewComponent: TextHoverLift
}