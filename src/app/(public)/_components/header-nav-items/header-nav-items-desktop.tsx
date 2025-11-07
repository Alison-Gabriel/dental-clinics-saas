"use client";

import { ArrowRightToLineIcon, Loader2Icon, LogInIcon } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";

interface HeaderNavItemsDesktopProps {
  onEnterButtonClick: () => void;
}

export function HeaderNavItemsDesktop({
  onEnterButtonClick,
}: HeaderNavItemsDesktopProps) {
  const { status: sessionStatus } = useSession();

  const isSessionLoading = sessionStatus === "loading";
  const isSessionAuthenticated = sessionStatus === "authenticated";

  const navItems = [{ href: "#clinics", label: "Clínicas disponíveis" }];

  return (
    <>
      {navItems.map((item) => (
        <Button key={item.href} variant="link" asChild className="p-0">
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}

      {isSessionLoading ? (
        <Loader2Icon className="size-5 animate-spin" />
      ) : isSessionAuthenticated ? (
        <Button variant="outline" asChild>
          <Link href="/dashboard">
            <ArrowRightToLineIcon />
            <span>Painel da clínica</span>
          </Link>
        </Button>
      ) : (
        <Button variant="outline" onClick={onEnterButtonClick}>
          <LogInIcon className="size-3.5" />
          <span>Entrar</span>
        </Button>
      )}
    </>
  );
}
