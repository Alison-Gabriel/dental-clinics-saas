import { ReactNode } from "react";

interface SidebarLinkLabelProps {
  children: ReactNode;
}

export function SidebarLinkLabel({ children }: SidebarLinkLabelProps) {
  return <span>{children}</span>;
}
