export default function ActiveData({ data }: { data: any }) {
  return (
    <main className="w-full h-full flex items-center justify-center fixed top-0 bg-sky-300">
      <div className="bg-white w-8/12 rounded-2xl min-h-4/6 py-14 px-8">
        {Object.keys(data[0]).map((item: any, index: number) => {
          return (
            <div className="flex flex-row gap-4 text-black" key={index}>
              <p className="text-gray-400 text-lg font-bold">{item} :</p>
              <p className="text-gray-400 text-base">{data[0][item]}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
