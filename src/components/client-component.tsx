"use client";

export default function ClientComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("클라이언트");

  return (
    <div>
      클라이언트 컴포넌트
      {children}
    </div>
  );
}
