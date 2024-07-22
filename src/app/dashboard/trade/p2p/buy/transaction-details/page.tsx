"use client"

import Button from "@/components/shared/button/button";
import ButtonOutline from "@/components/shared/button/button-outline";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function TransactionDetails() {


  const router = useRouter()

  const handleClick = () => {
    router.push('/dashboard/trade/p2p/buy/payment')
    
  
  };
  return (
    <div
      className="mx-8 mt-6 p-8 text-sm rounded-2xl"
      style={{
        backgroundColor: "#0A0C0F",
      }}
    >
      <div className="flex gap-10">
        <div className="flex items-center gap-2">
          <Image
            src={"/exclamation.svg"}
            alt="thumpsdown pix"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "15px", height: "auto" }}
          />
          <p>Fiat will be transferred within : </p>
        </div>
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

      <p
        className="mt-6"
        style={{
          color: "#989898",
        }}
      >
        Please complete payment within the stipulated timeframe in order for
        purchase to be successful.
      </p>

      <div
        className="mt-6 p-6 rounded-lg"
        style={{
          backgroundColor: "#26304E",
        }}
      >
        <div className="flex justify-between items-center">
          <h2 className="font-semi-bold">Transaction Details</h2>
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
        <div className="grid grid-cols-3 text-sm m-6 border border-gray-500 px-6 py-4 rounded-lg ">
          <div
            className=" col-span-1 space-y-4"
            style={{
              color: "#95ABF3",
            }}
          >
            <div>Amount:</div>
            <div
              style={{
                color: "#949DB7",
              }}
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

      <div
        className="mt-6 p-6 opacity-50 rounded-lg relative"
        style={{
          backgroundColor: "#0116D4",
        }}
      >
        <div className="flex items-center gap-2">
          <Image
            src={"/mark-good.svg"}
            alt="mark icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "15px", height: "auto" }}
          />
          <p>
            The assets of the seller have been Protected. you can make the
            transfer only to the bank details provided in the payment link with
            confidence
          </p>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Image
            src={"/mark-good.svg"}
            alt="mark icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "15px", height: "auto" }}
          />

          <p >
            The seller has passed the identity, e-mail and mobile number
            verifications.
          </p>
        </div>
        <div className="absolute bottom-2 right-4 ">
          <div className="relative">

        <Image
            src={"/verify.svg"}
            alt="mark icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100px", height: "auto" }}
          />
          <div className="absolute top-6 right-8">
          <Image
            src={"/mark-good.svg"}
            alt="mark icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "25px", height: "auto" }}
          />

          </div>
          </div>
        
        </div>
      </div>
      <div className="flex justify-around ">
        <div className="w-1/3">
          <ButtonOutline text="Cancel Order" outlineColor="gray-500" />
        </div>
        <div className="w-1/3">
          <Button text="Get Payment Details" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
