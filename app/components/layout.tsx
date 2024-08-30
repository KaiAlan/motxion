import Sidebar from "@/components/sidebar";


export default function ComponentsPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex mt-8">
        <aside className="h-[calc(100vh-theme(spacing.40))] sticky top-0 w-64 overflow-y-scroll">
        <Sidebar />
        </aside>
        <div className="px-4">

        {children}
        </div>
    </section>
  );
}
