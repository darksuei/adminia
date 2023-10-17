"use client";

import Nav from "../components/Nav";
import { dummy_data } from "@/data";
import useSWR from "swr";
import { Suspense, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { mapData } from "@/utils";
import Data from "../components/Data";

export default function Dashboard() {
  const token = Cookies.get("token");
  const [mappedData, setMappedData] = useState<any[]>([]);

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

  return (
    <main>
      <Nav />
      <section className="flex flex-col gap-4 px-20">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-gray-400 text-sm">
          Create a new project or manage existing projects
        </p>
        <Suspense
          fallback={<div className="text-white text-2xl">Loading..</div>}
        >
          {!isLoading && <Data data={data.data} />}
        </Suspense>
        <button className="w-7/12 bg-red-600 py-3 text-white font-bold text-center border border-white mx-auto mt-5">
          Delete All
        </button>
      </section>
    </main>
  );
}
