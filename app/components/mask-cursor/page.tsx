"use client";

import MaskCursorPreviewCodeSample from "@/components/code-samples/mask-cursor/preview-code";
import MaskCursorEffect from "@/components/previews/MaskCursorEffect";
import { CopyIcon } from "@radix-ui/react-icons";
import previewCode from "@/components/code-samples/mask-cursor/preview-code-string";
import Loader from "@/components/Loader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Suspense } from "react";

const MaskCursorPage = () => {
  return (
    <div>
      <Tabs defaultValue="preview" className="w-full">
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
            <MaskCursorEffect />
          </Suspense>
        </TabsContent>
        <TabsContent value="code" className="relative">
          <span
            className="absolute cursor-pointer top-8 right-8 z-10"
            onClick={() => navigator.clipboard.writeText(previewCode)}
          >
            <CopyIcon className="h-4 w-4" />
          </span>
          <div className="max-h-[60vh] w-full p-1 rounded-lg overflow-scroll">
            <Suspense
              fallback={
                <Loader className="w-full h-[60vh] rounded-sm bg-transparent" />
              }
            >
              <MaskCursorPreviewCodeSample />
            </Suspense>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MaskCursorPage;
