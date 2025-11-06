"use client";

import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface SidebarLinkRootProps extends LinkProps {
  children: ReactNode;
}

export function SidebarLinkRoot({
  children,
  href,
  ...props
}: SidebarLinkRootProps) {
  const pathname = usePathname();

  const isCurrentPath = pathname === href;
  const isNotCurrentPath = !isCurrentPath;

  return (
    <Link
      {...props}
      href={href}
      className={clsx(
        "flex items-center gap-2 rounded-md px-3 py-2 transition-all",
        {
          "bg-emerald-500 font-medium text-white": isCurrentPath,
          "hover:bg-accent/50 text-zinc-700": isNotCurrentPath,
        },
      )}
    >
      {children}
    </Link>
  );
}
