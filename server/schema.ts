import { pgTable, text } from "drizzle-orm/pg-core";

export const wowiUser = pgTable("wowiUser", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID())
    .notNull(),
  name: text("name"),
  email: text("email").notNull(),
  password: text("password"),
});
