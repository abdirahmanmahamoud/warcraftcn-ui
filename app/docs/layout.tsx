import { DocsSidebar } from "@/components/docs-sidebar";
import { SiteFooter } from "@/components/site-footer";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <SidebarProvider>
      <DocsSidebar tree={source.pageTree} />
      <SidebarInset>
        <div className="container flex-1 py-6">{children}</div>
        <SiteFooter />
      </SidebarInset>
    </SidebarProvider>
  );
}
