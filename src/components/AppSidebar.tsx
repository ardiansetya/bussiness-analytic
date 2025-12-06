"use client";

import {
  ChartColumn,
  FileBarChart2,
  Home,
  LogOutIcon,
  Settings,
  Shield,
  TrendingUp,
  Upload,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { authClient } from "@/server/better-auth/client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Financial Input",
    url: "/financial-input",
    icon: FileBarChart2,
  },
  {
    title: "Upload Data",
    url: "/upload-data",
    icon: Upload,
  },
  {
    title: "Risk Detail",
    url: "/risk-detail",
    icon: ChartColumn,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.replace("/login");
    router.refresh();
  };

  return (
    <Sidebar>
      <SidebarHeader className="py-8 px-6">
        <div className="flex items-center gap-2">
          <div className="bg-primary rounded-2xl p-3">
            <Shield className="text-white size-5" />
          </div>
          <div>
            <h1 className="font-bold text-2xl">RiskScore</h1>
            <p className="text-sm text-muted-foreground ">UMKM Analytics</p>
          </div>
        </div>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="group">
                  <div className="relative">
                    {pathname === item.url && (
                      <div className="absolute left-0 w-1 h-12 bg-accent-foreground rounded-r-xl" />
                    )}
                  </div>
                  <SidebarMenuButton
                    isActive={pathname === item.url}
                    className={cn("px-4 py-2 ")}
                    size={"lg"}
                    asChild>
                    <Link href={item.url}>
                      <item.icon
                        className={cn(
                          "text-muted-foreground size-5! hover:text-accent-foreground",
                          pathname === item.url &&
                            "text-accent-foreground font-semibold"
                        )}
                      />
                      <span
                        className={cn(
                          "text-xl text-secondary-foreground hover:text-accent-foreground",
                          pathname === item.url &&
                            "text-accent-foreground font-semibold"
                        )}>
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <Separator />
      <SidebarFooter className="my-2">
        <div className="border rounded-xl p-4 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <TrendingUp size={20} color="green" />
            <p className="font-semibold">Pro Tips</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Upload your katest financial data to get updated risk scores
          </p>
        </div>
        <SidebarMenuButton
          onClick={handleLogout}
          className="hover:bg-destructive/10 hover:cursor-pointer"
          size={"lg"}>
          <div className="text-xl flex items-center gap-3 px-4 text-destructive">
            <LogOutIcon />
            Logout
          </div>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
