import Link from "next/link";
import { notFound } from "next/navigation"
import MaskCursorEffect from "@/components/previews/MaskCursorEffect";
import Heading from "@/components/page-components/heading";
import PreviewSection from "@/components/page-components/preview-section";
import { pageContent } from "@/contents";
import { contentType } from "@/types/content";
import InstallationSection from "@/components/page-components/installation-section";



export default async function MaskCursorPage({ params }: { params: { slug: string } }) {

  const content: contentType | undefined = pageContent.find((content) => content.slugName === params.slug)

  if(!content) {
    notFound()
  }

  return (
    <div className="flex max-w-[1176px] relative">
      <div className="w-[900px]">
        <div id="preview" />
        <Heading
          title={content.contentTitle}
          description={content.contentDescription}
          badges={content.contentTag}
        />
        <PreviewSection
          previewComponent={<MaskCursorEffect />}
          code={content.slugContent.previewCode}
        />

        <div id="installation">
          <InstallationSection instructions={content.slugContent.installationInstructions} />
        </div>
      </div>
      <div className="hidden w-[226px] h-[calc(100vh-theme(spacing.40))] 2xl:flex flex-col justify-start items-start gap-1 pl-12 sticky top-24 ">
        <h1>On this page</h1>
        {content.slugContent.toc.map((items, index) => (
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
