"use client";

import { Suspense, useState, useEffect } from "react";
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";
import Loader from "@/components/Loader";
import { Separator } from "../ui/separator";
import PreviewCodeBox from "../code-samples/mask-cursor/preview-code";

const InstallationSection = () => {
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
    navigator.clipboard.writeText("npm i framer-motion clsx tailwind-merge");
    setCopyClicked(true);
  };
  return (
    <div className="w-full flex flex-col justify-start items-start gap-3 mt-10">
      <h1 className="text-xl">Installation</h1>
      <Separator />
      <div className="relative">
        <Separator orientation='vertical' className="absolute" />
      <h2 className="text-base ml-8">Install dependecies</h2>
      <div className="max-h-16 w-[868px] p-1 rounded-lg overflow-scroll bg-muted/30 ml-8 relative">
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
        <Suspense
          fallback={
            <Loader className="w-[900px] h-14 rounded-sm bg-transparent" />
          }
        >
          <PreviewCodeBox
            language="ts"
            previewCode="npm i framer-motion clsx tailwind-merge"
            className="h-14"
          />
        </Suspense>
      </div>
      </div>
    </div>
  );
};

export default InstallationSection;
