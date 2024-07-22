"use client"


import Button from "@/components/shared/button/button";
import ButtonOutline from "@/components/shared/button/button-outline";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TransactionCompleted() {


    const router = useRouter()

    const handleClick = () => [
        router.push('/dashboard/trade/p2p/buy/asset-details')
    ]
  return (
    <div className="bg-dark mx-8 mt-6 p-8 rounded-2xl min-h-screen text-sm">
      <h3 className="pb-2 border-b border-b-gray-500">
        Trade R3FrpWVK{" "}
        <span
          style={{
            color: "#0FA958",
          }}
        >
          {" "}
          Completed{" "}
        </span>{" "}
      </h3>

      <div className="bg-light_gray rounded-lg p-6 mx-8 mt-6">
        <div className="flex items-center gap-2">
          <Image
            src={"/questionmark.svg"}
            alt="bell icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "15px", height: "auto" }}
          />
          <p>Buy USDT</p>
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
          <div className="col-span-2 space-y-2">
            <p>50,000.00 NGN</p>
            <p>1,248.00 NGN</p>
            <p>40.0627 USDT</p>
            <p>0 USDT</p>
            <div className="flex items-center gap-2">
              <p style={{
                color:"#0FA958"
              }}>R3FrpWVK</p>
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
      <div className="flex justify-around items-center mt-6  ">
       
        <div className="w-1/3">
          <Button text="View Assets" onClick={handleClick} />
        </div>
        <div className="w-1/3">
          <ButtonOutline text="Appeal My Order" outlineColor="gray-500" />
        </div>
      </div>
    </div>
  );
}
