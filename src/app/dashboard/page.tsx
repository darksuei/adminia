"use client";

import useSWR from "swr";
import { Suspense } from "react";
import Cookies from "js-cookie";
import Data from "../components/Data";
import { DeleteAllData } from "@/services";

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

  return (
    <main>
      <section className="flex flex-col gap-4 px-20">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-gray-400 text-sm">Manage existing projects</p>
        <Suspense
          fallback={<div className="text-white text-2xl">Loading..</div>}
        >
          {!isLoading && <Data data={data.data} />}
        </Suspense>
        <button // CONFIRM THIS WORKS BEFORE DEPLOYING
          className="w-7/12 bg-red-600 py-3 text-white font-bold text-center border border-white mx-auto mt-5"
          onClick={() => {
            alert("Are you sure you want to delete all data?");
            DeleteAllData();
          }}
        >
          Delete All
        </button>
      </section>
    </main>
  );
}
