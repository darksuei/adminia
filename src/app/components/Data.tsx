import { useState } from "react";

export default function Data({ data }: { data: any }) {
  function getKeys(obj: any) {
    return Object.keys(obj);
  }
  function handleEdit() {}
  function handleDelete() {}
  return (
    <div>
      <ol className="flex flex-col gap-3">
        {data &&
          data.map((item: any, idx: number) => (
            <li
              className="flex flex-row w-10/12 mx-auto bg-white rounded-lg text-black min-h-14 items-center justify-between px-4 cursor-pointer hover:bg-gray-200 py-3 relative"
              key={idx}
            >
              <div className="flex flex-row gap-3">
                <span className="font-black">{idx + 1}.</span>
                <div className="flex flex-col gap-1">
                  <span>
                    {getKeys(item)[0]} : {item[getKeys(item)[0]]}
                  </span>
                  <span>
                    {getKeys(item)[1]} : {item[getKeys(item)[1]]}
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-4 h-full relative right-0">
                <i className="fas fa-pen text-blue-500 scale-icon"></i>
                <i className="fas fa-trash text-red-700 scale-icon"></i>
              </div>
            </li>
          ))}
      </ol>
    </div>
  );
}
