"use client";

import Button from "@/components/shared/button/button";
import ButtonOutline from "@/components/shared/button/button-outline";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TransactionCompleted() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard/trade/p2p/swap/transaction");
  };
  return (
    <div className="mx-8 mt-6 p-8 text-sm rounded-2xl bg-[#0A0C0F]" >

<h3 className=" border-b border-b-gray-500 pb-2">Conversion <span className="text-[#0FA958]">  Completed</span></h3>

      <div
        className="mx-10 mt-8 p-6 rounded-lg bg-[#26304E] "
     
      >
        <div className="flex justify-between items-center px-6 ">
          <h2 className="font-semibold">Transaction Details</h2>
          <div
            className=" flex items-center gap-2 px-4 py-2 rounded-lg text-[#14E676] border border-[#14E676]"
         
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
        <div className="grid grid-cols-3 text-sm m-6 border border-gray-500 px-6 py-4 rounded-lg ">
          <div
            className=" col-span-1 space-y-4 text-[#95ABF3]"
        
          >
            <div>Amount:</div>
            <div className="text-[#949DB7]"
           
            >
              Price:
            </div>
            <div>Total Quantity :</div>
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
            <div >
            0.002 USDT
            </div>
            <div className="flex items-center gap-1 text-[#0C8846]">
              <p
             
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
            <div> </div>
            <div>36.564803 USDT </div>
            <div>17-04-2024 11:59 pm</div>
          </div>
        </div>
      </div>

      <div className="flex justify-around  mt-6" >
        <div className="w-1/3">
          <Button text="View My Assets"  onClick={handleClick} />
        </div>
        <div className="w-1/3">
          <ButtonOutline text="Appeal My Trade" outlineColor="gray-500"  />
        </div>
      </div>
    </div>
  );
}
