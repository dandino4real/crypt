"use client";

import Button from "@/components/shared/button/button";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AssetDetails() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard/trade/p2p/sell/withdrawal");
  };
  return (
    <div className="bg-dark mx-8 mt-6 p-8 min-h-screen rounded-2xl">
      <div className="bg-light_gray rounded-lg p-6 mx-8 mt-6 text-sm">
        <div className="flex justify-between items-center mx-8">
          <h2 className="font-semibold text-base">Transaction Details</h2>
          <div
            className=" flex items-center gap-2 px-4 py-2 rounded-lg"
            style={{
              color: "#14E676",
              borderColor: "#14E676",
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          >
            <Image
              src={"/chat.svg"}
              alt="copy icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "15px", height: "auto" }}
            />

            <p>Chat with Seller</p>
          </div>
        </div>
        <div className="m-8 grid grid-cols-3 border border-gray-500 p-6 rounded-lg">
          <div className=" col-span-1 space-y-2" style={{ color: "#95ABF3" }}>
            <p>You Send :</p>
            <p>Price (NGN) :</p>

            <div className="flex items-center gap-2">
              <p>Transaction Fees </p>
              <Image
                src={"/exclamation.svg"}
                alt="help icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "15px", height: "auto" }}
              />
              <p>:</p>
            </div>
            <p>Trade ID :</p>
            <p>You Get :</p>
            <p>Order Time :</p>
          </div>
          <div className="col-span-2 space-y-2 text-sm">
            <p>48 USDT</p>
            <p>56,530.00 NGN</p>
            <p>0.46985 USDT</p>

            <div className="flex items-center gap-2">
              <p
                style={{
                  color: "#0FA958",
                }}
              >
                R3FrpWVK
              </p>
              <Image
                src={"/copy.svg"}
                alt="copy icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "15px", height: "auto" }}
              />
            </div>
            <p>25,000.00 NGN</p>
            <p>17-04-2024 11:59 pm</p>
          </div>
        </div>
      </div>



      

      <div className="bg-light_gray rounded-lg p-6 mx-8 mt-6">
        <h3 className="mx-8 font-semibold">Asset Transfer</h3>
        <div className="mx-8 mt-6 grid grid-cols-3 border border-gray-500 p-6 rounded-lg ">
          <div
            className=" col-span-1 text-sm space-y-2"
            style={{ color: "#95ABF3" }}
          >
            <p>Amount :</p>
            <p>A-1 Swapify address (USDT) :</p>
          </div>
          <div className="col-span-2 text-sm space-y-2">
            <p>48 USDT</p>
            <div>
              <p>bcdrfyti345bghfvdgrvtrvtgrhdndjedvs sbzja</p>
              <p
                style={{
                  color: "#0FA958",
                }}
              >
                Blockchain : USDT
              </p>
            </div>

            <div className="flex gap-24 pt-4">
              <div
                className="flex items-center gap-2 px-6 py-2 rounded-lg"
                style={{
                  backgroundColor: "#5275EC",
                }}
              >
                <p>Copy Address</p>
                <Image
                  src={"/copy.svg"}
                  alt="copy icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "20px", height: "auto" }}
                />
              </div>
              <Image
                src={"/barcode.svg"}
                alt="barcode icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "20px", height: "auto" }}
              />
            </div>
          </div>
        </div>
        <div
          className="flex items-center gap-2 mt-2 mx-8 "
          style={{
            color: "#949DB7",
          }}
        >
          <Image
            src={"/exclamation.svg"}
            alt="help icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "15px", height: "auto" }}
          />
          <p className="text-sm">
            You can only send fund to the wallet address above once
          </p>
        </div>
      </div>




      <div className="flex justify-center">
        <div className="w-1/3">
          <Button text="Sell 48 USDT" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
