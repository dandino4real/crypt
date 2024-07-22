"use client";

import react, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function SignUpPassword() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);
  const [sendCodeClicked, setSendCodeClicked] = useState(false);

 
  const handleSendCode = () => {
    setSendCodeClicked(true);
    setValid(validatePhoneNumber(phoneNumber));
  };

  
  const handleChange = (value: string) => {
    setPhoneNumber(value);
  };


  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  return (

    
    <div className="flex flex-col justify-between"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(39, 82, 231, 0.45), #1A1F30 )",
        color: "#F6F7FF",
      }}
    >
      <div className="pl-10 pe-24 flex flex-col relative">
        <div className="mt-6 font-bold text-2xl">Sign in to A-1 Swapify</div>
        <div className="text-sm mt-10">Please enter your phone number:</div>
        <div className="mt-2">
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
            <p className=" text-red-600 text-xs text-end mt-1">
              Please enter a valid phone number
            </p>
          )}
        </div>
        <button
          className="btn btn-primary btn-wide mt-8"
          onClick={handleSendCode}
          style={{
            width: "100%",
          }}
        >
          Send Code
        </button>

        <div
          className="radial-progress bg-black text-red-300 absolute top-16 right-3 w-12 h-12 p-1 "
          style={{ "--value": 25 } as any}
          role="progressbar"
        >
          <p className="text-xs text-white">1 of 4</p>
        </div>
      </div>

      <div className="text-xs text-gray-500 p-4 self-end  ">
        2024 @ A-1 swapify
      </div>
    </div>


  );
}
