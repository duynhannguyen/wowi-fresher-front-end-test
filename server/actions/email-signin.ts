"use server";

import { LoginSchema } from "@/types/login-schema";
import { createSafeActionClient } from "next-safe-action";
import { db } from "..";
import { eq } from "drizzle-orm";
import { wowiUser } from "../schema";
import bcrypt from "bcrypt";
const action = createSafeActionClient();

export const emailSignin = action
  .schema(LoginSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    try {
      const existingUser = await db.query.wowiUser.findFirst({
        where: eq(wowiUser.email, email),
      });

      if (existingUser?.email !== email) {
        return { error: "Email not found" };
      }
      if (existingUser.password) {
        const comparedPassword = bcrypt.compare(
          password,
          existingUser.password
        );

        if (!comparedPassword) {
          return { error: "Email or password is incorrect" };
        }
      }

      return {
        success: "Login success",
      };
    } catch (error) {
      throw error;
    }
  });
