"use client";

import clsx from "clsx";
import {
  BanknoteIcon,
  CalendarCheckIcon,
  FoldersIcon,
  ListIcon,
  SettingsIcon,
} from "lucide-react";
import { ReactNode, useState } from "react";

import { Button } from "@/src/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";

import { SidebarLink } from "./sidebar-link";

interface SidebarDashboardProps {
  children: ReactNode;
}

export function SidebarDashboard({ children }: SidebarDashboardProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      <div
        className={clsx("flex flex-1 flex-col transition-all", {
          "md:ml-20": isCollapsed,
          "md:ml-64": !isCollapsed,
        })}
      >
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-white px-4 md:hidden">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <ListIcon className="size-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="text-black sm:max-w-xs">
              <SheetHeader>
                <SheetTitle>OdontoPRO</SheetTitle>
                <SheetDescription>Menu adminstrativo</SheetDescription>
              </SheetHeader>

              {/* TODO: Apply Composition on SidebarLink component */}
              <nav className="flex flex-col gap-4 px-5">
                <div className="space-y-2">
                  <p className="mb-2 text-sm text-zinc-500 uppercase">
                    Dashboard
                  </p>

                  <SidebarLink href="/dashboard">
                    <CalendarCheckIcon className="size-5" />
                    {!isCollapsed && <span>Agendamentos</span>}
                  </SidebarLink>

                  <SidebarLink href="/dashboard/services">
                    <FoldersIcon className="size-5" />
                    {!isCollapsed && <span>Serviços</span>}
                  </SidebarLink>
                </div>

                <div className="space-y-2">
                  <p className="mb-2 text-sm text-zinc-500 uppercase">
                    Minha conta
                  </p>

                  <SidebarLink href="/dashboard/profile">
                    <SettingsIcon className="size-5" />
                    {!isCollapsed && <span>Configurações</span>}
                  </SidebarLink>

                  <SidebarLink href="/dashboard/plans">
                    <BanknoteIcon className="size-5" />
                    {!isCollapsed && <span>Serviços</span>}
                  </SidebarLink>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </header>

        <main className="flex-1 px-2 py-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
