"use client";

import {
  ArrowRight,
  ListIcon,
  Loader2,
  LogIn,
  LogInIcon,
  LucideArrowRightFromLine,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
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
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const handleLogin = async () => {
    await login("github");
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white px-6 py-4 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-zinc-900">
          Odonto<span className="text-emerald-500">PRO</span>
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          <HeaderNavItems.Desktop onEnterButtonClick={handleLogin} />
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
