import type { Metadata } from "next";

import Footer from "@/components/footer/page";

import Navbar from "@/components/navbar/page";

export const metadata: Metadata = {
  title: "marketplace",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header
        className="sticky top-0 z-30 shadow-md "
        style={{
          backgroundColor: "rgb(24, 28, 31)",
        }}
      >
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col scroll-smooth px-8 ">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
