import React from "react";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="w-full">
      <Separator className="w-full" />
      <div className="max-w-[1512px] w-full flex flex-col justify-start items-start gap-6 py-20 mx-auto">
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col items-start justify-start w-full gap-2 text-typeface-2 text-left">
            <p className="text-typeface-1 text-lg">
              Made with 💙 by{" "}
              <Link
                href="https://twitter.com/KaiAlan_"
                className="text-typeface-1 text-lg hover:underline hover:underline-offset-4 hover:decoration-2"
              >
                @kaialan
              </Link>
            </p>
            <p className="text-sm">Copyright © 2024 All Rights Reserved.</p>
          </div>
          <div className="flex items-start w-full gap-4 text-typeface-2 text-left">
            <div className="flex flex-col items-start justify-start w-full gap-4 text-typeface-2 text-left">
              <h1 className="text-lg text-typeface-1 font-josefinSans">
                Explore
              </h1>
              <Link
                href="/components"
                className="flex justify-center items-center gap-1 group/icon hover:scale-125 hover:translate-x-6 duration-100 ease-linear"
              >
                Gallery
              </Link>
              <Link
                href="/components"
                className="flex justify-center items-center gap-1 group/icon hover:scale-125 hover:translate-x-6 duration-100 ease-linear"
              >
                Components
              </Link>
              <Link
                href="/examples"
                className="flex justify-center items-center gap-1 group/icon hover:scale-125 hover:translate-x-6 duration-100 ease-linear"
              >
                Examples
              </Link>
              <Link
                href="/design"
                className="flex justify-center items-center gap-1 group/icon hover:scale-125 hover:translate-x-6 duration-100 ease-linear"
              >
                Design System
              </Link>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-4 text-typeface-2 text-left">
              <h1 className="text-lg text-typeface-1 font-josefinSans">
                Lets connect
              </h1>
              <Link
                href="https://twitter.com/KaiAlan_"
                className="flex justify-center items-center gap-1 group/icon hover:scale-125 hover:translate-x-6 duration-100 ease-linear"
              >
                Contact me
              </Link>
              <Link
                href="https://twitter.com/KaiAlan_"
                className="flex justify-center items-center gap-1 group/icon hover:scale-125 hover:translate-x-6 duration-100 ease-linear"
              >
                Twitter
                <ArrowTopRightIcon className="h-4 w-4 border border-muted rounded-sm group-hover/icon:translate-x-1 group-hover/icon:-translate-y-1 duration-300 ease-in-out" />
              </Link>
              <Link
                href="https://github.com/KaiAlan"
                className="flex justify-center items-center gap-1 group/icon hover:scale-125 hover:translate-x-6 duration-100 ease-linear"
              >
                Github
                <ArrowTopRightIcon className="h-4 w-4 border border-muted rounded-sm group-hover/icon:translate-x-1 group-hover/icon:-translate-y-1 duration-300 ease-in-out" />
              </Link>
              {/* <Link
                href="http://www.linkedin.com/in/kaialan"
                className="flex justify-center items-center gap-1 group/icon hover:scale-125 hover:translate-x-6 duration-100 ease-linear"
              >
                Linked in
                <ArrowTopRightIcon className="h-4 w-4 border border-muted rounded-sm group-hover/icon:translate-x-1 group-hover/icon:-translate-y-1 duration-300 ease-in-out" />
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
