import { codeToHtml } from "@/utils/code-to-html";
import  previewCode  from "./preview-code-string";


const MaskCursorPreviewCodeSample = async () => {

  const html = await codeToHtml({
    code: previewCode,
    language: "tsx",
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
      <div className="w-full h-full flex justify-start items-center text-wrap">
        <div
          className="px-2 max-w-[1200px] w-full"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
  );
};

export default MaskCursorPreviewCodeSample;