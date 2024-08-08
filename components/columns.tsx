"use client";

import { ColumnDef } from "@tanstack/react-table";

type UserColumns = {
  email: string;
  name: string | null;
  id: string;
};
export const columns: ColumnDef<UserColumns>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "NAME",
  },
  {
    accessorKey: "email",
    header: "EMAIL",
  },
];
