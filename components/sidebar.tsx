"use client";

import { useState } from "react";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean[]>(
    Array(sidebarItems.length).fill(true)
  );
  const pathname = usePathname();

  const handleOpenChange = (index: number) => {
    setIsOpen((prevState) => {
      // Create a copy of the current state
      const newState = [...prevState];
      // Toggle the value at the specific index
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="w-full flex flex-col justify-start items-start space-y-1">
      {sidebarItems.sort().map((category, index) => (
        <Collapsible
          key={index}
          open={isOpen[index]}
          onOpenChange={() => handleOpenChange(index)}
          className="w-full"
        >
          {category.items.length > 0 && (
            <div className="flex items-center justify-between font-josefinSans">
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full flex justify-between gap-2 hover:bg-muted/50"
                >
                  <h4 className="text-base font-medium">{category.title}</h4>
                  <ChevronRightIcon
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      isOpen[index] ? "rotate-90 ease-in-out" : ""
                    )}
                  />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
          )}
          <CollapsibleContent className="flex flex-col space-y-[2px] px-2 text-typeface-2">
            {category.items.sort().map((navItem, idx) => {

              // let val = category.items.length + idx
              return (
                <Link
                  key={idx}
                  href={navItem.href}
                  // onMouseEnter={() => console.log(val)}
                  className={cn(
                    "rounded-sm px-4 py-1 text-sm font-normal font-openSans shadow-sm hover:bg-muted/50",
                    pathname === navItem.href
                      ? "text-primary bg-muted/50"
                      : ""
                  )}
                >
                  {navItem.title}
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default Sidebar;

type SidebarItemsType = {
  title: string;
  items: {
    title: string;
    href: string;
  }[];
};

const sidebarItems: SidebarItemsType[] = [
  {
    title: "Cursor Effects",
    items: [
      {
        title: "Mask Cursor",
        href: "/components/mask-cursor",
      },
      {
        title: "Trailing Cursor",
        href: "/components/trailing-cursor",
      },
    ],
  },
  {
    title: "Scroll Animations",
    items: [
      {
        title: "Smooth Scroll",
        href: "/components/smooth-scroll",
      },
      {
        title: "Slide Scroll",
        href: "/components/slide-scroll",
      },
      {
        title: "Zoom Parallax",
        href: "/components/zoom-parallax",
      },
      {
        title: "Zoom Paralax Mountaina",
        href: "/components/zoom-parallax-mountains",
      },
    ],
  },
  {
    title: "SVG Animations",
    items: [],
  },
  {
    title: "Text Animations",
    items: [
      {
        title: "Hackky text animation",
        href: "/components/hackky-text-animation",
      },
    ],
  },
];
