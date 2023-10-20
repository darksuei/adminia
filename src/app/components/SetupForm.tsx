"use client";
import MySql from "../../assets/mysql.svg";
import PostgreSql from "../../assets/postgresql.svg";
import MongoDb from "../../assets/mongodb.svg";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import { useState, useContext } from "react";
import { UserContext } from "@/contexts";
import { useRouter } from "next/navigation";

export default function SetUpForm() {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const [activeDatabase, setActiveDatabase] = useState<string>("");

  function handleDatabaseSelection(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    database: string
  ) {
    e.stopPropagation();
    setActiveDatabase(database);
  }

  return (
    <Formik
      initialValues={{
        projectName: user.projectName || "",
        connectionString: user.connectionString || "",
        database: user.database || activeDatabase,
      }}
      onSubmit={async (values, { resetForm }) => {
        values.database = activeDatabase;
        console.log(values);
        setUser!(values);
        router.push("/setup/credentials");
      }}
    >
      {() => (
        <Form className="w-full flex flex-col gap-6">
          <div className="form-item">
            <label>
              Project Name <span className="text-red-700 text-xl">*</span>
            </label>
            <Field
              type="text"
              name="projectName"
              id="projectName"
              placeholder="Prefferrably a unique name"
              className="border-2 border-gray-300 rounded-md p-2"
              required
            />
            <span className="text-gray-400 text-xs">e.g White Hat</span>
          </div>

          <div className="form-item">
            <label>
              Database Connection String or Url{" "}
              <span className="text-red-700 text-xl">*</span>
            </label>
            <Field
              type="text"
              name="connectionString"
              id="connectionString"
              placeholder="Enter database connection string"
              className="border-2 border-gray-300 rounded-md p-2"
              required
            />
            <span className="text-gray-400 text-xs">
              e.g mongodb://happyboy:123@myserver.com
            </span>
          </div>
          <div className="form-item">
            <label>Database System</label>
            <div className="flex flex-col md:flex-row gap-5">
              <div
                className={`w-8/12 md:w-2/12 h-20 border p-4 rounded-lg ${
                  activeDatabase === "mysql"
                    ? "border-2 border-blue-500 text-white"
                    : ""
                }}`}
                onClick={(e) => {
                  handleDatabaseSelection(e, "mysql");
                }}
              >
                <Image
                  src={MySql}
                  alt="mysql"
                  quality={100}
                  className="m-auto"
                />
              </div>
              <div
                className={`w-8/12 md:w-2/12  h-20 border p-4 rounded-lg ${
                  activeDatabase === "postgres"
                    ? "border-2 border-blue-500 text-white"
                    : ""
                }}`}
                onClick={(e) => handleDatabaseSelection(e, "postgres")}
              >
                <Image
                  src={PostgreSql}
                  alt="postgresql"
                  quality={100}
                  className="m-auto"
                />
              </div>
              <div
                className={`w-8/12 md:w-2/12  h-20 border p-4 rounded-lg ${
                  activeDatabase === "mongodb"
                    ? "border-2 border-blue-500 text-white"
                    : ""
                }}`}
                onClick={(e) => handleDatabaseSelection(e, "mongodb")}
              >
                <Image
                  src={MongoDb}
                  alt="mongodb"
                  quality={100}
                  className="m-auto"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 w-7/12 mx-auto"
          >
            Next
          </button>
        </Form>
      )}
    </Formik>
  );
}
