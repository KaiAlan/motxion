import { Suspense } from "react";
import Loader from "@/components/Loader";
import MaskCursorEffect from "@/components/previews/MaskCursorEffect";
import previewCode from "@/components/code-samples/mask-cursor/preview-code-string";
import Heading from "@/components/page-components/heading";
import PreviewSection from "@/components/page-components/preview-section";
import Link from "next/link";
import InstallationSection, { InstructionType } from "@/components/page-components/installation-section";

const MaskCursorPage = () => {
  return (
    <div className="flex max-w-[1176px] relative">
      <div className="w-[900px]">
        <div id="preview" />
        <Heading
          title="Mask Cursor"
          description="A Mask Cursor Effect that reveals hidden text behind build With Nextjs and Framer Motion"
          badges={["Mask Reveal", "Cursor Effect"]}
        />
        {/* <Suspense
         fallback={
          <Loader className="w-[900px] h-[60vh] rounded-sm bg-transparent" />
        }
        > */}
        <PreviewSection
          previewComponent={<MaskCursorEffect />}
          code={previewCode}
        />
        {/* </Suspense> */}
        <div id="installation">
        <InstallationSection instructions={installationInstructions}  />
        </div>
      </div>
      <div className="hidden w-[226px] h-[calc(100vh-theme(spacing.40))] desktop:flex flex-col justify-start items-start gap-1 pl-12 sticky top-24 ">
        <h1>On this page</h1>
        {tableOfContents.map((items, index) => (
          <Link
            key={index}
            href={items.href}
            className="text-sm text-typeface-2 hover:text-typeface-1"
          >
            {items.id}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MaskCursorPage;

const tableOfContents = [
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
    instructionCode: "npm i framer-motion clsx tailwind-merge",
    language: 'shell'
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
    language: 'ts'
  },
  {
    instruction: "Copy the source code",
    instructionCode: `import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
`,
    language: 'tsx',
    fileName: 'components/ui/card-hover-effect.tsx'
  },
]