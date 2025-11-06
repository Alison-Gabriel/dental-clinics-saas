"use client";

import { CollapsibleContent } from "@radix-ui/react-collapsible";
import clsx from "clsx";
import {
  Banknote,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  Folders,
  ListIcon,
  Settings,
} from "lucide-react";
import Image from "next/image";
import { ReactNode, useState } from "react";

import logoImg from "@/public/logo-odonto.png";
import { Button } from "@/src/components/ui/button";
import { Collapsible } from "@/src/components/ui/collapsible";
import {
  Sheet,
  SheetContent,
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
      <aside
        className={clsx(
          "bg-background hidden h-screen flex-col border-r p-4 transition-all md:fixed md:flex",
          {
            "items-center md:w-20": isSidebarCollapsed,
            "md:w-64": isNotSidebarCollapsed,
          },
        )}
      >
        {isNotSidebarCollapsed && (
          <Image
            src={logoImg}
            alt="Odonto pro"
            quality={100}
            priority
            className="my-4 size-auto"
          />
        )}

        <Button
          size="icon"
          variant="outline"
          className={clsx("mb-4", {
            "self-end": isNotSidebarCollapsed,
          })}
          onClick={() => setIsSidebarCollapsed((oldValue) => !oldValue)}
        >
          {isSidebarCollapsed ? (
            <ChevronRight className="size-6" />
          ) : (
            <ChevronLeft className="size-6" />
          )}
        </Button>

        {isSidebarCollapsed && (
          <nav className="space-y-2">
            <SidebarLink.Root href="/dashboard">
              <SidebarLink.Icon icon={CalendarCheck} />
            </SidebarLink.Root>

            <SidebarLink.Root href="/dashboard/services">
              <SidebarLink.Icon icon={Folders} />
            </SidebarLink.Root>

            <SidebarLink.Root href="/dashboard/profile">
              <SidebarLink.Icon icon={Settings} />
            </SidebarLink.Root>

            <SidebarLink.Root href="/dashboard/plans">
              <SidebarLink.Icon icon={Banknote} />
            </SidebarLink.Root>
          </nav>
        )}

        <Collapsible open={isNotSidebarCollapsed}>
          <CollapsibleContent>
            <nav className="flex flex-col gap-4">
              <div className="space-y-2">
                <p className="text-xs font-medium -tracking-tighter text-zinc-500 uppercase">
                  Painel
                </p>

                <SidebarLink.Root href="/dashboard">
                  <SidebarLink.Icon icon={CalendarCheck} />
                  <SidebarLink.Label>Agendamentos</SidebarLink.Label>
                </SidebarLink.Root>

                <SidebarLink.Root href="/dashboard/services">
                  <SidebarLink.Icon icon={Folders} />
                  <SidebarLink.Label>Serviços</SidebarLink.Label>
                </SidebarLink.Root>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium -tracking-tighter text-zinc-500 uppercase">
                  Minha conta
                </p>

                <SidebarLink.Root href="/dashboard/profile">
                  <SidebarLink.Icon icon={Settings} />
                  <SidebarLink.Label>Configurações</SidebarLink.Label>
                </SidebarLink.Root>

                <SidebarLink.Root href="/dashboard/plans">
                  <SidebarLink.Icon icon={Banknote} />
                  <SidebarLink.Label>Planos</SidebarLink.Label>
                </SidebarLink.Root>
              </div>
            </nav>
          </CollapsibleContent>
        </Collapsible>
      </aside>

      <div
        className={clsx("flex flex-1 flex-col transition-all", {
          "md:ml-20": isSidebarCollapsed,
          "md:ml-64": isNotSidebarCollapsed,
        })}
      >
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-white px-4 md:hidden md:px-6">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <ListIcon className="size-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="text-black sm:max-w-xs">
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src={logoImg}
                    alt="Odonto pro"
                    quality={100}
                    priority
                    className="h-12 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-4 px-5">
                <div className="space-y-2">
                  <p className="text-xs font-medium -tracking-tighter text-zinc-500 uppercase">
                    Painel
                  </p>

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
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-medium -tracking-tighter text-zinc-500 uppercase">
                    Meu perfil
                  </p>

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
