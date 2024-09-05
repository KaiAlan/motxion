"use client";

import React from "react";
import { toast } from "sonner";
import { CopyIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const CodeBox = ({
  code,
  children,
  isPreviewCodeBox,
  className,
}: {
  code: string;
  children: React.ReactNode;
  isPreviewCodeBox?: boolean;
  className?: string
}) => {
  const handleOnClick = (code: string) => {
    navigator.clipboard.writeText(code);
    toast("Copied Successfully.");
  };
  return (
    <div className={cn("flex max-h-[550px] h-full w-[calc(900px-theme(spacing.12))] p-1 rounded-lg overflow-x-hidden bg-muted/30 relative",
        isPreviewCodeBox ? 'w-full': '',
        className,
    )}>
        {children}
      <span
        className="group/icon h-8 w-8 p-2 flex justify-center items-center sticky top-3 right-4 cursor-pointer rounded-md hover:border hover:border-primary hover:shadow-lg hover:shadow-primary/70 z-10"
        onClick={() => handleOnClick(code)}
      >
        <CopyIcon className="h-4 w-4 group-hover/icon:text-primary" />
      </span>
    </div>
  );
};

export default CodeBox;
