"use client";

import { ArrowRightIcon, Loader2Icon, LogInIcon } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";

interface HeaderNavItemsMobileProps {
  onNavItemClick: () => void;
  onEnterButtonClick: () => void;
}

export function HeaderNavItemsMobile({
  onNavItemClick,
  onEnterButtonClick,
}: HeaderNavItemsMobileProps) {
  const { status: sessionStatus } = useSession();

  const isSessionLoading = sessionStatus === "loading";
  const isSessionAuthenticated = sessionStatus === "authenticated";

  const navItems = [{ href: "#clinics", label: "Conhecer clínicas" }];

  return (
    <>
      {navItems.map((item) => (
        <Button
          key={item.href}
          asChild
          variant="link"
          className="p-0"
          onClick={onNavItemClick}
        >
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}

      {isSessionLoading ? (
        <Loader2Icon className="size-5 animate-spin" />
      ) : isSessionAuthenticated ? (
        <Button variant="secondary" asChild>
          <Link href="/dashboard">
            Acessar painel
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
      ) : (
        <Button variant="outline" className="px-0" onClick={onEnterButtonClick}>
          <LogInIcon className="size-3.5" /> Entrar
        </Button>
      )}
    </>
  );
}
