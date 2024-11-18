import Link from "next/link";
import { notFound } from "next/navigation"
import Heading from "@/components/page-components/heading";
import PreviewSection from "@/components/page-components/preview-section";
import { pageContent } from "@/contents";
import { contentType } from "@/types/content";
import InstallationSection from "@/components/page-components/installation-section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";



export default  function ComponentPage({ params }: { params: { slug: string } }) {

  const content: contentType | undefined = pageContent.find((content) => content.slugName === params.slug)

  if(!content) {
    notFound()
  }

  return (
    <div className="flex max-w-[1176px] relative scroll-smooth">
      <div className="w-[900px]">
        <div id="preview" />
        <Heading
          title={content.contentTitle}
          description={content.contentDescription}
          badges={content.contentTag}
        />
        <PreviewSection
          previewComponent={<content.slugContent.previewComponent />}
          code={content.slugContent.previewCode}
        />
        {content.note && (
          <Card className="my-10 rounded-md bg-muted/30 border-none">
            <CardHeader className="pb-2 text-primary font-bold">Note</CardHeader>
            <CardContent className="text-typeface-2 px-8 mb-4">
              <p>{content.note}</p>
            </CardContent>
          </Card>
        )}
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
