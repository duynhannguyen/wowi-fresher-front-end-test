import { LogIn } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="  py-8   ">
      <nav className="flex items-center justify-between">
        <p className="font-bold cursor-pointer hover:opacity-75 transition-all duration-300 ease-in-out  ">
          <Link href={"/"}> WOWI-FRESHER_TEST</Link>
        </p>
        <button className="bg-purple-800 p-3 rounded-md cursor-pointer hover:opacity-75 transition-all duration-300 ease-in-out ">
          <Link className="flex items-center gap-2" href={"/auth/login"}>
            <LogIn size={20} /> <span className="text-sm">LogIn</span>
          </Link>
        </button>
      </nav>
    </header>
  );
}
