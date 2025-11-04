import { ReactNode } from "react";

interface MobileProps {
  children: ReactNode;
}

export function Mobile({ children }: MobileProps) {
  return <nav className="flex flex-col items-start gap-4 px-4">{children}</nav>;
}

interface DesktopProps {
  children: ReactNode;
}

export function Desktop({ children }: DesktopProps) {
  return <nav className="hidden items-center gap-4 md:flex">{children}</nav>;
}
