"use client"; // Esto indica que el componente es del lado del cliente

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PathnameHandler() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = pathname === "/" ? "hidden" : "auto";
  }, [pathname]);

  return null;
}
