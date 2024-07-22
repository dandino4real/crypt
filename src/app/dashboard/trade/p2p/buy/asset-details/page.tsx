"use client";

import ButtonOutline from "@/components/shared/button/button-outline";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AssetDetails() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };
  return (
    <div className="bg-dark mx-8 mt-6 p-8 min-h-screen rounded-2xl">
      <div className="flex items-center gap-10 mx-8">
        <p className="font-semibold">
          Asset will be transferred to your wallet in :
        </p>

        <div className="flex items-center gap-4">
          <p
            className="px-6 py-5 rounded-lg"
            style={{
              backgroundColor: "#5275EC",
            }}
          >
            15
          </p>
          <p>:</p>
          <p
            className="px-6 py-5 rounded-lg"
            style={{
              backgroundColor: "#5275EC",
            }}
          >
            00
          </p>
        </div>
      </div>

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
            <p>Amount :</p>
            <p>Price :</p>
            <p>Total Quantity :</p>
            <p>Transaction Fees :</p>
            <p>Trade ID :</p>
            <p>Order Time :</p>
          </div>
          <div className="col-span-2 space-y-2 text-sm">
            <p>50,000.00 NGN</p>
            <p>1,248.00 NGN</p>
            <p>40.0627 USDT</p>
            <p>0 USDT</p>
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
            <p>17-04-2024 11:59 pm</p>
          </div>
        </div>
      </div>

      <div className="bg-light_gray rounded-lg p-6 mx-8 mt-6">
        <h3 className="mx-8 font-semibold">A-1 Swapify Payment details</h3>
        <div className="mx-8 mt-6 grid grid-cols-3 border border-gray-500 p-6 rounded-lg">
          <div
            className=" col-span-1 text-sm space-y-2"
            style={{ color: "#95ABF3" }}
          >
            <p>Amount :</p>
            <p>Bank :</p>
            <p>Account Number :</p>
          </div>
          <div className="col-span-2 text-sm space-y-2">
            <p>50,000.00 NGN</p>
            <p>Sterling Bank</p>
            <div className="flex items-center gap-2">
              <p
                style={{
                  color: "#0FA958",
                }}
              >
                8596421745
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
            Payment must be made into the A-1 Swapify’s escrow account only for
            payment to be valid
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-1/3">
          <ButtonOutline
            text="Go Back to Dashboard"
            outlineColor="gray-500"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
