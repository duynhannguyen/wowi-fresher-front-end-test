"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function TokenProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    if (!accessToken) {
      return router.push("/");
    }
  }, []);

  return <>{children}</>;
}
