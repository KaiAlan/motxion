

import { ReactNode, Suspense } from "react";
import Loader from "@/components/Loader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBox from "./codeBox";
import PreviewCodeBox from "./preview-code";

type PreviewSectionProps = {
  previewComponent: ReactNode;
  code: string;
};

const PreviewSection = ({
  previewComponent,
  code,
}: PreviewSectionProps) => {
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
        <CodeBox code={code} isPreviewCodeBox={true}>
          <PreviewCodeBox
          previewCode={code}
          language='tsx'
          />
        </CodeBox>
      </TabsContent>
    </Tabs>
  );
};

export default PreviewSection;
