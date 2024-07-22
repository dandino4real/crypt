"use client";

import Button from "@/components/shared/button/button";
import react, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CardDetails() {
  const [AccountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/dashboard/trade/standard-sell/transaction-details");
  };
  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit}>
        <div
          className="p-8 mx-8 rounded-2xl"
          style={{ backgroundColor: "#0A0C0F" }}
        >
          <div
            className=" p-8 rounded-2xl"
            style={{
              backgroundColor: "#26304E",
            }}
          >
            <h2 className=" text-semibold">Withdrawal Details</h2>
            <p className="my-6 text-sm">Withdraw to</p>

            <div
              className="mx-10 p-6 rounded-xl flex flex-col gap-2 "
              style={{ backgroundColor: "#0A0C0F" }}
            >
              <div className="flex justify-between items-baseline mb-8 ">
                <p className="text-sm">Credit card or debit card</p>

                <Image
                  src={"/visa.svg"}
                  alt="visa_card"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "75px", height: "auto" }}
                />
              </div>
              <input
                type="text"
                value={AccountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                placeholder="Account Number"
                required
                className=" bg-input-background opacity-25 text-white block w-full rounded-md border-0 py-1.5 pl-2 pr-5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-100  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-sm"
              />
              <input
                type="text"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                placeholder="Bank Name"
                required
                className=" bg-input-background opacity-25 text-white block w-full rounded-md border-0 py-1.5 pl-2 pr-5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-100  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-sm"
              />
              {/* <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Card Number"
                required
                className=" bg-input-background opacity-25 text-white block w-full rounded-md border-0 py-1.5 pl-2 pr-5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-100  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-sm"
              /> */}
              {/* 
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                required
                className=" bg-input-background opacity-25 text-white block w-full rounded-md border-0 py-1.5 pl-2 pr-5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-100  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-sm"
              /> */}

              {/* <input
                type="text"
                value={cardOwnerName}
                onChange={(e) => setCardOwnerName(e.target.value)}
                placeholder="Enter card owner name"
                required
                className=" bg-input-background opacity-25 text-white block w-full rounded-md border-0 py-1.5 pl-2 pr-5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-100  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-sm"
              /> */}
            </div>
            <div className="flex justify-between items-center mt-6 text-sm">
              <div>Your Order</div>
              <div>
                <p>25,000.00 NGN for 48 USDT </p>
                <div
                  className="flex gap-1 text-xs"
                  style={{
                    color: "#95ABF3",
                  }}
                >
                  <p>All fees Included </p>
                  <div className="flex justify-center gap-1">
                    <Image
                      src={"/clock.svg"}
                      alt="visa_card"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "12px", height: "auto" }}
                    />
                    <p className=" ">Updated every 4 sec</p>
                  </div>
                </div>
              </div>
            </div>
            <div></div>

            <div className="flex justify-center">
              <div className=" w-1/2 ">
                <Button text="Continue" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
