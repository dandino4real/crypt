"use client";

import Button from "@/components/shared/button/button";
import TextInput from "@/components/shared/password/text-input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Profile() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [isCompletedModalOpen, setIsCompletedModalOpen] = useState(false);
  const [isBankDetailsModalOpen, setIsBankDetailsModalOpen] = useState(false);

  const inputRefs = useRef<HTMLInputElement[]>([]);

  const openPhoneModal = () => setIsPhoneModalOpen(true);
  const closePhoneModal = () => setIsPhoneModalOpen(false);

  const openVerifyModal = () => setIsVerifyModalOpen(true);
  const closeVerifyModal = () => setIsVerifyModalOpen(false);

  const openCompltedModal = () => setIsCompletedModalOpen(true);
  const closeCompletedModal = () => setIsCompletedModalOpen(false);

  const openBankDetailsModal = () => setIsBankDetailsModalOpen(true);
  const closeBankDetailsModal = () => setIsBankDetailsModalOpen(false);

  const handleChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleOtp = (enteredOtp: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = enteredOtp;
    setOtp(newOtp);

    // Move focus to the next input field if there is one
    if (enteredOtp !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const verificationToken = localStorage.getItem("token");
    // if (!verificationToken) {
    //   console.error("Verification token not found in local storage");
    //   return;
    // }
    // Handle OTP verification logic here

    // call database

    setIsCompletedModalOpen(true);
    setIsVerifyModalOpen(false);
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const router = useRouter();

  const handleClick = () => {
    setValid(validatePhoneNumber(phoneNumber));
    if (valid) {
      // call backend
      setIsVerifyModalOpen(true);

      setIsPhoneModalOpen(false);
    }
  };

  return (
    <div className="bg-[#0A0C0F] min-h-screen mx-8 mt-8 rounded-3xl px-6 py-8">
      <div className="flex justify-center py-4">
        <div className="flex flex-col items-center">
          <Image
            src={"/profile-pix.svg"}
            alt="profile pix"
            width={0}
            height={0}
            sizes="100vw"
            className="w-20 h-auto"
          />
          <h3 className="mt-2">Williams Peter</h3>
          <p className="text-[#949DB7] mt-2 text-sm">williamspeter@gmail.com</p>
        </div>
      </div>

      <div className="space-y-8 mt-6">
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Profile</h3>
          <div className="flex gap-5 text-sm">
            <p>Verification Status :</p>
            <p className="text-[#0FA958]">Completed</p>
          </div>
        </div>

        <div className="space-y-1 lg:pe-52">
          <div className="flex justify-between items-center text-sm">
            <p>Phone Verification</p>
            <Image
              src={"/greaterthan.svg"}
              alt="open modal icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "10px", height: "auto" }}
              className="cursor-pointer"
              onClick={() => setIsPhoneModalOpen(true)}
            />
          </div>
          <h3 className="text-xs text-[#949DB7] w-3/5 md:w-full">
            Complete Phone verification to start trading on A-1 Swapify
          </h3>
        </div>

        <div className="space-y-1 lg:pe-52">
          <div className="flex justify-between items-center text-sm">
            <p>KYC Verification</p>
            <Image
              src={"/greaterthan.svg"}
              alt="open modal icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "10px", height: "auto" }}
              className="cursor-pointer"
            />
          </div>
          <h3 className="text-xs text-[#949DB7] w-3/5 md:w-2/3">
            Complete your KYC verification to unlock full access to A-1
            Swapify&apos;s features and ensure compliance with regulatory
            requirements
          </h3>
        </div>

        <div className="space-y-1 lg:pe-52">
          <div className="flex justify-between items-center text-sm">
            <p>Address Verification</p>
            <Link href={"/dashboard/profile/address"}>
              <Image
                src={"/greaterthan.svg"}
                alt="open modal icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "10px", height: "auto" }}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <h3 className="text-xs text-[#949DB7] w-3/5 md:w-2/3">
            Complete your proof of Address to become a merchant trader and start
            posting Ads for p2p trading
          </h3>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-sm">Payment Method</h3>
          <div className="flex justify-between items-center text-sm bg-[#1F273D] sm:w-1/3 py-2 px-4 rounded-lg">
            <div className="flex items-center gap-2 me-5">
              <Image
                src={"/home.svg"}
                alt="home icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "13px", height: "auto" }}
                className="cursor-pointer"
                onClick={() => setIsBankDetailsModalOpen(true)}
              />
              <p>Add Payment method</p>
            </div>
            <Image
              src={"/plus-circle.svg"}
              alt="add more icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "13px", height: "auto" }}
              className="cursor-pointer"
              onClick={() => setIsBankDetailsModalOpen(true)}
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-[#949DB7] uppercase text-xs">
          This account was created on April 15, 2024, 02:14pm
        </p>
      </div>

      {isPhoneModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box w-1/3 text-sm pb-6 bg-[#181C1F] h-96">
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-lg">
                Phone number verification
              </h3>
              <p className="text-sm mt-6">
                Please enter your phone number to continue verification
              </p>

              <div className="mt-6">
                <PhoneInput
                  country={"ng"}
                  value={phoneNumber}
                  onChange={handleChange}
                  inputStyle={{
                    color: "white",
                    backgroundColor: "rgba(82, 117, 236, 0.25)",
                  }}
                  dropdownStyle={{
                    backgroundColor: "#1A1F30",
                  }}
                  inputProps={{
                    required: true,
                  }}
                />

                {!valid && (
                  <p className="text-red-600 text-xs text-end mt-1">
                    Please enter a valid phone number
                  </p>
                )}
              </div>

              <div className="w-2/3 mt-20">
                <Button text="Continue" onClick={handleClick} />
              </div>
            </div>
          </div>
          <div
            className="modal-backdrop"
            onClick={() => setIsPhoneModalOpen(false)}
          ></div>
        </div>
      )}

      {isVerifyModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box w-1/3 text-sm pb-6 bg-[#181C1F] ">
            <div className="flex flex-col items-center">
              <h3 className="font-semibold text-lg ">OTP Verification</h3>
              <p className="text-sm mt-6">
                Enter six digit code sent to your number to verify next
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mt-6 flex justify-space-between">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      value={otp[index] || ""}
                      onChange={(e) => handleOtp(e.target.value, index)}
                      maxLength={1}
                      ref={(input) => {
                        if (input) inputRefs.current[index] = input;
                      }}
                      className="bg-[#26304E] text-[#F6F7FF]"
                      style={{
                        width: "40px",
                        height: "40px",
                        fontSize: "24px",
                        textAlign: "center",
                        margin: "0 10px",
                        border: "none",
                        borderRadius: "5px",
                      }}
                    />
                  ))}
                </div>

                <div className="text-xs mt-2 text-end ">
                  Didn&apos;t get any code?{" "}
                  <Link
                    href={"/"}
                    passHref
                    className="font-semibold text-blue-500 hover:text-blue-700"
                  >
                    RESEND CODE
                  </Link>
                </div>

                <div className="mt-8">
                  <Button text={isLoading ? "Sending..." : "Send"} />
                </div>
              </form>
            </div>
          </div>
          <div className="modal-backdrop" onClick={closeVerifyModal}></div>
        </div>
      )}

      {isCompletedModalOpen && (
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
              <h2 className="text-semibold">Phone verification completed !</h2>
              <p
                className="text-center text-sm"
                style={{
                  color: "#989898",
                }}
              >
                Your phone verification was successful and has been approved,
                you can start trading on A-1 Swapify now
              </p>
            </div>

            <Button text="Done" onClick={closeCompletedModal} />
          </div>
          <div className="modal-backdrop" onClick={closeCompletedModal}></div>
        </div>
      )}

      {isBankDetailsModalOpen && (
        <div className="modal modal-open">
          <div
            className="modal-box w-2/3 text-sm"
            style={{
              backgroundColor: "#181C1F",
            }}
          >
            <div className="flex justify-between items-center">
              <h3>Bank Details</h3>
              <Image
                src={"/close-modal.svg"}
                alt="exit icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "15px", height: "auto" }}
                className="cursor-pointer"
                onClick={closeBankDetailsModal}
              />
            </div>
            <div className="space-y-4 mt-8">
              {/* <input
                type="text"
                placeholder="Account Number"
                className="py-3 px-4 block w-full bg-[#101828] rounded-lg placeholder:text-xs"
              /> */}
              <label className="input input-bordered flex items-center gap-2 bg-[#101828] text-sm text-gray-500">
                Account Number :
                <input
                  type="text"
                  className="grow py-3 px-2 bg-[#101828] rounded-lg "
                />
              </label>

              {/* <input
                type="text"
                placeholder="Bank Name"
                className="py-3 px-4 block w-full bg-[#101828] rounded-lg placeholder:text-xs"
              /> */}

              <label className="input input-bordered flex items-center gap-2 bg-[#101828] text-sm text-gray-500">
                Bank Name :
                <input
                  type="text"
                  className="grow py-3 px-2 bg-[#101828] rounded-lg "
                />
              </label>
              {/* <input
                type="text"
                placeholder="Account Name"
                className="py-3 px-4 block w-full bg-[#101828] text-[#949DB7] rounded-lg placeholder:text-xs"
              /> */}

              <label className="input input-bordered flex items-center gap-2 bg-[#101828] text-sm text-gray-500">
                Account Name :
                <input
                  type="text"
                  className="grow py-3 px-2 bg-[#101828] rounded-lg "
                />
              </label>
            </div>

            <Button text="Done" onClick={closeBankDetailsModal} />
          </div>
          <div className="modal-backdrop" onClick={closeBankDetailsModal}></div>
        </div>
      )}
    </div>
  );
}
