import Sidebar from "@/components/sidebar";

export default function ComponentsPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex mt-8 relative">
        <aside className="hidden w-72 h-[calc(100vh-theme(spacing.40))] desktop:flex flex-col justify-start items-start sticky top-24 overflow-y-scroll">
        <Sidebar />
        </aside>
        <div className="max-w-[900px] w-full flex flex-col justify-start px-0 mx-auto desktop:max-w-full desktop:mx-0 desktop:pl-12">
        {children}
        </div>
    </section>
  );
}
