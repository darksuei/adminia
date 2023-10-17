"use client";
import { useContext } from "react";
import { UserContext } from "@/contexts";
import { Formik, Form, Field } from "formik";
import { PostCredentials } from "@/services";
import { useRouter } from "next/navigation";

export default function Credentials() {
  const router = useRouter();
  const { user } = useContext(UserContext);
  return (
    <Formik
      initialValues={{
        ...user,
        databaseUserName: "",
        databasePassword: "",
        tableName: "",
      }}
      onSubmit={async (values, { resetForm }) => {
        console.log(values);
        const response = await PostCredentials(values);
        resetForm();
        console.log(response);
        router.push("/dashboard");
      }}
    >
      {() => (
        <Form className="w-full flex flex-col gap-6">
          <div className="form-item">
            <label>Username</label>
            <Field
              type="text"
              name="databaseUserName"
              id="databaseUserName"
              placeholder="Enter your database username"
              className="border-2 border-gray-300 rounded-md p-2"
            />
            <span className="text-gray-400 text-xs">e.g potato</span>
          </div>

          <div className="form-item">
            <label>Password</label>
            <Field
              type="password"
              name="databasePassword"
              id="databasePassword"
              placeholder="Enter database password"
              className="border-2 border-gray-300 rounded-md p-2"
            />
            <span className="text-gray-400 text-xs">e.g potato2021</span>
          </div>

          <div className="form-item">
            <label>
              Table/Collection Name{" "}
              <span className="text-red-700 text-xl">*</span>
            </label>
            <Field
              type="text"
              name="tableName"
              id="tableName"
              placeholder="Enter table or collection name"
              className="border-2 border-gray-300 rounded-md p-2"
            />
            <span className="text-gray-400 text-xs">e.g users</span>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 w-8/12 mx-auto"
          >
            Create Project
          </button>
        </Form>
      )}
    </Formik>
  );
}
