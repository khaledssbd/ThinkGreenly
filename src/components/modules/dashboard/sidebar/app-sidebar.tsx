"use client";

import * as React from "react";
import {
  ClipboardList,
  HomeIcon,
  LayoutDashboard,
  PlusCircle,
  SquareChartGantt,
  UserCog,
  UsersRoundIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { Icon, Logo } from "@/assets/Logo";

export function AppSidebar({
  collapsed,
  ...props
}: React.ComponentProps<typeof Sidebar> & { collapsed?: boolean }) {
  const { user } = useUser();

  const icon = "/icon.png";
  const memberMenu = [
    {
      title: "All Ideas",
      url: "/member/all-ideas",
      icon: ClipboardList,
    },
    {
      title: "Create Idea",
      url: "/member/create-idea",
      icon: PlusCircle,
    },
    {
      title: "Edit Idea",
      url: "/member/edit-idea",
      icon: ClipboardList,
    },
  ];

  const adminMenu = [
    {
      title: "Manage Ideas",
      url: "/admin/all-ideas",
      icon: SquareChartGantt,
    },
    {
      title: "Manage Users",
      url: "/admin/all-users",
      icon: UsersRoundIcon,
    },
  ];

  const data = {
    navMain: [
      {
        title: "Home",
        url: "/",
        icon: HomeIcon,
      },
      {
        title: "Dashboard",
        url: `/${user?.role.toLowerCase()}`,
        icon: LayoutDashboard,
        isActive: true,
      },
      {
        title: "Profile",
        url: "/profile",
        icon: UserCog,
      },
    ],
  };

  if (user?.role === "ADMIN") {
    data.navMain.push(...adminMenu);
  } else if (user?.role === "MEMBER") {
    data.navMain.push(...memberMenu);
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="grid flex-1 text-left text-sm leading-tight">
                  {collapsed ? (
                    <Icon />
                  ) : (
                    <Logo />
                  )}
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
