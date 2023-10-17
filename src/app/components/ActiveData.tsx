import { useRef, useEffect } from "react";
import { Formik, Field, Form } from "formik";

export default function ActiveData({
  data,
  setter,
}: {
  data: any;
  setter: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const mainComponentRef = useRef(null);

  useEffect(() => {
    function docClick(event: MouseEvent) {
      if (
        mainComponentRef.current &&
        !(mainComponentRef.current as any).contains(event.target)
      ) {
        setter(null);
      }
    }

    document.addEventListener("click", docClick);
    return () => document.removeEventListener("click", docClick);
  }, [setter]);

  return (
    <main className="w-full h-full flex items-center justify-center fixed top-0 left-0 z-20">
      <div
        ref={mainComponentRef}
        className="bg-white w-8/12 rounded-2xl h-5/6 overflow-y-scroll py-14 px-8 relative flex flex-col gap-3"
        onClick={(e: React.SyntheticEvent) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <button
          className="absolute top-3.5 right-4 text-white cursor-pointer"
          onClick={(e) => {
            setter(null);
          }}
        >
          <i className="fas fa-times-circle text-red-700 text-xl rounded-full"></i>
        </button>
        <Formik
          initialValues={data}
          onSubmit={async (values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          {() => {
            return (
              data &&
              Object.keys(data).map((item: any, index: number) => {
                return (
                  <div
                    className="flex flex-row gap-5 text-black items-center"
                    key={index}
                  >
                    <p className="text-gray-400 text-lg font-bold">{item} :</p>
                    <input
                      type="text"
                      value={data[item]}
                      className="p-2 border border-blue-400 w-8/12"
                    />
                  </div>
                );
              })
            );
          }}
        </Formik>
        <div className="flex flex-row justify-between mt-3">
          <button className="bg-red-600 p-2 w-5/12">Delete</button>
          <button className="bg-blue-500 p-2 w-5/12">Edit</button>
        </div>
      </div>
    </main>
  );
}
