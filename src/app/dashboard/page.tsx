"use client";

import Nav from "../components/Nav";
import { dummy_data } from "@/data";
import useSWR from "swr";
import { Suspense } from "react";
import Cookies from "js-cookie";

export default function Dashboard() {
  const token = Cookies.get("token");

  const fetcher = (url: string, token: string) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER}/get_db`,
    (url) => fetcher(url, token!)
  );
  console.log(data);

  return (
    <main>
      <Nav />
      <section className="flex flex-col gap-4 px-20">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-gray-400 text-sm">
          Create a new project or manage existing projects
        </p>
        <Suspense fallback={<div>Loading..</div>}>
          <ol className="flex flex-col gap-3">
            {dummy_data.map((data, idx) => (
              <li
                className="flex flex-row gap-2 w-10/12 mx-auto bg-white rounded-lg text-black h-14 items-center justify-between px-4 cursor-pointer hover:bg-gray-200"
                key={idx}
              >
                {data.name}
              </li>
            ))}
          </ol>
        </Suspense>
      </section>
    </main>
  );
}
