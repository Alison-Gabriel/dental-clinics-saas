"use client";

import { ListIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { login } from "../_actions/login";
import { HeaderNavItems } from "./header-nav-items";

export function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogin = async () => {
    await login("github");
  };

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger className="md:hidden" asChild>
        <Button size={"icon"} variant={"outline"}>
          <ListIcon className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="z-999 w-3xs sm:w-xs">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Confira nossos links</SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col justify-center gap-2 px-4">
          <HeaderNavItems.Mobile
            onNavItemClick={handleCloseMenu}
            onEnterButtonClick={handleLogin}
          />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
