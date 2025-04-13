export default function Header({
  left,
  center,
  right,
  children,
}: {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="relative h-14 flex items-center px-4">
        <div className="absolute left-4 flex gap-2">{left}</div>
        <div className="mx-auto max-w-[50%] truncate text-center text-base font-semibold">
          {center}
        </div>
        <div className="absolute right-4 flex gap-1">{right}</div>
      </div>
      {/* 아래 요소 확장 가능성 고려 */}
      {children}
    </header>
  );
}
