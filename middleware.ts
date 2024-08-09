import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePath = ["/dashboard"];
const authPath = ["/auth/login", "/auth/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(pathname);
  const token = request.cookies.get("sessionToken")?.value;
  if (privatePath.some((path) => pathname.startsWith(path) && !token)) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  if (authPath.some((path) => pathname.startsWith(path) && token)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/dashboard"],
};
