import Link from "next/link";
type Params = {
  isSignUp: boolean;
  title: string;
};
export default function Auth({ isSignUp, title }: Params) {
  return (
    <main className="h-screen w-full flex items-center">
      <form className="w-7/12 h-fit m-auto bg-white text-black p-10 rounded-md flex flex-col justify-center gap-5">
        <h1 className="text-center text-black text-3xl">{title}</h1>
        {isSignUp && (
          <div className="form-item">
            <label>
              Organization Name <span className="text-red-700 text-xl">*</span>
            </label>
            <input
              type="text"
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
          <input
            type="email"
            placeholder="Potato@email.com"
            className="border-2 border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="form-item">
          <label>
            Password <span className="text-red-700 text-xl">*</span>
          </label>
          <input
            type="password"
            placeholder="*******"
            className="border-2 border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <button className="bg-blue-500 text-white rounded-md p-2 w-8/12 mx-auto">
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
      </form>
    </main>
  );
}
