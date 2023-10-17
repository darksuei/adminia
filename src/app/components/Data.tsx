import { useState } from "react";
import ActiveData from "./ActiveData";
import Cookies from "js-cookie";
import AddData from "./AddData";

export default function Data({ data }: { data: any }) {
  const [activeData, setActiveData] = useState<number | null>(null);
  const [addData, setAddData] = useState(false);
  const tableName = Cookies.get("tableName");

  function getKeys(obj: any) {
    return Object.keys(obj);
  }
  function handleDelete() {}
  return (
    <div>
      {typeof activeData === "number" && (
        <ActiveData data={data[activeData]} setter={setActiveData} />
      )}
      {addData && (
        <AddData data={data[0] ? data[0] : null} setter={setAddData} />
      )}
      <div className="flex flex-col justify-center items-end gap-4 mb-3 w-11/12">
        <h1 className="text-2xl font-bold">{tableName}</h1>
        <span
          className="flex flex-row gap-3 items-center border py-1 px-2"
          onClick={() => setAddData(!addData)}
        >
          <span>Add new item</span>
          <i className="fas fa-plus"></i>
        </span>
      </div>
      <ol className="flex flex-col gap-3">
        {data &&
          data.map((item: any, idx: number) => (
            <li
              className="flex flex-row w-10/12 mx-auto bg-white rounded-lg text-black min-h-14 items-center justify-between px-4 cursor-pointer hover:bg-gray-200 py-3 relative"
              key={idx}
              onClick={() => {
                setActiveData(idx);
              }}
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
                <i
                  className="fas fa-pen text-blue-500 scale-icon"
                  onClick={() => {
                    setActiveData(idx);
                  }}
                ></i>
                <i className="fas fa-trash text-red-700 scale-icon"></i>
              </div>
            </li>
          ))}
      </ol>
    </div>
  );
}
