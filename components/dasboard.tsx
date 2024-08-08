"use client";

import { useTokenStore } from "@/libs/client-store";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function Dashboard<TData, TValue>({
  data,
  columns,
}: DataTableProps<TData, TValue>) {
  const accessToken = localStorage.getItem("accessToken");
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const router = useRouter();
  useEffect(() => {
    if (!accessToken) {
      return router.push("/");
    }
  }, []);

  return (
    <div className="w-full ">
      <table className="w-full">
        <thead className="text-left  ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className=" " key={headerGroup.id}>
              {headerGroup.headers.map((headers) => (
                <th className={" p-2 border border-slate-700"} key={headers.id}>
                  {headers.isPlaceholder
                    ? null
                    : flexRender(
                        headers.column.columnDef.header,
                        headers.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <td className="border border-slate-700 p-2" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
