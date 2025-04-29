"use client";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.back()}>돌아가기</button>
    </div>
  );
};

export default Page;
