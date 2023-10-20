"use client";
import { DeleteAllData } from "@/services";

export default function DeleteAllBtn() {
  return (
    <button
      className="w-7/12 bg-red-600 py-3 text-white font-bold text-center border border-white mx-auto mt-5"
      onClick={() => {
        alert("Are you sure you want to delete all data?");
        DeleteAllData();
      }}
    >
      Delete All
    </button>
  );
}
