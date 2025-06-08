"use client";

import { useRouter } from "next/navigation";

export default function ModalAll() {
  const router = useRouter();

  const handleClickToClose = () => {
    router.back();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white w-[200px] h-[200px] flex flex-col gap-4 p-4 rounded-lg">
        <h1>All</h1>
        <div className="flex flex-col gap-4">
          <button onClick={handleClickToClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
