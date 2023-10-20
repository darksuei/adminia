"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { logOut } from "@/utils";

export default function Nav({ cursive }: { cursive: any }) {
  const router = useRouter();
  const isLoggedIn = true;

  return (
    <nav className="w-full h-20 flex flex-col md:flex-row justify-around items-center gap-x-10 mb-2">
      <h1 className={`text-xl font-bold cursor-pointer ${cursive.className}`}>
        Adminia
      </h1>
      {isLoggedIn ? (
        <ul className="flex flex-row gap-10">
          <li className="cursor-pointer text-sm hover:text-red-400">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="cursor-pointer text-sm hover:text-red-400">
            <Link href="/setup">Settings</Link>
          </li>
          <li className="cursor-pointer text-sm hover:text-red-400">
            <Link href="/login">Login</Link>
          </li>
          <li
            className="cursor-pointer text-sm hover:text-red-400"
            onClick={() => {
              router.push("/login");
              logOut();
            }}
          >
            Log Out
          </li>
        </ul>
      ) : (
        <ul className="flex flex-row gap-10">
          <li className="cursor-pointer text-sm hover:text-red-400">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="cursor-pointer text-sm hover:text-red-400">
            <Link href="/login">Login</Link>
          </li>
          <li className="cursor-pointer text-sm hover:text-red-400">
            <Link href="/register">Register</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
