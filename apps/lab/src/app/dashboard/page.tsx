import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">This is the dashboard page.</p>

      <div className="flex gap-4">
        <Link href="/dashboard/all">
          <button>Open</button>
        </Link>
      </div>
    </div>
  );
}
