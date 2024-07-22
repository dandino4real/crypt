"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Settings() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(true);
  const [isNotificationOpen, setIsNotificationOpen] = useState(true);
  const togglePrivacy = () => {
    setIsPrivacyOpen(!isPrivacyOpen);
  };
  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };
  return (
    <div className="bg-[#0E1015] mx-8 mt-8 p-8 rounded-3xl min-h-screen">
      <div className="mt-6 flex justify-between items-center ">
        <p className="font-semibold">Privacy and Security</p>
        <Image
          src="/drowdown.svg"
          alt="dropdown icon"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "20px", height: "auto" }}
          className="cursor-pointer"
          onClick={togglePrivacy}
        />
      </div>
      {isPrivacyOpen && (
        <div className="mt-6 bg-[#0A0C0F] p-4 rounded-lg text-sm">
          <div className="flex justify-between items-center">
            <p>Two-factor for login</p>
            <div className="bg-[#3E455B] px-6 py-2 rounded-lg">Enable</div>
          </div>
          <p className="text-xs mt-2 text-[#949DB7] pb-4  ">
            This is critical for securing your Asset. We highly recommend
            turning on 2FA for login and using Authy Authenticator.
          </p>
          <div className="flex justify-between items-center pt-4 border-t border-t-gray-500">
            <p>Two-factor for transactions</p>
            <div className="bg-[#3E455B] px-6 py-2 rounded-lg">Enable</div>
          </div>
          <p className="text-xs mt-2 text-[#949DB7]">
            Secure your transactions with 2FA. You will be asked to enter a
            security code to complete each transaction on A-1 Swapify.
          </p>
        </div>
      )}

      <div className="mt-6 flex justify-between items-center">
        <p className="font-semibold">Notifications</p>
        <Image
          src="/drowdown.svg"
          alt="dropdown icon"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "20px", height: "auto" }}
          className="cursor-pointer"
        
          onClick={toggleNotification}
        />
      </div>
      {isNotificationOpen && (
        <div className="mt-6 bg-[#0A0C0F] p-4 rounded-lg text-sm">
          <div className="flex justify-between items-center">
            <p>Price change alert</p>
            <input type="checkbox" className="toggle toggle-sm" checked />
          </div>
          <p className="text-xs mt-2 text-[#949DB7] pb-4  ">
          Set customized price alerts to stay informed of cryptocurrency fluctuations and make timely trading decisions
          </p>
          <div className="flex justify-between items-center pt-4 border-t border-t-gray-500">
            <p>Device login alert</p>
            <input type="checkbox" className="toggle toggle-sm" checked />
          </div>
          <p className="text-xs mt-2 text-[#949DB7] pb-4  ">
          Get notified when an attempt to log in to your account occurs on any device
          </p>
          <div className="flex justify-between items-center pt-4 border-t border-t-gray-500">
            <p>Email notification</p>
            <input type="checkbox" className="toggle toggle-sm" checked />
          </div>
          <p className="text-xs mt-2 text-[#949DB7] pb-4  ">
          Get email notification when transactions are made in your account
          </p>
          <div className="flex justify-between items-center pt-4 border-t border-t-gray-500">
            <p>Other in-app notifications</p>
            <input type="checkbox" className="toggle toggle-sm" checked />
          </div>
          <p className="text-xs mt-2 text-[#949DB7]">
          System notifications, system update
          </p>
        </div>
      )}

<div className="mt-6 bg-[#0A0C0F] py-4 rounded-lg text-sm">
    <p className="text-[#FF1100] cursor-pointer">Close Account</p>

      </div>
    </div>
  );
}
