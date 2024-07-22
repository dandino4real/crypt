"use client";
import BuyP2p from "@/components/dashboard/trade/p2p-buy";
import SellP2P from "@/components/dashboard/trade/p2p-sell";
import SwapP2P from "@/components/dashboard/trade/p2p-swap";

import Image from "next/image";

import { useState } from "react";

export default function Trade() {
  const [activeLink, setActiveLink] = useState("buy");

  return (
    <div className="bg-[#181c1f] "
    
    >
      <div
        className="mx-8 mt-6 rounded-3xl p-6  bg-[#0a0c0f] "
     
      >

          <div className="flex justify-between items-center mb-8 px-6 ">
            <div
              role="tablist"
              className="tabs tabs-boxed bg-[#26304E]"
          
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

            <div className="cursor-pointer">
              <Image
                src={"/toggle.svg"}
                alt="search"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "26px", height: "auto" }}
              />
            </div>
          </div>

          <div className="mt-8 px-8 py-8">
            {activeLink === "buy" && (
              <div>
                <BuyP2p />
              </div>
            )}
            {activeLink === "sell" && (
              <div>
                <SellP2P />
              </div>
            )}
            {activeLink === "swap" && (
              <div>
                <SwapP2P />
              </div>
            )}
          </div>
        </div>
   
    </div>
  );
}
