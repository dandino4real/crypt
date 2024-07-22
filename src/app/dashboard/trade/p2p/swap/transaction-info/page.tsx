"use client";

import Button from "@/components/shared/button/button";
import ButtonOutline from "@/components/shared/button/button-outline";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TransactionInfo() {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard/trade/p2p/swap/transaction-details");
  };

  return (
    <div className="mx-8 rounded-2xl p-8 space-y-8  text-sm mt-6 bg-[#0A0C0F] ">
      <h2 className="font-semibold text-base">Transaction Info.</h2>
      <div
        className="flex justify-between items-center px-4 py-2 rounded-lg"
        style={{
          backgroundColor: "#0025A4",
        }}
      >
        <p>Swap USDT with USDC from Big Bro 101</p>
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

          <p>Chat with Buyer</p>
        </div>
      </div>
      <div
        className="px-6 py-6 rounded-lg"
        style={{
          backgroundColor: "#26304E",
        }}
      >
        <h3 className="font-semibold">How much do you want to swap</h3>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between mt-6">
          <div>
            <p
              style={{
                color: "#949DB7",
              }}
            >
              I will send
            </p>
            <p
              className="px-8 py-2 rounded-lg text-center mt-2"
              style={{
                backgroundColor: "#1A1F30",
              }}
            >
              50,000 NGN
            </p>

            <div
              className="flex gap-4 mt-2 text-xs"
              style={{
                color: "#949DB7",
              }}
            >
              <p>Min : 20,750 </p>
              <p>Max: 1,000,000</p>
            </div>
          </div>
          <div>
            <p
              style={{
                color: "#949DB7",
              }}
            >
              I will recieve
            </p>
            <p
              className="px-8 py-2 rounded-lg text-center mt-2"
              style={{
                backgroundColor: "#1A1F30",
              }}
            >
              48.034653 USDT
            </p>
            <div
              className="flex gap-4 mt-2 text-xs"
              style={{
                color: "#949DB7",
              }}
            >
              <p>Min 20 USDT </p>
              <p>Max: 100,000 USDT</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="px-6 py-6 rounded-lg space-y-4"
        style={{
          backgroundColor: "#1A1F30",
          color: "#949DB7",
        }}
      >
        <div className="flex items-center gap-2">
          <p>Offer Terms</p>
          <Image
            src={"/copy.svg"}
            alt="mark icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "20px", height: "auto" }}
          />
        </div>
        <p>
          1. a trade can only start, when the seller deposits the cryptocurrency
          into the escrow’s digital wallet to in they’ll receive payment to and
          the buyer selects the account they ill send funds to.
        </p>
        <p>
          2. when the seller is ready to start the trade, the buyer will make
          payment to the A1-Swapify’s escrow account{" "}
        </p>
        <p>
          3. The buyer uploads a screenshot of the transaction, featuring the
          transaction reference number, as proof of payment.{" "}
        </p>
      </div>

      <div
        className="mt-6 rounded-lg p-6 space-y-6"
        style={{
          backgroundColor: "#1A1F30",
        }}
      >
        <div className="border-b border-b-gray-500 flex justify-between pb-4 ">
          <p>About This Offer</p>
          <p>A-1 Swapify fee: 0%</p>
        </div>

        <div>
          <p>Exchange Rate</p>
          <div className="flex justify-between items-center border border-gray-500 px-6 py-4 rounded-lg mt-2 ">
            <div className="flex gap-4 ">
              <p>1 USDT </p>
              <Image
                src={"/wave.svg"}
                alt="exchange rate icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "15px", height: "auto" }}
              />
              <p>1.00 USDC </p>
            </div>
            <div>
              <Image
                src={"/exchange.svg"}
                alt="exchange icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "15px", height: "auto" }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="border border-gray-500 px-6 py-4 rounded-lg">
            <p className="text-center">Trade time limit</p>
            <p className="text-center ">30 mins</p>
          </div>
          <div className="border border-gray-500 px-6 py-4 rounded-lg">
            <p className="text-center">Avg Trade Speed</p>
            <p className="text-center">Instant</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="border border-gray-500 px-6 py-4 rounded-lg">
            <p className="text-center">Buy limits</p>
            <p className="text-center">20,750 - 100,000 NGN</p>
          </div>
          <div
            className="border border-gray-500 px-6 py-4 rounded-lg"
            style={{
              backgroundColor: "#363945",
            }}
          >
            <p className="text-center">Offer ID</p>
            <div className="flex items-center justify-center text-center gap-2 ">
              <p
                className="pb-1"
                style={{
                  color: "#0C8846",
                  borderBottomColor: "#0C8846",
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                }}
              >
                R3FrpWVkAn
              </p>
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
        </div>
      </div>

      <div className="flex justify-center">
        <div className=" w-1/2">
          <Button text="Initiate Trade" onClick={openModal} />
        </div>
      </div>

      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box w-2/3 text-sm pb-6 bg-[#181C1F]">
            <div className="flex justify-center">
              <Image
                src={"/sand.svg"}
                alt="bell icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "165px", height: "auto" }}
              />
            </div>
            <div className="flex flex-col gap-10 items-center ">
              <h2 className="text-base text-semibold">Trade has Begun !</h2>
              <p className="text-center text-sm text-[#989898]">
                Once both parties asset transfers have been confirmed by A-1
                Swapify, Exchange will be made and transaction will be
                completed.
              </p>
            </div>

            <div className="flex justify-around ">
              <div>

              <ButtonOutline text="Chat with Buyer" outlineColor="[#14E676]"  />
              </div>
              <div>

              <ButtonOutline text="Proceed to Asset transfer" outlineColor="[#5275EC]" onClick={handleClick} />
              </div>
            </div>
          </div>
          <div className="modal-backdrop" onClick={closeModal}></div>
        </div>
      )}
    </div>
  );
}
