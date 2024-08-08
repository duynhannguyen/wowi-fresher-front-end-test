"use client";

import { useTokenStore } from "@/libs/client-store";
import { LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Nav() {
  const router = useRouter();
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    if (!accessToken) {
      return router.push("/");
    }
  }, []);
  const { user, signOut } = useTokenStore();

  return (
    <header className="  py-8   ">
      <nav className="flex items-center justify-between">
        <p className="font-bold cursor-pointer hover:opacity-75 transition-all duration-300 ease-in-out  ">
          <Link href={"/"}> WOWI-FRESHER_TEST</Link>
        </p>
        <div className="flex items-center gap-4 transition-all duration-300 ease-in-out   ">
          {accessToken ? <span>Hello {user.name} </span> : null}
          {accessToken ? (
            <button
              onClick={() => {
                localStorage.removeItem("accessToken");
                signOut();
                router.push("/");
              }}
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
