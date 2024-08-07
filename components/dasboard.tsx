"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      return router.push("/");
    }
  }, []);

  return (
    <div>
      <h1>Dash board page</h1>
    </div>
  );
}
