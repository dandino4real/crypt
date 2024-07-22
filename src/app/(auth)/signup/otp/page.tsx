"use client";
// import Button from "@/components/shared/button/button";
import Link from "next/link";
import React, { useState, useRef } from "react";
import axios from "@/api/axiosInstance";
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import { useRouter } from "next/navigation";

export default function OtpInput() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(false);

  const router = useRouter();

  const handleChange = (enteredOtp: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = enteredOtp;
    setOtp(newOtp);

    // Move focus to the next input field if there is one
    if (enteredOtp !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    router.push("/dashboard");
    // const verificationToken = localStorage.getItem("token");
    // if (!verificationToken) {
    //   console.error("Verification token not found in local storage");
    //   return;
    // }

    // try {
    //   setIsLoading(true);

    //   const otpString = otp.join("");
    //   const response = await axios.post("api/v1/auth/verify-auth", {
    //     otp: otpString,
    //     verificationToken,
    //   });

    //   localStorage.removeItem("token");
    //   localStorage.setItem("access_token", response.data.access_token);

    //   setToast(true);
    //   setTimeout(() => {
    //     setToast(false);
    //     router.push("/dashboard");
    //   }, 3000);
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <div className="grid grid-cols-3 min-h-screen">
      <div
        className="relative bg-cover bg-center col-span-1 "
        style={{ backgroundImage: "url('/otp-bg.svg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative z-10 w-100 px-4"></div>
      </div>

      <div className=" col-span-2  flex justify-center bg-[#0E1015]">
        <div className=" w-[52%] mx-auto my-10  flex flex-col  items-center pt-0 pb-10  border-gray-500 rounded-lg  ">
          <div className=" flex items-center justify-center ">
            <Image
              src={"/A1-swapify.png"}
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100px", height: "auto" }}
            />
            <h3 className=" plus-jakarta-sans-700 text-3xl">
              A1-Swap<span className="text-success">i</span>fy
            </h3>
          </div>
          <div className="text-xl xl:text-2xl font-semibold mt-6 ps-7">
            E-mail Verification
          </div>

          <form >
            <div className=" mt-14 text-sm xl:text-md">
              Enter six(6) digit code sent to your e-mail to complete
              verification
            </div>
            <div
              className="mt-6"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <input
                  key={index}
                  type="text"
                  value={otp[index] || ""}
                  onChange={(e) => handleChange(e.target.value, index)}
                  maxLength={1}
                  ref={(input) => {
                    if (input) inputRefs.current[index] = input;
                  }}
                  // className="bg-[#26304E] text-[#F6F7FF]"
                  className="bg-[#1A1F30] text-white border border-gray-500"
                  style={{
                    width: "40px",
                    height: "40px",
                    fontSize: "24px",
                    textAlign: "center",
                    margin: "0 3px",
                    // border: "none",
                    borderRadius: "5px",
                  }}
                />
              ))}
            </div>

            <div className="text-xs xl:text-sm mt-4 text-end">
              Didn&apos;t get any code?{" "}
              <Link
                href={"/"}
                passHref
                className="font-semibold text-blue-500 hover:text-blue-700"
              >
                RESEND CODE
              </Link>
            </div>

            <div className="mt-20 flex justify-center ">
              {/* <Button
                text={
                  isLoading ? (
                    <div className="flex items-center gap-1 justify-center">
                      <span className="loading loading-spinner text-primary"></span>
                      <span className="loading loading-spinner text-secondary"></span>
                      <span className="loading loading-spinner text-accent"></span>
                    </div>
                  ) : (
                    "Continue"
                  )
                }
              /> */}

              <Button
                className="w-[80%] text-lg "
                color="success"
                variant="shadow"
                onPress={handleSubmit}
              >
                Next
              </Button>
            </div>
          </form>
          {toast && (
            <div className="toast toast-end">
              <div className="alert alert-success">
                <span>You are Successfully Login.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
