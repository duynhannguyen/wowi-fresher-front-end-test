"use server";

import { LoginSchema } from "@/types/login-schema";
import { createSafeActionClient } from "next-safe-action";

const action = createSafeActionClient();

export const emailSignin = action
  .schema(LoginSchema)
  .action(async ({ parsedInput: values }) => {
    console.log("values", values);
  });
