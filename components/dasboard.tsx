"use client";

import { useTokenStore } from "@/libs/client-store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { accessToken } = useTokenStore();

  const router = useRouter();
  useEffect(() => {
    if (!accessToken) {
      return router.push("/");
    }
  }, []);

  return (
    <div>
      <h1>Dash board page</h1>
    </div>
  );
}
