/* eslint-disable react-hooks/static-components */
"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { LogInIcon, MenuIcon } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const session = null;
  const hasSession = Boolean(session);
  const navItems = [{ href: "#clinics", label: "Clínicas" }];

  const NavLinks = () => {
    return (
      <>
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant={"link"}
            onClick={() => setIsSheetOpen(false)}
            asChild
          >
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}

        {hasSession ? (
          <Link href="/dashboard">Painel</Link>
        ) : (
          <Button variant="outline">
            <LogInIcon className="size-3.5" /> Entrar
          </Button>
        )}
      </>
    );
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white px-6 py-4 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-zinc-900">
          Odonto<span className="text-emerald-500">PRO</span>
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          <NavLinks />
        </nav>

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger className="md:hidden" asChild>
            <Button size={"icon"} variant={"outline"}>
              <MenuIcon className="size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="z-999 w-3xs sm:w-xs">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Confira nossos links</SheetDescription>
            </SheetHeader>

            <nav className="flex flex-col justify-center gap-4 px-4">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
