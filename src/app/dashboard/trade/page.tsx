"use client";
import StandardBuy from "@/components/dashboard/trade/standard-buy";

import StandardSell from "@/components/dashboard/trade/standard-sell";

import StandardSwap from "@/components/dashboard/trade/standard-swap";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Trade() {
  const [activeLink, setActiveLink] = useState("swap");

  return (
    <div
      style={{
        backgroundColor: "#181c1f",
      }}
    >
      <div
        className="mx-8 mt-4 rounded-2xl py-3"
        style={{
          backgroundColor: "#0a0c0f",
        }}
      >
        <div className="rounded-3xl mx-3 my-3 py-2 pl-8 pe-12">
          <div className="flex justify-between items-center mb-8">
            <div
              role="tablist"
              className="tabs tabs-boxed"
              style={{ backgroundColor: "#26304E" }}
            >
              <div
                className={`tab text-white ${
                  activeLink === "buy"
                    ? "bg-gradient-to-br from-start-color to-end-color"
                    : "hover:bg-gradient-to-br from-start-color to-start-color"
                }`}
                onClick={() => setActiveLink("buy")}
              >
                <p>buy</p>
              </div>
              <div
                className={`tab text-white ${
                  activeLink === "sell"
                    ? "bg-gradient-to-br from-start-color to-end-color"
                    : "hover:bg-gradient-to-br from-start-color to-start-color"
                }`}
                onClick={() => setActiveLink("sell")}
              >
                <p>sell</p>
              </div>
              <div
                className={`tab text-white ${
                  activeLink === "swap"
                    ? "bg-gradient-to-br from-start-color to-end-color"
                    : "hover:bg-gradient-to-br from-start-color to-start-color"
                }`}
                onClick={() => setActiveLink("swap")}
              >
                <p>swap</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div>
                <Link href={"/"}>
                  <Image
                    src={"/vector.svg"}
                    alt="search"
                    width={26}
                    height={24}
                  />
                </Link>
              </div>
              <div>
                <Link href={"/"}>
                  <Image
                    src={"/exclamation.svg"}
                    alt="exclamation"
                    width={20}
                    height={20}
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className=" mt-14">
            {activeLink === "buy" && (
              <div>
                <StandardBuy />
              </div>
            )}
            {activeLink === "sell" && (
              <div>
                <StandardSell />
              </div>
            )}
            {activeLink === "swap" && (
              <div>
                <StandardSwap />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
