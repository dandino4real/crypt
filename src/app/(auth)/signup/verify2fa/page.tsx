"use client";
import Link from "next/link";
import react, { useState } from "react";

export default function Verify2FaCode() {
  const [otp, setOtp] = useState("");

  const handleChange = (enteredOtp: string, index: number) => {
    const newOtp: string[] = otp.split("");
    newOtp[index] = enteredOtp;
    setOtp(newOtp.join(""));
  };

  return (
    <div
      className="px-6 flex flex-col  items-center"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(39, 82, 231, 0.45), #1A1F30 )",
        color: "#F6F7FF",
      }}
    >
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Enter 2FA Code</h2>
      </div>
      <div className="mt-8 text-sm">
        <p>Then enter the 4 digit code to continue</p>
      </div>
      <div
        className="mt-6 text-xs"
        style={{
          color: "#989898",
        }}
      >
        <p>please enter the 4 -digit OTP code we&apos;ve sent to your phone</p>
      </div>

      <div
        className=" mt-8"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <input
            key={index}
            type="text"
            value={otp[index] || ""}
            onChange={(e) => {
              handleChange(e.target.value, index);
            }}
            maxLength={1}
            style={{
              width: "40px",
              height: "40px",
              fontSize: "24px",
              textAlign: "center",
              backgroundColor: "#ddd",
              margin: "0 3px",
              border: "none",
              borderRadius: "5px",
              color: "black",
            }}
          />
        ))}
      </div>

      <div className="mt-8">
        <Link href={"/dashboard"}>
          <button
            className="btn bg-primary1 hover:bg-primary-hover btn-wide mt-8"
            style={{
              color: "#DBE4FF",
            }}
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}
