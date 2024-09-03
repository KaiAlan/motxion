"use client";

import { Suspense } from "react";
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";
import Loader from "@/components/Loader";
import { toast } from "sonner";
import { Separator } from "../ui/separator";
import PreviewCodeBox from "../code-samples/mask-cursor/preview-code";
import { Badge } from "../ui/badge";

export type InstructionType = {
  instruction: string;
  instructionCode: string;
  language: string;
  description?: string;
  fileName?: string;
};

type InstallationSectionProps = {
  instructions: InstructionType[];
};

const InstallationSection = ({ instructions }: InstallationSectionProps) => {
  const handleOnClick = (code: string) => {
    navigator.clipboard.writeText(code);
    toast("Copied Successfully.");
  };
  return (
    <div className="w-full flex flex-col justify-start items-start mt-10">
      <h1 className="text-xl font-josefinSans">Installation</h1>
      <Separator className="mb-8 mt-4 w-[900px]" />
      {instructions.map((item, index) => {
        let pb: string;
        index === instructions.length - 1 ? (pb = "pb-0") : (pb = "pb-8");
        return (
          <div key={index} className={`relative ml-4 ${pb}`}>
            <Separator orientation="vertical" className="absolute" />
            <span className="h-8 w-8 bg-muted rounded-full flex justify-center items-center absolute -left-4 -top-1">
              {index + 1}
            </span>
            <div className="flex flex-col justify-start items-start gap-4 ml-8">
              <h2 className="text-base">{item.instruction}</h2>
              {item.description && (
                <p className="text-sm text-typeface-2 font-openSans">{item.description}</p>
              )}
              {item.fileName && (
                <Badge className="bg-muted hover:bg-muted text-sm text-typeface-2 font-openSans">{item.fileName}</Badge>
              )}
              <div className="max-h-[550px] h-full w-[calc(900px-theme(spacing.12))] p-1 rounded-lg overflow-x-hidden bg-muted/30 relative">
                <span
                  className="group/icon h-8 w-8 flex justify-center items-center absolute top-4 right-4 cursor-pointer rounded-md hover:border hover:border-primary hover:shadow-lg hover:shadow-primary/70 z-10"
                  onClick={() => handleOnClick(item.instructionCode)}
                >
                  <CopyIcon className="h-4 w-4 group-hover/icon:text-primary" />
                </span>
                <Suspense
                  fallback={
                    <Loader className="w-[100px] h-full rounded-sm bg-transparent" />
                  }
                >
                  <PreviewCodeBox
                    language={item.language}
                    previewCode={item.instructionCode}
                  />
                </Suspense>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InstallationSection;
