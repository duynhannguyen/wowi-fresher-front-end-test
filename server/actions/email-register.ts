"use server";

import { RegisterSchema } from "@/types/register-schema";
import { createSafeActionClient } from "next-safe-action";
import { db } from "..";
import { eq } from "drizzle-orm";
import { wowiUser } from "../schema";
import bcrypt from "bcrypt";
const action = createSafeActionClient();

export const emailRegister = action
  .schema(RegisterSchema)
  .action(async ({ parsedInput: { email, password, name } }) => {
    const existingUser = await db.query.wowiUser.findFirst({
      where: eq(wowiUser.email, email),
    });
    if (existingUser) {
      return { error: "Email already in use " };
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      await db.insert(wowiUser).values({
        email,
        name,
        password: hashedPassword,
      });
    } catch (error) {
      throw error;
    }

    return { success: "Email have been register successfully" };
  });
