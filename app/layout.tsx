import "./globals.css";
import type { Metadata } from "next";
import { inter, josefinSans, serif, openSans } from "./font";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Animuu",
  description: "A collection on animation compnonets made with framer motion, tailwindcss and NextJS to use in your project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen flex flex-col px-8 bg-background font-openSans text-typeface-1 antialiased",
          inter.variable,
          josefinSans.variable,
          serif.variable,
          openSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full relative">
          <Navbar />
          </div>
          <main className="max-w-[1512px] w-full mx-auto py-16">
          {children}
          <Toaster />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
