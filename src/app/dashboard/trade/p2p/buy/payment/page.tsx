"use client";

import Button from "@/components/shared/button/button";
import ButtonOutline from "@/components/shared/button/button-outline";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isTransactionModalOpen, setTransactionModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const openTransactionModal = () => setTransactionModalOpen(true);
  const closeTransactionModal = () => setTransactionModalOpen(false);

  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard/trade/p2p/buy/transaction-completed");
  };

  return (
    <div
      className="mx-8 mt-6 p-8 rounded-2xl"
      style={{
        backgroundColor: "#0A0C0F",
      }}
    >
      <div className="flex items-center gap-10">
        <p>Complete Your Payment Within : </p>

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
        className="mt-6 text-xs"
        style={{
          color: "#989898",
        }}
      >
        <p>
          {" "}
          *Please complete payment within the given time. otherwise, order will
          be automatically cancelled.
        </p>
        <p>
          *When making payment, only make use of account With Williams peter as
          account name.
        </p>
        <p>
          *Make sure to avoid using sensitive words such as “ USDT/BTC Purchase”
          when transfering fiat, otherwise transfer may fail.
        </p>
        <p>
          *Funds you securely transfer to A-1 swapify escrow account will remain
          intact until coin has been released by the seller to A1-swapify’s
          digital wallet, once both transfer have been confirmed, the exchange
          will be made.
        </p>
      </div>

      <div
        className=" p-6 mx-14 mt-6 rounded-lg"
        style={{
          backgroundColor: "#26304E",
        }}
      >
        <div className="flex justify-between items-center text-sm">
          <h2 className="font-semi-bold">Bank Transfer</h2>
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
        <div className="border border-gray-500 px-10 py-6 grid grid-cols-3 mt-6 rounded-lg text-sm">
          <div
            className=" col-span-1 space-y-2"
            style={{
              color: "#95ABF3",
            }}
          >
            <p>Amount :</p>
            <p>Bank :</p>
            <p>Account Number :</p>
          </div>
          <div className=" col-span-2 space-y-2">
            <p>50,000.00 NGN</p>
            <p>Sterling Bank</p>
            <div className="flex items-center gap-2">
              <p>8596421745</p>
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

        <div className=" flex items-center gap-2 mt-4">
          <Image
            src={"/exclamation.svg"}
            alt="help icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "15px", height: "auto" }}
          />
          <p className="text-sm">
            Transfer only 50,000 NGN within the given time frame.
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
            className="modal-box w-1/4 text-sm"
            style={{
              backgroundColor: "#181C1F",
            }}
          >
            <div className="flex items-center gap-2 justify-center">
              <Image
                src={"/bell.svg"}
                alt="bell icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "45px", height: "auto" }}
              />
              <h2 className="text-semibold">Almost Done !</h2>
            </div>
            <div className="mt-6 text-center">
              <p
                style={{
                  color: "#949DB7",
                }}
              >
                To avoid restriction on p2p Trading, please ensure payments are
                made from an account that matches your registered name of
                (Williams Peter).
              </p>
            </div>
            <Button text="Continue" onClick={openTransactionModal} />
          </div>
          <div className="modal-backdrop" onClick={closeModal}></div>
        </div>
      )}

      {isTransactionModalOpen && (
        <div className="modal modal-open">
          <div
            className="modal-box w-1/4 text-sm"
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
                You made a bank transfer attempt, we will confirm and credit
                Your Asset Wallet before the next 15 mins.
              </p>
            </div>

            <Button text="View transaction details" onClick={handleClick} />
          </div>
          <div className="modal-backdrop" onClick={closeTransactionModal}></div>
        </div>
      )}
    </div>
  );
}
