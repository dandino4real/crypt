"use client";

import Button from "@/components/shared/button/button";
import InputPasswordLabel from "@/components/shared/password/password-label-input";
import TextInputLabel from "@/components/shared/password/text-label-input";
import axios from "@/api/axiosInstance";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const verificationToken = localStorage.getItem("token");
    const verificationOtp = localStorage.getItem("otp");
    if (!verificationToken || !verificationOtp) {
      console.error("Verification token not found in local storage");
      return;
    }

    try {
      setIsLoading(true);

      const response = await axios.post("api/v1/auth/create-account", {
        otp: verificationOtp,
        username,
        password,
        verificationToken,
      });
      console.log("Form submitted successfully:", response.data);

      localStorage.removeItem("otp");
      localStorage.removeItem("token");

      router.push("/account-2fa");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="w-auto px-10 flex flex-col justify-between min-h-full max-h-full rounded-tl-lg rounded-bl-lg  md:min-w-96 "
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(39, 82, 231, 0.25), #1A1F30 )",
        color: "#F6F7FF",
      }}
    >
      <div>
        <div className="mt-6">
          <h2 className=" text-xl md:text-2xl font-semibold">
            Create your account
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mt-6">
            <p className="text-sm">Fill your details below to get started</p>
          </div>

          <div className="">
            <TextInputLabel
              placeholder="Enter your user name here ..."
              backgroundColor="input-background"
              label="User Name"
              value={username}
              onChange={(newValue) => setUsername(newValue)}
            />

            <InputPasswordLabel
              backgroundColor="input-background"
              value={password}
              onChange={(newValue) => setPassword(newValue)}
            />

            <Button text={isLoading ? "Sending..." : "Continue"} />
          </div>
        </form>
      </div>

      <div className="text-xs text-gray-500 p-4 self-end ">
        2024 @ A-1 swapify
      </div>
    </div>
  );
}
