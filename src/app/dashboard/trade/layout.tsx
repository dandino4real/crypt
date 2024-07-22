import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "user-dashboard",
};

export default function TradeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div
        className="text-sm breadcrumbs mx-4 p-4 mt-4 rounded-3xl opacity-50"
        style={{
          backgroundColor: "#616C8F",
        }}
      >
        <ul>
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link href={"/dashboard"}>Market</Link>
          </li>
          <li>Trade</li>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
}
