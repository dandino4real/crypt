"use client";

import Button from "@/components/shared/button/button";
import react, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ButtonOutline from "@/components/shared/button/button-outline";

export default function CardDetails() {
  const [AccountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [AccountName, setAccountName] = useState("");

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const router = useRouter();

  const handleClick = () => {
    //perform some actions
    router.push("/dashboard/trade/p2p/sell/withdrawal-details");
  };
  return (
    <div
      className="mt-6 mx-8 pb-6 px-8 rounded-2xl"
      style={{ backgroundColor: "#0A0C0F" }}
    >
      <div className="p-8  rounded-2xl">
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
              <div className="flex items-center gap-2">
                <Image
                  src={"/circle.svg"}
                  alt="circle "
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "25px", height: "auto" }}
                />

                <p className="text-sm">Credit card or debit card</p>
              </div>

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
            <input
              type="text"
              value={AccountName}
              onChange={(e) => setAccountName(e.target.value)}
              placeholder="Account Name"
              required
              className=" bg-input-background opacity-25 text-white block w-full rounded-md border-0 py-1.5 pl-2 pr-5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-100  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-sm"
            />
          </div>
          <div className="flex justify-between items-center mt-6 text-sm">
            <div>Your Trade</div>
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
          <Button text="I Have Paid" onClick={openModal} />
          <ButtonOutline text="Cancel Trade" outlineColor="gray-500" />
        </div>
      </div>

      {isModalOpen && (
        <div className="modal modal-open">
          <div
            className="modal-box w-1/4 text-sm pb-6"
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

            <Button text="View transaction details" onClick={handleClick} />
          </div>
          <div className="modal-backdrop" onClick={closeModal}></div>
        </div>
      )}

      
    </div>
  );
}
