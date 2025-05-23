'use client';

import {
  ClipboardList,
  DollarSign,
  HomeIcon,
  LayoutDashboard,
  PlusCircle,
  SquareChartGantt,
  UserCog,
  UsersRoundIcon,
} from 'lucide-react';
import logo from '@/assets/sLogo.png';
// import smLogo from '@/assets/smLogo.png';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { NavMain } from './nav-main';
import { NavUser } from './nav-user';
import Link from 'next/link';
import { useUser } from '@/context/UserContext';
import Image from 'next/image';



export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar> & { collapsed?: boolean }) {
  const { user } = useUser();

  const memberMenu = [
    {
      title: 'All Ideas',
      url: '/member/all-ideas',
      icon: ClipboardList,
    },
    {
      title: 'Create Idea',
      url: '/member/create-idea',
      icon: PlusCircle,
    },
    {
      title: 'Manage Payments',
      url: '/member/payments',
      icon: DollarSign,
    },
  ];

  const adminMenu = [
    {
      title: 'Manage Ideas',
      url: '/admin/all-ideas',
      icon: SquareChartGantt,
    },
    {
      title: 'Manage Users',
      url: '/admin/all-users',
      icon: UsersRoundIcon,
    },
    {
      title: 'Manage Payments',
      url: '/admin/payments',
      icon: DollarSign,
    },
  ];

  const data = {
    navMain: [
      {
        title: 'Home',
        url: '/',
        icon: HomeIcon,
      },
      {
        title: 'Dashboard',
        url: `/${user?.role.toLowerCase()}/dashboard`,
        icon: LayoutDashboard,
        isActive: true,
      },
      {
        title: 'Profile',
        url: '/profile',
        icon: UserCog,
      },
    ],
  };

  if (user?.role === 'ADMIN') {
    data.navMain.push(...adminMenu);
  } else if (user?.role === 'MEMBER') {
    data.navMain.push(...memberMenu);
  }

  return (
    <Sidebar
      collapsible="icon"
      {...props}
    >
      <SidebarHeader className="dark:bg-gradient-to-l dark:from-gray-800 dark:to-gray-800 bg-gradient-to-l from-green-300 to-green-100  text-black dark:text-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                {/* <div className="grid flex-1 text-left text-sm leading-tight">
                  {collapsed ? <Icon /> : <Logo />}
                </div> */}
                <div className="w-full">
                  {/* <p className="text-black dark:text-white text-lg font-medium z-10">
                    ThinkGreenly
                  </p> */}
                  <Image src={logo} alt="logo" className="h-12 w-12" />
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className=" bg-gradient-to-l from-green-300 to-green-100 dark:bg-gradient-to-l dark:from-gray-800 dark:to-gray-800 text-black dark:text-white">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-gradient-to-l from-green-300 to-green-100 dark:bg-gradient-to-l dark:from-gray-800 dark:to-gray-800 text-black dark:text-white">
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
