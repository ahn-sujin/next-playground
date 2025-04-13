export default function NavigationBar() {
  return (
    <>
      <div className="h-16 opacity-0 pointer-events-none" aria-hidden="true" />
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-white border-t shadow-md">
        <ul className="flex justify-between items-center h-16 px-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="flex flex-col items-center text-xs">
              <div className="w-6 h-6 bg-gray-300 rounded-full" />
              Menu {index + 1}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
