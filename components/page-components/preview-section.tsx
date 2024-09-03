"use client";

import { ReactNode, Suspense } from "react";
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import Loader from "@/components/Loader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PreviewCodeBox from "../code-samples/mask-cursor/preview-code";

type PreviewSectionProps = {
  previewComponent: ReactNode;
  code: string;
};

const PreviewSection = ({ previewComponent, code }: PreviewSectionProps) => {
  const handleOnClick = () => {
    navigator.clipboard.writeText(code);
    toast("Copied Successfully.");
  };
  return (
    <Tabs defaultValue="preview" className="w-full max-w-[900px]">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <Suspense
          fallback={
            <Loader className="w-full h-[60vh] rounded-sm bg-transparent" />
          }
        >
          {previewComponent}
        </Suspense>
      </TabsContent>
      <TabsContent value="code" className="relative">
        <div className="max-h-[60vh] w-full px-2 rounded-lg overflow-auto overflow-x-hidden bg-muted/30 relative">
          <span
            className="group/icon h-8 w-8 flex justify-center items-center absolute top-4 right-4 cursor-pointer rounded-md hover:border hover:border-primary hover:shadow-lg hover:shadow-primary/70 z-10"
            onClick={handleOnClick}
          >
            <CopyIcon className="h-4 w-4 group-hover/icon:text-primary" />
          </span>
          <Suspense
            fallback={
              <Loader className="w-[900px] h-[60vh] rounded-sm bg-transparent" />
            }
          >
            <PreviewCodeBox language="tsx" previewCode={code} />
          </Suspense>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default PreviewSection;
