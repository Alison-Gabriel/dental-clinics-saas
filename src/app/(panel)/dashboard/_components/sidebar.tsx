"use client";

import clsx from "clsx";
import {
  Banknote,
  CalendarCheck,
  Folders,
  ListIcon,
  Settings,
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
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const isNotSidebarCollapsed = !isSidebarCollapsed;

  return (
    <div className="flex min-h-screen w-full">
      <div
        className={clsx("flex flex-1 flex-col transition-all", {
          "md:ml-20": isSidebarCollapsed,
          "md:ml-64": isNotSidebarCollapsed,
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

              <nav className="flex flex-col gap-2 px-5">
                <SidebarLink.Root href="/dashboard">
                  <SidebarLink.Icon icon={CalendarCheck} />
                  {isNotSidebarCollapsed && (
                    <SidebarLink.Label>Agendamentos</SidebarLink.Label>
                  )}
                </SidebarLink.Root>

                <SidebarLink.Root href="/dashboard/services">
                  <SidebarLink.Icon icon={Folders} />
                  {isNotSidebarCollapsed && (
                    <SidebarLink.Label>Serviços</SidebarLink.Label>
                  )}
                </SidebarLink.Root>

                <SidebarLink.Root href="/dashboard/profile">
                  <SidebarLink.Icon icon={Settings} />
                  {isNotSidebarCollapsed && (
                    <SidebarLink.Label>Configurações</SidebarLink.Label>
                  )}
                </SidebarLink.Root>

                <SidebarLink.Root href="/dashboard/plans">
                  <SidebarLink.Icon icon={Banknote} />
                  {isNotSidebarCollapsed && (
                    <SidebarLink.Label>Planos</SidebarLink.Label>
                  )}
                </SidebarLink.Root>
              </nav>
            </SheetContent>
          </Sheet>
        </header>

        <main className="flex-1 px-2 py-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
