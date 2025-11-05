"use client";

import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface SidebarLinkProps extends LinkProps {
  children: ReactNode;
}

export function SidebarLink({ children, href, ...props }: SidebarLinkProps) {
  const pathname = usePathname();
  const isCurrentPath = pathname === href;

  return (
    <Link
      {...props}
      href={href}
      className={clsx(
        "flex items-center gap-2 rounded-md px-3 py-2 transition-all",
        {
          "bg-emerald-500 font-medium text-white": isCurrentPath,
          "hover:bg-accent/50 hover:text-accent-foreground text-zinc-700":
            !isCurrentPath,
        },
      )}
    >
      {children}
    </Link>
  );
}
