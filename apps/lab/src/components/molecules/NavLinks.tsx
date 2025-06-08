"use client";

import { usePathname } from "next/navigation";
import { useRouterWrapper } from "@/provider/RouterWrapperProvider";
import ExtendedLink from "@/components/atoms/ExtendedLink";

export function NavLinks() {
  const pathname = usePathname();
  const router = useRouterWrapper();

  return (
    <nav className=" flex gap-4">
      <button onClick={router.back}>{`<`}</button>
      <ExtendedLink
        className={`link ${pathname === "/oom" ? "active" : ""}`}
        href="/oom"
      >
        OOM
      </ExtendedLink>

      <ExtendedLink
        className={`link ${pathname === "/dashboard" ? "active" : ""}`}
        href="/dashboard"
      >
        Dashboard
      </ExtendedLink>
    </nav>
  );
}
