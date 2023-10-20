import { useRef, useEffect } from "react";
import { CreateNewData } from "@/services";
import { Formik, Field, Form } from "formik";
import { getInitValues } from "@/utils";

export default function AddData({
  data,
  setter,
}: {
  data: any;
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const mainComponentRef = useRef(null);
  const initialValues = getInitValues(data);
  console.log(initialValues);

  useEffect(() => {
    function docClick(event: MouseEvent) {
      if (
        mainComponentRef.current &&
        !(mainComponentRef.current as any).contains(event.target)
      ) {
        setter(false);
      }
    }

    document.addEventListener("click", docClick);
    return () => document.removeEventListener("click", docClick);
  }, [setter]);

  return (
    <main className="w-full h-full flex items-center justify-center fixed top-0 left-0 z-20">
      <div
        ref={mainComponentRef}
        className="bg-white w-8/12 rounded-2xl min-h-4/6 py-14 px-8 relative flex flex-col text-black gap-3"
        onClick={(e: React.SyntheticEvent) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <button
          className="absolute top-3.5 right-4 text-white cursor-pointer"
          onClick={(e) => {
            setter(false);
          }}
        >
          <i className="fas fa-times-circle text-red-700 text-xl rounded-full"></i>
        </button>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { resetForm }) => {
            resetForm();
          }}
        >
          {({ submitForm, errors, values }) => (
            <Form>
              {data ? (
                Object.keys(data)
                  .filter((item) => item !== "_id")
                  .map((item: any, index: number) => (
                    <div
                      className="flex flex-row gap-5 text-black items-center mb-2"
                      key={index}
                    >
                      <p className="text-gray-400 text-lg font-bold">{item}:</p>
                      {item !== "_id" && (
                        <Field
                          type="text"
                          className="p-2 border border-blue-400 w-8/12"
                          name={item}
                          id={item}
                        />
                      )}
                    </div>
                  ))
              ) : (
                <div className="flex flex-col items-center">
                  <span className="text-2xl text-gray-300 mb-3">
                    No data found
                  </span>
                  <div className="border px-3 py-1 mx-auto text-lg bg-slate-200 flex flex-row items-center gap-4 cursor-pointer">
                    <span>Add new field</span>
                    <i className="fas fa-plus"></i>
                  </div>
                </div>
              )}
              <div className="flex flex-row justify-between mt-3 text-white">
                <button
                  className="bg-red-600 p-2 w-5/12"
                  onClick={() => {
                    setter(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 p-2 w-5/12"
                  onClick={() => {
                    submitForm;
                    const data = values;
                    delete data._id;
                    console.log(errors, data);
                    CreateNewData(data);
                  }}
                >
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
}
