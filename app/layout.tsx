import "./globals.css";
import type { Metadata } from "next";
import { inter, josefinSans, serif, openSans } from "./font";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Motxion",
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
          "min-h-screen flex flex-col bg-background font-openSans text-typeface-1 antialiased",
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
          <main className="max-w-[1512px] w-full mx-auto px-8 py-16">
          {children}
          <Toaster />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
