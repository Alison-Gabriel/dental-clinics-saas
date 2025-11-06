"use client";

import {
  Banknote,
  CalendarCheck,
  Folders,
  ListIcon,
  Settings,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logoImg from "@/public/logo-odonto.png";

import { SidebarLink } from "../sidebar-link";

export function SidebarMobile() {
  return (
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
              <SidebarLink.Label>Agendamentos</SidebarLink.Label>
            </SidebarLink.Root>

            <SidebarLink.Root href="/dashboard/services">
              <SidebarLink.Icon icon={Folders} />
              <SidebarLink.Label>Serviços</SidebarLink.Label>
            </SidebarLink.Root>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-medium -tracking-tighter text-zinc-500 uppercase">
              Meu perfil
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
      </SheetContent>
    </Sheet>
  );
}
