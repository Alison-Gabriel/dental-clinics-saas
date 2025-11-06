"use client";

import clsx from "clsx";
import {
  Banknote,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  Folders,
  Settings,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import logoImg from "@/public/logo-odonto.png";

import { SidebarLink } from "../sidebar-link";

interface SidebarDesktopProps {
  isCollapsed: boolean;
  onCollapseClick: () => void;
}

export function SidebarDesktop({
  isCollapsed,
  onCollapseClick,
}: SidebarDesktopProps) {
  const isNotSidebarCollapsed = !isCollapsed;

  return (
    <aside
      className={clsx(
        "bg-background hidden h-screen flex-col border-r p-4 transition-all md:fixed md:flex",
        {
          "items-center md:w-20": isCollapsed,
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
        onClick={onCollapseClick}
      >
        {isCollapsed ? (
          <ChevronRight className="size-6" />
        ) : (
          <ChevronLeft className="size-6" />
        )}
      </Button>

      {isCollapsed && (
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
  );
}
