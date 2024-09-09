import { codeToHtml } from "@/utils/code-to-html";
import { cn } from "@/lib/utils";

type PreviewCodeBoxProps = {
  previewCode: string;
  language: string;
  className?: string;
}

const PreviewCodeBox = async ({previewCode, language, className}: PreviewCodeBoxProps) => {

  const html = await codeToHtml({
    code: previewCode,
    language: language,
  })
    .then((html) => {
      if (html) return html;
      return "";
    })
    .catch((error) => {
      console.error("Error converting code to HTML:", error);
      return "";
    });
  return (
      <div className={cn("w-full h-full flex justify-start items-center", className)}>
        <div
          className="p-2 pr-8 max-w-[900px]"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
  );
};

export default PreviewCodeBox;