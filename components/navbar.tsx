"use client";

import Link from "next/link";
import { Separator } from "./ui/separator";
import { usePathname } from "next/navigation";
import { NavConfig } from "@/config/nav";
import { Button } from "./ui/button";
// import logo from './motxion-logo.svg'

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full backdrop-blur-lg font-josefinSans font-normal px-8 fixed top-0 left-0 right-0 bg-background/70 z-50">
      <div className="max-w-[1512px] w-full flex justify-between items-center gap-6 py-4 pt-6 mx-auto text-lg text-typeface-2">
        <Link
          href="/"
          className={
            pathname === "/"
              ? "text-primary font-bold"
              : "text-typeface-1 font-bold"
          }
        >
          <img src="/motxion-logo.svg" alt="logo" className="w-8 z-[70]" />
        </Link>
        <div className="flex justify-end items-center gap-6">
        {NavConfig.mainNav.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={pathname.startsWith(item.href) ? "text-typeface-1" : ""}
          >
            {item.title}
          </Link>
        ))}
        <Button variant='default' size='lg' className="rounded-sm">EXPLORE</Button>
        </div>
      </div>
      {/* <Separator /> */}
    </nav>
  );
};

export default Navbar;
