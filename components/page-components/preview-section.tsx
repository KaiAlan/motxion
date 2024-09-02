"use client";

import { ReactNode, Suspense, useState, useEffect } from "react";
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";
import Loader from "@/components/Loader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PreviewCodeBox from "../code-samples/mask-cursor/preview-code";

type PreviewSectionProps = {
  previewComponent: ReactNode;
  code: string;
};

const PreviewSection = ({
  previewComponent,
  code,
}: PreviewSectionProps) => {
  const [copyClicked, setCopyClicked] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (copyClicked) {
      timer = setTimeout(() => {
        setCopyClicked(false);
      }, 2000);
    }

    // Cleanup function to clear timeout if component unmounts
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [copyClicked]);

  const handleOnClick = () => {
    navigator.clipboard.writeText(code)
    setCopyClicked(true);

    setTimeout(() => {
      setCopyClicked(false)
    },2000)
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
        <span
          className="group/icon h-8 w-8 flex justify-center items-center absolute top-4 right-4 cursor-pointer rounded-md hover:border hover:border-primary hover:shadow-lg hover:shadow-primary/70 z-10"
          onClick={handleOnClick}
        >
          {copyClicked ? (
            <CheckIcon className="h-4 w-4 text-primary" />
          ) : (
            <CopyIcon className="h-4 w-4 group-hover/icon:text-primary" />
          )}
        </span>
        <div className="max-h-[60vh] w-full p-1 rounded-lg overflow-scroll bg-muted/30">
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
