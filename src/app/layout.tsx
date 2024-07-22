import type { Metadata } from "next";

import { Lato, Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Provider from "@/lib/Provider";
import Providers from "./providers";
import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A1swapify",
  description: "Best p2p coin platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className}  `}>
        <Providers>
          <main className=" ">
            <Provider>{children}</Provider>
          </main>
        </Providers>
        {/* <Provider>{children}</Provider> */}
      </body>
    </html>
  );
}
