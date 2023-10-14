import Nav from "../components/Nav";
import { dummy_data } from "@/data";

export default function Dashboard() {
  return (
    <main>
      <Nav />
      <section className="flex flex-col gap-4 px-20">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-gray-400 text-sm">
          Create a new project or manage existing projects
        </p>
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
      </section>
    </main>
  );
}
