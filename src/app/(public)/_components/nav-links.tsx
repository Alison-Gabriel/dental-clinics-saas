import { Button } from "@/src/components/ui/button";
import { Link } from "lucide-react";
import { useState } from "react";

export function NavLinks() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const items = [{ href: "#clinics", label: "Clínicas" }];

  return (
    <>
      {items.map((item) => (
        <Button
          asChild
          variant="link"
          key={item.href}
          onClick={() => setIsSheetOpen(false)}
        >
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}
    </>
  );
}
