"use client";
import Table from "@/components/dashboard/wallet/table";
import WalletCard from "@/components/dashboard/wallet/wallet-card";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, SetStateAction } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWalletData } from "@/api/action";
import { useGetAssetTotalBalance } from "@/app/hooks/useWalletData";

type Currency = "USD" | "NGN";


const formatCurrency = (amount: number | undefined, currency: string): string => {
  if (amount === undefined || amount === 0) {
    return currency === 'USD' ? '$0.00' : '₦0.00';
  }
  
  let formattedAmount;
  
  if (currency === 'USD') {
    formattedAmount = new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
  } else if (currency === 'NGN') {
    formattedAmount = `₦${new Intl.NumberFormat('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount)}`;
  } else {
    formattedAmount = new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
  }

  return formattedAmount;
};
export default function Wallet() {
  const [showBalance, setShowBalance] = useState(false);
  // const [authToken, setAuthToken] = useState<string | null>(null);
  // const [selectedTab, setSelectedTab] = useState<
  //   "Deposits" | "Withdrawal" | "Swaps"
  // >("Deposits");
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>("NGN");
  const { data: assetBalance } = useGetAssetTotalBalance();


  // useEffect(() => {
  //   const token = localStorage.getItem("access_token");
  //   setAuthToken(token);
  // }, []);

  // const { data, isError, error, isLoading } = useQuery({
  //   queryKey: ["fetchWalletData", authToken],
  //   queryFn: () => fetchWalletData(authToken),
  //   enabled: !!authToken,
  // });

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCurrency(event.target.value as Currency);
  };

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };


  



  return (
    <div>
      <div className="text-sm breadcrumbs mx-4 p-4 mt-4 rounded-3xl bg-[#616C8F] opacity-50">
        <ul>
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li>Wallet</li>
        </ul>
      </div>

      <div className="mt-6 mx-6 p-6 rounded-xl min-h-screen bg-[#0A0C0F]">
        <div className="flex flex-col gap-8 p-4 rounded-lg bg-[#191C24]">



          <div className="flex justify-between items-center">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Image
                  src={"/exclamation.svg"}
                  alt="exclamation icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "14px", height: "auto" }}
                />
                <p className="text-sm">Total Balance</p>
                <select
                  className="select-xs select-bordered  max-w-xs text-xs rounded-lg bg-[#292C33] border"
                  value={selectedCurrency}
                  onChange={handleCurrencyChange}
                >
                  <option value="NGN">NGN</option>
                  <option value="USD">USD</option>
                </select>
              </div>
              <div className="grid grid-cols-3 ">
              <p className="text-gradient col-span-2">
                {showBalance
                  ? formatCurrency(assetBalance && assetBalance[selectedCurrency], selectedCurrency)
                  : "•••••••••••••••"}
              </p>
                <div className="col-span-1 flex justify-end">
                  {showBalance ? (
                    <Image
                      src={"/eye-open.svg"}
                      alt="eye-eye-open icon"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "20px", height: "auto" }}
                      onClick={toggleBalance}
                    />
                  ) : (
                    <Image
                      src={"/eye-close.svg"}
                      alt="eye-close icon"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "20px", height: "auto" }}
                      onClick={toggleBalance}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="py-3 px-5 rounded-lg  space-y-4 bg-[#26304E]">
                <div className="flex gap-20 ">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={"/deposit.svg"}
                      alt="deposit icon"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "20px", height: "auto" }}
                    />
                    <p
                      className="text-sm"
                      style={{
                        color: "#616C8F",
                      }}
                    >
                      Total Deposit
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/downwards.svg"}
                      alt="down arrow icon"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "16px", height: "auto" }}
                    />
                    <p className="text-sm">500,000 NGN</p>
                  </div>
                </div>
                <div className="flex gap-16">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/withdrawal.svg"}
                      alt="withdrawal icon"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "18px", height: "auto" }}
                    />
                    <p
                      className="text-sm"
                      style={{
                        color: "#616C8F",
                      }}
                    >
                      Total Withdrawal
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={"/upwards.svg"}
                      alt="up arrow icon"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "16px", height: "auto" }}
                    />
                    <p className="text-sm">100,000 NGN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>





          

          <div className="flex justify-between">
            <div className="flex items-center gap-2 px-4 py-1 bg-[#26304E] rounded-lg">
              <p className="text-xs">Buy</p>
              <Image
                src={"/left-down.svg"}
                alt="left-down icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "26px", height: "auto" }}
              />
            </div>
            <div className="flex items-center gap-2 px-4 py-1 bg-[#26304E] rounded-lg">
              <p className="text-xs">Sell</p>
              <Image
                src={"/right-upwards.svg"}
                alt="up icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "26px", height: "auto" }}
              />
            </div>
            <div className="flex items-center gap-2 px-4 py-1 bg-[#26304E] rounded-lg">
              <p className="text-xs">Swap</p>
              <Image
                src={"/clockwise.svg"}
                alt="swap icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "26px", height: "auto" }}
              />
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-[#26304E] rounded-lg">
              <p className="text-xs">Send</p>
              <Image
                src={"/upwards.svg"}
                alt="up arrow icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "16px", height: "auto" }}
              />
            </div>
            <div
              className="flex items-center gap-2 px-4 py-1 rounded-lg"
              style={{
                backgroundColor: "#26304E",
              }}
            >
              <p className="text-xs">Receive</p>
              <Image
                src={"/downwards.svg"}
                alt="down arrow icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "16px", height: "auto" }}
              />
            </div>
            <div
              className="flex items-center gap-2 px-4 py-1 rounded-lg"
              style={{
                backgroundColor: "#26304E",
              }}
            >
              <p className="text-xs">Post Ad</p>
              <Image
                src={"/speaker.svg"}
                alt="post ad icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "22px", height: "auto" }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8">

          {/* <WalletCard showAction={true} showCoin={false} /> */}
        </div>

        <div className="mt-8">
          <div className="flex justify-between items-center pb-2 border-b border-b-gray-500">
            <h3 className="text-sm font-semibold">Transaction history</h3>
            <div
              className="flex items-center gap-4 px-4 py-2 rounded-lg"
              style={{
                backgroundColor: "#181C1F",
              }}
            >
              <Image
                src={"/calendar.svg"}
                alt="calendar icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "16px", height: "auto" }}
              />
              <p>Today</p>
              <Image
                src={"/filter.svg"}
                alt="filter icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "16px", height: "auto" }}
              />
            </div>
          </div>
          <Table />

          {/* 
          <div className="flex gap-6 text-sm my-6 pl-6">
            <p
              onClick={() => setSelectedTab("Deposits")}
              style={{
                color: selectedTab === "Deposits" ? "#5275EC" : "inherit",
                cursor: "pointer",
              }}
            >
              Deposits
            </p>
            <p
              onClick={() => setSelectedTab("Withdrawal")}
              style={{
                color: selectedTab === "Withdrawal" ? "#5275EC" : "inherit",
                cursor: "pointer",
              }}
            >
              Withdrawals
            </p>
            <p
              onClick={() => setSelectedTab("Swaps")}
              style={{
                color: selectedTab === "Swaps" ? "#5275EC" : "inherit",
                cursor: "pointer",
              }}
            >
              Swaps
            </p>
          </div>  */}
          {/* {selectedTab === "Deposits" && <Table />}
          {selectedTab === "Withdrawal" && <Table />}
          {selectedTab === "Swaps" && <Table />} */}
        </div>
      </div>
    </div>
  );
}
