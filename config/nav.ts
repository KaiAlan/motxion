import { SidebarNavItemType, MainNavbarItemsType } from "@/types/nav";

export type NavConfigType = {
  mainNav: MainNavbarItemsType[];
  sidebarNav: SidebarNavItemType[];
}

export const NavConfig: NavConfigType = {
  mainNav: [
    {
      href: "/components",
      title: "Components"
    },
    {
      href: "/design",
      title: "Design"
    },
  ],
  sidebarNav: [
    {
      title: "Cursor Effects",
      items: [
        // {
        //   title: "Mask Cursor",
        //   href: "/components/mask-cursor",
        // },
        {
          title: "Trailing Cursor",
          href: "/components/trailing-cursor",
          disabled: false
        },
      ],
    },
    {
      title: "Scroll Animations",
      items: [
        // {
        //   title: "Smooth Scroll",
        //   href: "/components/smooth-scroll",
        //   disabled: true
        // },
        // {
        //   title: "Slide Scroll",
        //   href: "/components/slide-scroll",
        //   disabled: true
        // },
        // {
        //   title: "Zoom Parallax",
        //   href: "/components/zoom-parallax",
        //   disabled: true
        // },
        // {
        //   title: "Zoom Paralax Mountaina",
        //   href: "/components/zoom-parallax-mountains",
        //   disabled: true
        // },
      ],
    },
    {
      title: "SVG Animations",
      items: [],
    },
    {
      title: "Text Animations",
      items: [
        // {
        //   title: "Hackky text animation",
        //   href: "/components/hackky-text-animation",
        //   disabled: true
        // },
        {
          title: "Text Lift",
          href: "/components/text-lift",
          disabled: false
        },
        {
          title: "Wavy Word",
          href: "/components/wavy-word",
          disabled: false
        },
        {
          title: "Wavy Line",
          href: "/components/wavy-line",
          disabled: false
        },
      ],
    },
  ],
}

