
import { Separator } from "../ui/separator";
import PreviewCodeBox from "./preview-code";
import { Badge } from "../ui/badge";
import { InstructionType } from "@/types/content";
import CodeBox from "./codeBox";

type InstallationSectionProps = {
  instructions: InstructionType[];
};

const InstallationSection = ({ instructions }: InstallationSectionProps) => {
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
                <p className="text-sm text-typeface-2 font-openSans">
                  {item.description}
                </p>
              )}
              {item.fileName && (
                <Badge className="bg-muted hover:bg-muted text-sm text-typeface-2 font-openSans">
                  {item.fileName}
                </Badge>
              )}
              {item.instructionCode && item.language && (
                <CodeBox code={item.instructionCode}>
                  <PreviewCodeBox
                    previewCode={item.instructionCode}
                    language={item.language}
                  />
                </CodeBox>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InstallationSection;
