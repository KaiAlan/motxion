"use client";

import Link from "next/link";
import { Separator } from "./ui/separator";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full backdrop-blur-lg font-josefinSans font-normal px-8 fixed top-0 left-0 right-0 bg-background/70">
      <div className=" max-w-[1512px] w-full flex justify-start items-center gap-6 py-4 mx-auto text-typeface-2">
        {navPath.map((item, index) => (
          <Link key={index} href={item.href} className={pathname === item.href ? "text-primary font-semibold" : ""}>
          {item.title}
          </Link>
        ))}
      </div>
      {/* <Separator /> */}
    </nav>
  );
};

export default Navbar;

const navPath = [
  {
    href: "/",
    title: "Logo"
  },
  {
    href: "/components",
    title: "Components"
  },
  {
    href: "/design",
    title: "Design"
  },
]