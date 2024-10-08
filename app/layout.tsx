import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import { cookies } from "next/headers";
import TokenProvider from "./tokenProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const token = cookieStore.get("sessionToken");
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <TokenProvider token={token?.value}>
          <div className="px-6 md:px-12 max-w-7xl mx-auto">
            <Nav />
            {children}
          </div>
        </TokenProvider>
      </body>
    </html>
  );
}
