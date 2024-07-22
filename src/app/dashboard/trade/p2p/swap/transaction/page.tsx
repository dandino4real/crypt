"use client";

import ButtonOutline from "@/components/shared/button/button-outline";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Transaction() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };
  return (
    <div
      className="mx-8 mt-6 p-8 text-sm rounded-2xl"
      style={{
        backgroundColor: "#0A0C0F",
      }}
    >
      <div className="flex items-center gap-10">
        <p>Coin Transfer Within : </p>

        <div className="flex items-center gap-4">
          <p
            className="px-6 py-5 rounded-lg"
            style={{
              backgroundColor: "#FF1100",
            }}
          >
            15
          </p>
          <p>:</p>
          <p
            className="px-6 py-5 rounded-lg"
            style={{
              backgroundColor: "#FF1100",
            }}
          >
            00
          </p>
        </div>
      </div>

      <div
        className="mt-6 p-6 rounded-lg"
        style={{
          backgroundColor: "#26304E",
        }}
      >
        <h2 className="px-6 font-semi-bold">Transaction Details</h2>

        <div className="grid grid-cols-3 text-sm m-6 border border-gray-500 px-6 py-4 rounded-lg ">
          <div className=" col-span-1 space-y-4 text-[#95ABF3]">
            <div>You Send : </div>
            <div className="text-[#949DB7]">Price:</div>

            <div>Transaction Fees :</div>

            <div>Trade ID :</div>
            <div>You Get :</div>
            <div>Order Time :</div>
          </div>
          <div className=" col-span-2 space-y-4">
            <div>50,000 NGN</div>
            <div
              style={{
                color: "#949DB7",
              }}
            >
              36.317677 USDT
            </div>
            <div>1,000.00 NGN</div>
            <div className="flex items-center gap-1">
              <p
                style={{
                  color: "#0C8846",
                }}
              >
                Gl0xzppcbDS
              </p>
              <div>
                <Image
                  src={"/copy.svg"}
                  alt="copy icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "20px", height: "auto" }}
                />
              </div>
            </div>
            <div>36.564803 USDT</div>
            <div>17-04-2024 11:59 pm</div>
          </div>
        </div>
      </div>

      <div className="flex justify-around  mt-6">
        <div className="w-1/3">
          <ButtonOutline
            text="Go To DashBoard"
            outlineColor="gray-500"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
