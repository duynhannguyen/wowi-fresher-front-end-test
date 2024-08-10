"use client";

import { useTokenStore } from "@/libs/client-store";
import { LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();
  const { accessToken, user, storeAccessToken } = useTokenStore();
  const onSignOut = async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const data = await res.json();
        if (!data) {
          throw data;
        }
        return data;
      });
      storeAccessToken("");
      router.push("/auth/login");
    } catch (error) {
      throw error;
    }
  };
  return (
    <header className="  py-8   ">
      <nav className="flex items-center justify-between">
        <p className="font-bold cursor-pointer hover:opacity-75 transition-all duration-300 ease-in-out  ">
          <Link href={"/"}> WOWI-FRESHER_TEST</Link>
        </p>
        <div className="flex items-center gap-4 transition-all duration-300 ease-in-out   ">
          {accessToken ? (
            <button
              onClick={() => onSignOut()}
              className="bg-purple-800 p-3 rounded-md cursor-pointer hover:opacity-75 transition-all duration-300 ease-in-out "
            >
              <div className="flex items-center gap-2">
                <LogOut size={20} />
                <span className="text-sm">Sign out</span>
              </div>
            </button>
          ) : (
            <button className="bg-purple-800 p-3 rounded-md cursor-pointer hover:opacity-75 transition-all duration-300 ease-in-out ">
              <Link className="flex items-center gap-2" href={"/auth/login"}>
                <LogIn size={20} />
                <span className="text-sm">Sign in</span>
              </Link>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
