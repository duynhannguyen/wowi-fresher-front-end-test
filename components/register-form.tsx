import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className="border border-slate-600 rounded-md p-5  ">
      <h3 className="text-2xl font-semibold mb-3  "> Create an account 🎉 </h3>
      <form className="flex flex-col items-center justify-center w-full  m-auto   gap-4 ">
        <div className="flex flex-col gap-2 w-full ">
          <label htmlFor="username">User name</label>
          <input
            className="p-2 rounded-md bg-transparent border-2 outline-none border-slate-500  focus:border-2 focus:border-purple-800  transition-all duration-300 ease-in-out "
            name="username"
            id="username"
            type="text"
            autoComplete="username"
            placeholder="John Doe"
          />
        </div>

        <div className="flex flex-col gap-2 w-full ">
          <label htmlFor="email">Email</label>
          <input
            className="p-2 rounded-md bg-transparent border-2 outline-none border-slate-500  focus:border-2 focus:border-purple-800  transition-all duration-300 ease-in-out "
            name="email"
            id="email"
            type="text"
            autoComplete="email"
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
          Register
        </button>
      </form>
      <div className="flex justify-center pt-5 ">
        <Link
          className="text-sm font-semibold text-purple-800 hover:underline hover:underline-offset-4 "
          href={"/auth/login"}
        >
          Already have an account?
        </Link>
      </div>
    </div>
  );
}
