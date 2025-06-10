"use client";

import useAppStore from "@/store/useAppStore";

export default function ZustandPage() {
  //   const count = useAppStore((state) => state.count);
  //   const increment = useAppStore((state) => state.increment);
  const { count, increment } = useAppStore();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Zustand Example</h1>
      <p className="text-lg">Count: {count}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
}
