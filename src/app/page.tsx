"use client";

import Hero from "@/components/hero/main-hero";
import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/page";
import HeroMiddlePage from "@/components/hero/hero-middle";
import axios from "@/api/axiosInstance";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios("/");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-screen ">
      {/* <header
        className="sticky top-0 z-30 shadow-md w-full"
        style={{
          backgroundColor: "rgb(24, 28, 31)",
        }}
      >
        <Navbar />
      </header> */}
      <main className="flex-grow w-full">
        <div className="min-h-screen flex flex-col">
          <Hero />
          <HeroMiddlePage />
        </div>
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
