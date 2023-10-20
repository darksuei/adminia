import { Suspense } from "react";
import Data from "../components/Data";
import DeleteAllBtn from "../components/DeleteAllBtn";

export default function Dashboard() {
  return (
    <main>
      <section className="flex flex-col gap-4 md:px-20">
        <h1 className="text-4xl font-bold pl-5">Dashboard</h1>
        <p className="text-gray-400 text-sm pl-5">Manage existing projects</p>
        <Suspense
          fallback={<div className="text-red-600 text-2xl">Loading..</div>}
        >
          <Data />
        </Suspense>
        <DeleteAllBtn />
      </section>
    </main>
  );
}
