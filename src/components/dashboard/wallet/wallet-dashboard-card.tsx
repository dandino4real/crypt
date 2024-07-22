"use client";

import Button from "@/components/shared/button/button";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "@/api/axiosInstance";

interface WalletCardProps {
  coinName: string;
  currencySymbol: string;
  amount: number;
  profitPercent: number;
  lossPercent: number;
}

const WalletCardDashBoard: React.FC<WalletCardProps> = ({
  coinName,
  currencySymbol,
  amount,
  profitPercent,
  lossPercent,
}) => {
  return (
    <div className="mt-6 w-48">
     
        <div className="flex items-center gap-2">
          <Image
            src={"/usdt.svg"}
            alt="usdt icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "20px", height: "auto" }}
          />
          <h3 className="text-sm">{coinName}</h3>
        </div>
     
      <div className="rounded-lg p-4 mt-6 space-y-4 bg-[#171C2C]">
        <div>
          <h3 className="text-sm">{currencySymbol}</h3>
          <h3 className="text-sm">{amount.toFixed(2)}</h3>
        </div>
        <div className="flex items-center justify-between ">
          <div>
            <p className="text-sm">Profit</p>
            <p className="text-sm text-[#0FA958]">
              {profitPercent.toFixed(2)}%
            </p>
          </div>
          <div>
            <p className="text-sm">Loss</p>
            <p className="text-sm text-[#FF4133]">{lossPercent.toFixed(2)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCardDashBoard;
