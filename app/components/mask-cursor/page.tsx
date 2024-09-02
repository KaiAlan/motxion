import { Suspense } from "react";
import Loader from "@/components/Loader";
import MaskCursorEffect from "@/components/previews/MaskCursorEffect";
import previewCode from "@/components/code-samples/mask-cursor/preview-code-string";
import Heading from "@/components/page-components/heading";
import PreviewSection from "@/components/page-components/preview-section";
import Link from "next/link";
import InstallationSection from "@/components/page-components/installation-section";

const MaskCursorPage = () => {
  return (
    <div className="flex max-w-[1176px] relative">
      <div>
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
        <InstallationSection />
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
