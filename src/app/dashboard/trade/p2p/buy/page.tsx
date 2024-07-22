"use client";

import Button from "@/components/shared/button/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Buy() {
  const router = useRouter();

  const handleclick = () => {
    router.push("/dashboard/trade/p2p/buy/transaction-details");
  };

  return (
    <div className="mx-8 rounded-2xl p-8 space-y-8  text-sm mt-6 bg-[#0A0C0F] ">
      <h2 className="font-semibold text-base">Transaction Info.</h2>
      <div className="flex justify-between items-center px-4 py-2 rounded-lg bg-[#0025A4]">
        <p>Purchase USDT from Big Bro 101</p>
        <div className=" flex items-center gap-2 px-4 py-2 rounded-lg  text-[#14E676] border border-[#14E676]">
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
      <div
        className="px-6 py-6 rounded-lg"
        style={{
          backgroundColor: "#26304E",
        }}
      >
        <h3 className="font-semibold">How much do you want to Buy?</h3>
        <div className="flex justify-between mt-6">
          <div>
            <p className="text-[#949DB7]">I will pay</p>
            <p className="px-8 py-2 rounded-lg text-center mt-2 bg-[#1A1F30]">
              50,000 NGN
            </p>

            <div className="flex gap-4 mt-2 text-xs text-[#949DB7]">
              <p>Min : 20,750 </p>
              <p>Max: 1,000,000</p>
            </div>
          </div>
          <div>
            <p className="text-[#949DB7]">I will recieve</p>
            <p className="px-8 py-2 rounded-lg text-center mt-2 bg-[#1A1F30]">
              48.034653 USDT
            </p>
            <div className="flex gap-4 mt-2 text-xs text-[#949DB7]">
              <p>Min 20 USDT </p>
              <p>Max: 100,000 USDT</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-6 rounded-lg space-y-4 bg-[#1A1F30] text-[#949DB7]">
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
          into the escrow&apos;s digital wallet to in they&apos;ll receive
          payment to and the buyer selects the account they ill send funds to.
        </p>
        <p>
          2. when the seller is ready to start the trade, the buyer will make
          payment to the A1-Swapify&apos;s escrow account{" "}
        </p>
        <p>
          3. The buyer uploads a screenshot of the transaction, featuring the
          transaction reference number, as proof of payment.{" "}
        </p>
      </div>

      <div className="mt-6 rounded-lg p-6 space-y-6 bg-[#1A1F30]">
        <div className="border-b border-b-gray-500 flex justify-between pb-4 ">
          <p>About This Offer</p>
          <p>A-1 Swapify fee: 0%</p>
        </div>

        <p>Seller&apos;s Rate</p>
        <div className="flex gap-4 border border-gray-500 px-6 py-4 rounded-lg ">
          <p>1, 450 NGN</p>
          <p className="text-[#53D258]">2.57%</p>
        </div>
        <div className="flex justify-between">
          <div className="border border-gray-500 px-6 py-4 rounded-lg">
            <p>Trade time limit</p>
            <p className="text-center ">30 mins</p>
          </div>
          <div className="border border-gray-500 px-6 py-4 rounded-lg">
            <p>Avg Trade Speed</p>
            <p className="text-center">Instant</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="border border-gray-500 px-6 py-4 rounded-lg">
            <p className="text-center">Buy limits</p>
            <p>20,750 - 100,000 NGN</p>
          </div>
          <div className="border border-gray-500 px-6 py-4 rounded-lg bg-[#363945]">
            <p className="text-center">Offer ID</p>
            <div className="flex items-center gap-2">
              <p className="pb-1 text-[#0C8846] border-b border-[#0C8846]">
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

      <div className="p-6 rounded-lg bg-[#26304E]">
        <h3 className=" border-b border-b-gray-500 pb-4">About This Seller</h3>

        <div>
          <div className="p-6 rounded-lg mt-6 bg-[#191C25]">
            <div className="flex gap-2">
              <div className="w-10 rounded-full">
                <Image
                  src={"/profile-pix.svg"}
                  alt="profile pix"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "30px", height: "auto" }}
                />
              </div>
              <div>
                <p>Big bro 101</p>
                <p className="text-xs">Online</p>
              </div>
            </div>

            <div className="mt-6 border-b border-b-gray-500 pb-4">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/mark-good.svg"}
                    alt="mark icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20px", height: "auto" }}
                  />
                  <p>Email Verified</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={"/mark-good.svg"}
                    alt="mark icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20px", height: "auto" }}
                  />
                  <p>KYC Verified</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={"/mark-good.svg"}
                    alt="mark icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20px", height: "auto" }}
                  />
                  <p>ID Verified</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <div className="flex flex-col items-center">
                <p>162</p>
                <p>Completed orders in 30 days</p>
              </div>
              <div className="flex flex-col items-center">
                <p>90%</p>
                <p>Completion rate in 30 days</p>
              </div>
              <div className="flex flex-col items-center">
                <p>162</p>
                <p>Good rating %</p>
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <div className="flex ">
                <p className="ps-8 pe-4 border-r border-r-gray-500 text-[#14E676]">
                  Buy 99
                </p>
                <p className="ps-4 text-[#FF4133]">Sell 63</p>
              </div>

              <div className="flex gap-4">
                <div className=" flex gap-1 items-center">
                  <p>50</p>
                  <Image
                    src={"/thumpsup.svg"}
                    alt="thumpsup pix"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "15px", height: "auto" }}
                  />
                </div>
                <div className="flex items-center gap-1">
                  <p>5</p>
                  <Image
                    src={"/thumpsdown.svg"}
                    alt="thumpsdown pix"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "15px", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 rounded-lg bg-[#1A1F30]">
            <h3 className="font-semibold">Recent offer feedback (3)</h3>
            <div className="mt-6 border-b border-b-gray-500 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 rounded-full">
                  <Image
                    src={"/profile-pix.svg"}
                    alt="profile pix"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "30px", height: "auto" }}
                  />
                </div>
                <div className="flex flex-col ">
                  <div className="flex items-center gap-2">
                    <h3>INFINITY TRDER2766</h3>
                    <Image
                      src={"/naija-flag.svg"}
                      alt="flat"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "20px", height: "auto" }}
                    />
                  </div>
                  <p className="text-xs text-[#616C8F]">Not Verified</p>
                </div>
              </div>
              <p className="mt-6 ">
                Seller&apos;s response was timely, it made transaction
                fast......
              </p>
            </div>

            <div className="mt-6 border-b border-b-gray-500 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 rounded-full">
                  <Image
                    src={"/profile-pix.svg"}
                    alt="profile pix"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "30px", height: "auto" }}
                  />
                </div>
                <div className="flex flex-col ">
                  <div className="flex items-center gap-2">
                    <h3>Wesley repo</h3>
                    <Image
                      src={"/naija-flag.svg"}
                      alt="flat"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "20px", height: "auto" }}
                    />
                  </div>
                  <p className="text-xs text-[#616C8F]">Not Verified</p>
                </div>
              </div>
              <p className="mt-6">service was great,</p>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2">
                <div className="w-10 rounded-full">
                  <Image
                    src={"/profile-pix.svg"}
                    alt="profile pix"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "30px", height: "auto" }}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h3>crypto plug ng</h3>
                    <Image
                      src={"/naija-flag.svg"}
                      alt="flat"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "20px", height: "auto" }}
                    />
                  </div>
                  <p className="text-xs text-[#616C8F]">Not Verified</p>
                </div>
              </div>
              <p className="mt-6">Swift and accurate, no hassle at all</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" w-1/2">
          <Button text="Initiate Trade" onClick={handleclick} />
        </div>
      </div>
    </div>
  );
}
