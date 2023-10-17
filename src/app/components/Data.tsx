export default function Data({ data }: { data: any }) {
  function getKeys(obj: any) {
    return Object.keys(obj);
  }
  return (
    <div>
      <ol className="flex flex-col gap-3">
        {data.map((item: any, idx: number) => (
          <li
            className="flex flex-row gap-2 w-10/12 mx-auto bg-white rounded-lg text-black min-h-14 items-center px-4 cursor-pointer hover:bg-gray-200 py-3"
            key={idx}
          >
            <span className="font-black">{idx + 1}.</span>
            <div className="flex flex-col gap-1">
              <span>
                {getKeys(item)[0]} : {item[getKeys(item)[0]]}
              </span>
              <span>
                {getKeys(item)[1]} : {item[getKeys(item)[1]]}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
