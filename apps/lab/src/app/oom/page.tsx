"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => [...prev, Math.random()]); // 계속 메모리에 쌓임
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Memory Leak Example</h1>
      <p>Data length: {data.length}</p>
      <Link href="/oom/example">이동하기</Link>
    </div>
  );
}
