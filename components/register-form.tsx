"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { RegisterSchema } from "@/types/register-schema";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { emailRegister } from "@/server/actions/email-register";
import { useState } from "react";
import FormError from "./form-error";
import FormSuccess from "./form-success";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const { status, execute } = useAction(emailRegister, {
    onSuccess: (data) => {
      if (data.data?.success) {
        setSuccess(data.data.success);
        router.refresh();
        router.push("/auth/login");
      }
      if (data.data?.error) setError(data.data.error);
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    execute(values);
  };
  return (
    <div className="border border-slate-600 rounded-md p-5  ">
      <h3 className="text-2xl font-semibold mb-3  "> Create an account 🎉 </h3>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-center w-full  m-auto   gap-4 "
      >
        <div className="flex flex-col gap-2 w-full ">
          <label
            className={`${
              form.formState.errors.name?.message
                ? "text-red-400"
                : "text-white"
            }`}
            htmlFor="username"
          >
            User name
          </label>
          <input
            className="p-2 rounded-md bg-transparent border-2 outline-none border-slate-500  focus:border-2 focus:border-purple-800  transition-all duration-300 ease-in-out "
            id="username"
            type="text"
            autoComplete="username"
            placeholder="John Doe"
            {...form.register("name")}
          />
        </div>
        <p className="text-xs text-red-400 ">
          {form.formState.errors.name?.message}{" "}
        </p>
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
            type="email"
            autoComplete="email"
            placeholder="test@gmail.com"
            {...form.register("email")}
          />
        </div>
        <p className="text-xs text-red-400 ">
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
            placeholder="********"
            autoComplete="current-password"
            {...form.register("password")}
          />
        </div>
        <p className="text-xs text-red-400 ">
          {form.formState.errors.password?.message}{" "}
        </p>
        <FormError message={error} />
        <FormSuccess message={success} />
        <button
          type="submit"
          className="bg-purple-800 py-3 px-4 w-full rounded-md hover:opacity-75 transition-all duration-300 ease-in-out  disabled:opacity-35   "
          disabled={
            !form.formState.isDirty ||
            !form.formState.isValid ||
            status === "executing"
          }
        >
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
