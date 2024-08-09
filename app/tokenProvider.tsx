"use client";

import { useTokenStore } from "@/libs/client-store";
import { useEffect } from "react";

export default function TokenProvider({
  children,
  token,
}: {
  children: React.ReactNode;
  token?: string;
}) {
  const { storeAccessToken } = useTokenStore();

  useEffect(() => {
    if (token) {
      storeAccessToken(token);
    }
  }, [token]);

  return <>{children}</>;
}
