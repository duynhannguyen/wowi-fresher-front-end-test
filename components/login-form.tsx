"use-client";

import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="border border-slate-600 rounded-md p-5  ">
      <h3 className="text-2xl font-semibold mb-3  "> Welcome Back </h3>
      <form className="flex flex-col items-center justify-center w-full  m-auto   gap-4 ">
        <div className="flex flex-col gap-2 w-full ">
          <label htmlFor="username">Email</label>
          <input
            className="p-2 rounded-md bg-transparent border-2 outline-none border-slate-500  focus:border-2 focus:border-purple-800  transition-all duration-300 ease-in-out "
            name="username"
            id="username"
            type="text"
            placeholder="test@gmail.com"
          />
        </div>
        <div className="flex flex-col gap-2 w-full ">
          <label htmlFor="password">Password</label>
          <input
            className="p-2 rounded-md bg-transparent border-2 outline-none border-slate-500  focus:border-2 focus:border-purple-800  transition-all duration-300 ease-in-out "
            name="password"
            id="password"
            type="password"
            placeholder="test@gmail.com"
          />
        </div>
        <button className="bg-purple-800 py-3 px-4 w-full rounded-md hover:opacity-75 transition-all duration-300 ease-in-out   ">
          Sign In
        </button>
      </form>
      <div className="flex justify-center pt-5 ">
        <button className="text-sm font-semibold text-purple-800 hover:underline hover:underline-offset-4 ">
          <Link href={"/auth/register"}>Create new account</Link>
        </button>
      </div>
    </div>
  );
}
