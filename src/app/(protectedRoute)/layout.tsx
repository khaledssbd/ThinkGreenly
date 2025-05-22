import DashboardNavBar from "@/components/Basics/DashboardNavBar";

import { AppSidebar } from "@/components/modules/Dashboard/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 overflow-hidden sticky top-0 z-50  bg-white dark:bg-gray-950  text-gray-900 dark:text-gray-100 shadow-md shadow-gray-200 dark:shadow-black items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
            <div className="w-full flex items-center justify-between">
              <DashboardNavBar />
            </div>
            {/* <ModeToggle /> */}
          </div>
        </header>
        <div className="p-4 pt-0 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
