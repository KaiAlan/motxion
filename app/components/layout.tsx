import Sidebar from "@/components/sidebar";


export default function ComponentsPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex mt-8">
        <aside className="hidden desktop:block h-[calc(100vh-theme(spacing.40))] sticky top-0 w-72 overflow-y-scroll">
        <Sidebar />
        </aside>
        <div className="max-w-[900px] w-full flex flex-col justify-start px-0 mx-auto desktop:max-w-full desktop:mx-0 desktop:px-4">
        {children}
        </div>
    </section>
  );
}
