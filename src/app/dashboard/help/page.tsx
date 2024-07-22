"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Help() {
  return (
    <div className="bg-[#0E1015] mx-8 mt-8 p-8 rounded-3xl min-h-screen">
      <h2 className="text-lg font-semibold mb-6">A-1 Swapify Help center</h2>

      <div className="collapse collapse-arrow bg-[#0A0C0F] border-b border-b-gray-500">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title  font-medium text-sm">
          What is A-1 Swapify
        </div>

        <div className="collapse-content mx-6 text-xs">
          <div>
            <div className=" flex justify-between items-center ">
              <p className="font-semibold">About A-1 Swapify</p>

              <Link href={"/dashboard/help/about"}>
                <Image
                  src="/dropforward.svg"
                  alt=" icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "15px", height: "auto" }}
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>
          <div>
            <div className="mt-6  flex justify-between items-center ">
              <p className="font-semibold">Get Started with A-1 Swapify</p>
              <Image
                src="/dropforward.svg"
                alt=" icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "15px", height: "auto" }}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div>
            <div className="mt-6  flex justify-between items-center ">
              <p className="font-semibold">A-1 Swapify fees</p>
              <Image
                src="/dropforward.svg"
                alt=" icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "15px", height: "auto" }}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div>
            <div className="mt-6  flex justify-between items-center ">
              <p className="font-semibold">Payment methods</p>
              <Image
                src="/dropforward.svg"
                alt=" icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "15px", height: "auto" }}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div>
            <div className="mt-6  flex justify-between items-center ">
              <p className="font-semibold">Dispute Moderators</p>
              <Image
                src="/dropforward.svg"
                alt=" icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "15px", height: "auto" }}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#0A0C0F]  border-b border-b-gray-500">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-sm font-medium">
          Crypto Deposit /withdrawal
        </div>
        <div className="collapse-content">
          <p className="text-xs mx-6"> Not yet Available</p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-[#0A0C0F]  border-b border-b-gray-500">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-sm font-medium">p2p trading</div>
        <div className="collapse-content">
          <p className="text-xs mx-6"> Not yet Available</p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-[#0A0C0F]  border-b border-b-gray-500">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-sm font-medium">Message us</div>
        <div className="collapse-content">
          <p className="text-xs mx-6"> Not yet Available</p>
        </div>
      </div>
    </div>
  );
}
