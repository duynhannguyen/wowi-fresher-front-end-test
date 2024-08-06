"use client";

import Link from "next/link";
import { LoginSchema } from "@/types/login-schema";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    const data = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => res.json());
    console.log("data", data);
    console.log("values", values);
  };

  return (
    <div className="border border-slate-600 rounded-md p-5  ">
      <h3 className="text-2xl font-semibold mb-3  "> Welcome Back 👋 </h3>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-center  w-full  m-auto gap-4 "
      >
        <div className="flex flex-col gap-2 w-full ">
          <label
            className={`${
              form.formState.errors.email?.message
                ? "text-red-400"
                : "text-white"
            }`}
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="p-2 rounded-md bg-transparent border-2 outline-none border-slate-500  focus:border-2 focus:border-purple-800  transition-all duration-300 ease-in-out "
            id="email"
            type="text"
            autoComplete="email"
            placeholder="test@gmail.com"
            {...form.register("email")}
          />
        </div>
        <p className="text-xs text-red-400 ">
          {" "}
          {form.formState.errors.email?.message}{" "}
        </p>
        <div className="flex flex-col gap-2 w-full ">
          <label
            className={`${
              form.formState.errors.password?.message
                ? "text-red-400"
                : "text-white"
            }`}
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="p-2 rounded-md bg-transparent border-2 outline-none border-slate-500  focus:border-2 focus:border-purple-800  transition-all duration-300 ease-in-out "
            id="password"
            type="password"
            placeholder="*********"
            autoComplete="current-password"
            {...form.register("password")}
          />
        </div>
        <p className="text-xs text-red-400 ">
          {" "}
          {form.formState.errors.password?.message}{" "}
        </p>

        <button
          type="submit"
          className="bg-purple-800 py-3 px-4 w-full rounded-md hover:opacity-75 transition-all duration-300 ease-in-out disabled:opacity-35   "
          disabled={!form.formState.isDirty || !form.formState.isValid}
        >
          Sign In
        </button>
      </form>
      <div className="flex justify-center pt-5 ">
        <Link
          className="text-sm font-semibold text-purple-800 hover:underline hover:underline-offset-4 "
          href={"/auth/register"}
        >
          Create new account
        </Link>
      </div>
    </div>
  );
}
