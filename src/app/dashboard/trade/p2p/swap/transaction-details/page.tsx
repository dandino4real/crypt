"use client";

import Button from "@/components/shared/button/button";
import ButtonOutline from "@/components/shared/button/button-outline";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TransactionDetails() {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard/trade/p2p/swap/transaction-completed");
  };
  return (
    <div className="bg-dark mx-8 mt-6 p-8 min-h-screen rounded-3xl">
      <div className="bg-[#191C24] m-4  p-4 py-8 rounded-lg">
        <div className="mx-8 space-y-2">
          <div className="flex items-center justify-between">
            <p className="font-semibold">Swap</p>
            <Image
              src={"/exclamation.svg"}
              alt="copy icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "15px", height: "auto" }}
            />
          </div>
          <h3 className="text-[#949DB7] text-xs">
            You can only swap your coins to coins currently listed on the
            platform{" "}
          </h3>
        </div>

        <div className="bg-light_gray rounded-lg p-6 mx-8 mt-8 text-sm">
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
            <div className=" col-span-1 text-sm space-y-2 text-[#95ABF3]">
              <p>Amount :</p>
              <p>A-1 Swapify address (USDT) :</p>
            </div>
            <div className="col-span-2 text-sm space-y-2">
              <p>48 USDT</p>
              <div>
                <p>bcdrfyti345bghfvdgrvtrvtgrhdndjedvs sbzja</p>
                <p className="text-[#0FA958]">Blockchain : USDT</p>
              </div>

              <div className="flex gap-24 pt-4">
                <div className="flex items-center gap-2 px-6 py-2 rounded-lg bg-[#5275EC]">
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
          <div className="flex items-center gap-2 mt-2 mx-8 text-[#949DB7]  ">
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
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="w-1/3">
          <Button text="I Have Paid" onClick={openModal} />
        </div>
        <div className="w-1/3">
          <ButtonOutline text="Cancel Trade" />
        </div>
      </div>
      {isModalOpen && (
        <div className="modal modal-open">
          <div
            className="modal-box w-1/4 text-sm pb-8"
            style={{
              backgroundColor: "#181C1F",
            }}
          >
            <div className="flex justify-center">
              <Image
                src={"/markwithstar.svg"}
                alt="bell icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "65px", height: "auto" }}
              />
            </div>
            <div className="flex flex-col gap-10 items-center mt-8">
              <h2 className="text-semibold">Fiat Transferred !</h2>
              <p
                className="text-center text-sm"
                style={{
                  color: "#989898",
                }}
              >
                You made USDT coin transfer attempt, we will confirm and credit
                Your Fiat account before the next 15 mins.
              </p>
            </div>

            <ButtonOutline text="View transaction details" outlineColor="[#5275EC]" onClick={handleClick} />
          </div>
          <div className="modal-backdrop" onClick={closeModal}></div>
        </div>
      )}

    </div>
  );
}
