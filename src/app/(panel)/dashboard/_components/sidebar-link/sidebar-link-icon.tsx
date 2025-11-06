import { LucideProps } from "lucide-react";
import { ElementType } from "react";

interface SidebarLinkIconProps extends LucideProps {
  icon: ElementType;
}

export function SidebarLinkIcon({
  icon: Icon,
  ...props
}: SidebarLinkIconProps) {
  return <Icon {...props} />;
}
