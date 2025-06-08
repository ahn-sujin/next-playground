"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import {
  NavigationDirection,
  useRouterWrapper,
} from "@/provider/RouterWrapperProvider";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { direction } = useRouterWrapper();

  // const [cachedChildren, setCachedChildren] = useState<React.ReactNode | null>(
  //   null
  // );
  // const previousPathRef = useRef<string | null>(null);

  // useEffect(() => {
  //   if (previousPathRef.current !== pathname) {
  //     setCachedChildren(children); // 캐싱된 children 저장
  //     previousPathRef.current = pathname;
  //   }
  // }, [pathname, children]);

  return (
    <div className="flex relative">
      <motion.div
        key={pathname}
        custom={direction}
        variants={{
          enter: (direction: NavigationDirection) => ({
            x: direction === "forward" ? "100vw" : "-100vw",
          }),
          center: {
            x: 0,
          },
        }}
        initial={"enter"}
        animate={"center"}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {children}
      </motion.div>

      <motion.div
        key={"prev cache page"}
        custom={direction}
        variants={{
          center: {
            x: 0,
          },
          exit: (direction: NavigationDirection) => ({
            x: direction === "forward" ? "-100vw" : "100vw",
          }),
        }}
        initial={"center"}
        animate={"exit"}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: "100vw",
        }}
      >
        {"cached page"}
      </motion.div>
    </div>
  );
}
