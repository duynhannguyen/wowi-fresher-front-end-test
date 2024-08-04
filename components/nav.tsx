import { LogIn } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  return (
    <header className=" p-8  ">
      <nav className="flex items-center justify-between">
        <p className="font-bold cursor-pointer hover:opacity-75 transition-all duration-300 ease-in-out  ">
          <Link href={"/"}> WOWI-FRESHER_TEST</Link>
        </p>
        <button className="bg-purple-800 p-3 rounded-md ">
          <Link className="flex gap-2" href={"/auth/login"}>
            <LogIn size={26} /> <span>LogIn</span>
          </Link>
        </button>
      </nav>
    </header>
  );
}
