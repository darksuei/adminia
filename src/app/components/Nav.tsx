import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full h-20 flex flex-row justify-around items-center gap-10 mb-2">
      <h1 className="text-xl font-bold cursor-pointer">Adminia</h1>
      <ul className="flex flex-row gap-10">
        <li className="cursor-pointer text-sm hover:text-red-400">
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className="cursor-pointer text-sm hover:text-red-400">Account</li>
        <li className="cursor-pointer text-sm hover:text-red-400">Settings</li>
        <li className="cursor-pointer text-sm hover:text-red-400">Log Out</li>
      </ul>
    </nav>
  );
}
