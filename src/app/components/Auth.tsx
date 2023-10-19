"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { Login, Register } from "@/services";
import { storeInCookie } from "@/utils";
import { useRouter } from "next/navigation";

type Params = {
  isSignUp: boolean;
  title: string;
};

export default function Auth({ isSignUp, title }: Params) {
  const router = useRouter();

  return (
    <main className="h-5/6 w-full flex items-center">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          if (isSignUp) {
            const response = await Register(values);
            storeInCookie("token", response.user.token);
            response.user.database
              ? router.push("/dashboard")
              : router.push("/setup");
          } else {
            const response = await Login(values);
            storeInCookie("token", response.user.token);
            storeInCookie("tableName", response.user.tableName);
            response.user.database
              ? router.push("/dashboard")
              : router.push("/setup");
          }
          resetForm();
        }}
      >
        {() => (
          <Form className="w-7/12 h-fit m-auto bg-white text-black p-10 rounded-md flex flex-col justify-center gap-5">
            <h1 className="text-center text-black text-3xl">{title}</h1>
            {isSignUp && (
              <div className="form-item">
                <label>
                  Organization Name{" "}
                  <span className="text-red-700 text-xl">*</span>
                </label>
                <Field
                  type="text"
                  name="name"
                  id="text"
                  placeholder="Potato Inc."
                  className="border-2 border-gray-300 rounded-md p-2"
                  required
                />
              </div>
            )}
            <div className="form-item">
              <label>
                Email <span className="text-red-700 text-xl">*</span>
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Potato@email.com"
                className="border-2 border-gray-300 rounded-md p-2"
                required
              />
            </div>

            <div className="form-item">
              <label>
                Password <span className="text-red-700 text-xl">*</span>
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="*******"
                className="border-2 border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-2 w-8/12 mx-auto"
            >
              {title}
            </button>
            <Link
              href={isSignUp ? "/login" : "/register"}
              className="text-xs underline text-blue-500"
            >
              {isSignUp
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Link>
          </Form>
        )}
      </Formik>
    </main>
  );
}
