"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

export default function AnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isFirstMounted, setIsFirstMounted] = useState(false);

  useEffect(() => {
    setIsFirstMounted(true);
  }, []);

  return (
    <AnimatePresence initial={isFirstMounted}>
      <div key={pathname}>{children}</div>
    </AnimatePresence>
  );
}
