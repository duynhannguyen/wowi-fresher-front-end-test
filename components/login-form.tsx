"use-client";
export default function LoginForm() {
  return (
    <form className="flex flex-col items-center justify-center w-[550px]  m-auto p-5 border border-slate-600 rounded-md gap-4 ">
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
        Login
      </button>
    </form>
  );
}
