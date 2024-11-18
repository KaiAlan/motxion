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
import { NavConfig } from "@/config/nav";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean[]>(
    Array(NavConfig.sidebarNav.length).fill(true)
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
      {NavConfig.sidebarNav.sort().map((category, index) => (
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
                  className="w-full flex justify-between gap-2 pl-2 hover:bg-muted/50"
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
          <CollapsibleContent className="flex flex-col space-y-[2px] text-typeface-2">
            {category.items.sort().map((navItem, idx) => {

              // let val = category.items.length + idx
              return (
                <Link
                  key={idx}
                  href={navItem.href}
                  prefetch={true}
                  // aria-disabled={navItem.disabled}
                  // onMouseEnter={() => console.log(val)}
                  className={cn(
                    "rounded-sm py-1 pl-2 text-sm font-normal font-openSans shadow-sm hover:bg-muted/50",
                    pathname === navItem.href ? " bg-card-4/30 text-primary" : "",
                    navItem.disabled ? 'cursor-not-allowed' : ''
                  )}
                >
                  {/* <button disabled={navItem.disabled}> */}
                  {navItem.title}
                  {/* </button> */}
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
