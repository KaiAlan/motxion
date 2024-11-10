"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { pageContent } from "@/contents";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Gallery = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const router = useRouter()

  // Toggle a tag in the selectedTags array
  const toggleTag = (tag: string) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag)
        : [...prevSelectedTags, tag]
    );
  };

  // Filter content based on selected tags
  const filteredContent =
    selectedTags.length > 0
      ? pageContent.filter((content) =>
          selectedTags.every((tag) => content.contentTag.includes(tag))
        )
      : pageContent;

  // Unique content tags, sorted with active tags first
  const uniqueContentTags = Array.from(
    new Set(pageContent.flatMap((content) => content.contentTag))
  ).sort((a, b) => {
    const aIsSelected = selectedTags.includes(a);
    const bIsSelected = selectedTags.includes(b);
    return aIsSelected === bIsSelected ? 0 : aIsSelected ? -1 : 1;
  });

  return (
    <div className="flex flex-col justify-start items-start w-full relative">
      <h1 className="text-3xl">Gallery</h1>
      <div className="flex flex-wrap w-full h-full justify-start items-center gap-x-4 gap-y-2 my-4">
        {uniqueContentTags &&
          uniqueContentTags.map((tag, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => toggleTag(tag)}
              className={cn(
                "rounded-full",
                selectedTags.includes(tag) ? "bg-primary" : ""
              )}
            >
              {tag}
            </Button>
          ))}
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-x-4 gap-y-8 w-full">
        {filteredContent &&
          filteredContent.map((content, index) => {
            return (
              <Card
                key={index}
                onClick={() => router.push(`/components/${content.slugName}`)}
                className="flex flex-col justify-start items-start max-w-[600px] w-full gap-2 bg-transparent border-none shadow-none cursor-pointer"
              >
                <Skeleton className=" h-64 max-w-[600px] w-full rounded-sm" />
                <CardHeader className="py-0 px-2">
                  <CardTitle className="">{content.contentTitle}</CardTitle>
                  <CardDescription className="w-full line-clamp-2">
                    {content.contentDescription}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default Gallery;
