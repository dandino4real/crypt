"use client";

import React, { useState, useEffect } from "react";

import Wrapper from "@/components/wrapper/wrapper";
import Table from "@/components/dashboard/wallet/table";
// import Image from "next/image";
import axios from "@/api/axiosInstance";
import WalletCardDashBoard from "@/components/dashboard/wallet/wallet-dashboard-card";
import WalletCard from "@/components/dashboard/wallet/wallet-card";
import { Image, Select, SelectItem } from "@nextui-org/react";
import Chart from "@/components/chart/chart";
import { useGetAssetTotalBalance } from "@/app/hooks/useWalletData";
import AssetWallet from "@/components/dashboard/asset/asset";

interface Asset {
  balance: number;
  currency: string;
  id: string;
}

interface WalletData {
  assets: Asset[];
}

const coins = [
  { key: "ETH", label: "ETH" },
  { key: "BTC", label: "BTC" },
  { key: "USDT", label: "USDT" },
  { key: "BNB", label: "BNB" },
];

const fiats = [
  { key: "NGN", label: "NGN" },
  { key: "USD", label: "USD" },
];

type Currency = "USD" | "NGN";

const formatCurrency = (
  amount: number | undefined,
  currency: string
): string => {
  if (amount === undefined || amount === 0) {
    return currency === "USD" ? "$0.00" : "₦0.00";
  }

  let formattedAmount;

  if (currency === "USD") {
    formattedAmount = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(amount);
  } else if (currency === "NGN") {
    formattedAmount = `₦${new Intl.NumberFormat("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)}`;
  } else {
    formattedAmount = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(amount);
  }

  return formattedAmount;
};
export default function Dashboard() {
  const [walletData, setWalletData] = useState<WalletData | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [showBalance, setShowBalance] = useState(false);
  const [showFull, setShowFull] = useState<boolean>(true);
  const [displayWalletCard, setDisplayWalletcard] = useState<boolean>(true);

  const [selectedCurrency, setSelectedCurrency] = useState<Currency>("NGN");
  const { data: assetBalance } = useGetAssetTotalBalance();

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCurrency(event.target.value as Currency);
  };

  const toggleShowFull = () => {
    setShowFull((prevShowFull) => !prevShowFull);
  };

  const handleShowLess = () => {
    setShowFull((prevShowFull) => !prevShowFull);
    setDisplayWalletcard((prevDisplay) => !prevDisplay);
  };

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setAuthToken(token);
  }, []);

  useEffect(() => {
    if (!authToken) return;

    const getData = async () => {
      try {
        const res = await axios.get("/api/v1/wallets", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setWalletData(res.data);
      } catch (error) {
        console.error("Error fetching wallet data:", error);
      }
    };

    getData();
  }, [authToken]);

  type Placement = "inside" | "outside" | "outside-left";

  const placements: Placement[] = ["inside", "outside", "outside-left"];

  return (
    <>
      <div className=" rounded-2xl min-h-screen ">
        <div className="bg-black min-h-screen  px-2 py-2 ">
          <div>
            <div className="flex justify-between  flex-wrap gap-4">
              <div className="relative bg-[#191c24] rounded-lg">
                <div className="absolute inset-0 bg-black opacity-30"></div>

                <div className=" relative z-10 p-4 b ">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/exclamation.svg"}
                      alt="exclamation icon"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "14px", height: "auto" }}
                    />
                    <p className="text-sm xl:text-xl lato-700 whitespace-nowrap">
                      Total Balance
                    </p>

                    <div className=" ms-6 w-24">
                      <Select
                        labelPlacement="inside"
                        placeholder="NGN"
                        size="sm"
                      >
                        {fiats.map((coin) => (
                          <SelectItem key={coin.key}>{coin.label}</SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 items-center mt-3 ">
                    <p className="text-gradient col-span-2 xl:text-3xl lato-900">
                      {showBalance
                        ? formatCurrency(
                            assetBalance && assetBalance[selectedCurrency],
                            selectedCurrency
                          )
                        : "•••••••••••"}
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
              </div>

              <div className=" flex gap-5 ">
                <div className="relative bg-[#191c24] rounded-lg">
                  <div className="absolute inset-0 bg-black opacity-30"></div>

                  <div className=" relative z-10 p-4  ">
                    <div className="flex items-center gap-2">
                      <Image
                        src={"/withdrawal.svg"}
                        alt="withdrawal icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "18px", height: "auto" }}
                      />
                      <p className="text-sm xl:text-base lato-700 whitespace-nowrap opacity-75">
                        Total Deposit
                      </p>
                    </div>
                    <div className=" mt-3 ">
                      <p className="  xl:text-lg lato-900 opacity-75 text-center">
                        {showBalance
                          ? formatCurrency(
                              assetBalance && assetBalance[selectedCurrency],
                              selectedCurrency
                            )
                          : "•••••••••••"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative bg-[#191c24] rounded-lg">
                  <div className="absolute inset-0 bg-black opacity-30"></div>

                  <div className=" relative z-10 p-4  ">
                    <div className="flex items-center gap-2">
                      <Image
                        src={"/withdrawal.svg"}
                        alt="withdrawal icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "18px", height: "auto" }}
                      />
                      <p className="text-sm xl:text-base lato-700 whitespace-nowrap opacity-75">
                        Total Withdrawal
                      </p>
                    </div>
                    <div className=" mt-3 ">
                      <p className="  xl:text-lg lato-900 opacity-75 text-center">
                        {showBalance
                          ? formatCurrency(
                              assetBalance && assetBalance[selectedCurrency],
                              selectedCurrency
                            )
                          : "•••••••••••"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-[#191c24] p-4 mt-2 rounded-lg ">
              <div className="absolute inset-0 bg-black opacity-30"></div>

              <div className=" relative z-10 flex justify-center  md:justify-between flex-wrap gap-4 text-sm">
                <div className=" flex gap-2 items-center   py-1  px-4 rounded-lg  border opacity-75  hover:opacity-100 hover:border-r-gray-600 transition duration-300 ease-out">
                  <p className="">Buy</p>

                  <Image
                    src={"/buy.svg"}
                    isBlurred
                    alt="icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "25px", height: "auto" }}
                  />
                </div>
                <div className=" flex gap-2 items-center  py-2 px-4 rounded-lg border opacity-75 hover:opacity-100 hover:border-r-gray-600 transition duration-300 ease-out">
                  <p className="">Sell</p>

                  <Image
                    src={"/sell.svg"}
                    isBlurred
                    alt="icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "25px", height: "auto" }}
                  />
                </div>
                <div className=" flex gap-2 items-center  py-2 px-4 rounded-lg border opacity-75  hover:opacity-100 hover:border-r-gray-600 transition duration-300 ease-out">
                  <p className="">Swap</p>

                  <Image
                    src={"/swap-icon.svg"}
                    isBlurred
                    alt="icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "25px", height: "auto" }}
                  />
                </div>
                <div className=" flex gap-2 items-center  py-2 px-4 border rounded-lg opacity-75  hover:opacity-100 hover:border-r-gray-600 transition duration-300 ease-out">
                  <p className="">Price Alert</p>

                  <Image
                    src={"/price-alert.svg"}
                    isBlurred
                    alt="icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "25px", height: "auto" }}
                  />
                </div>
                <div className="flex gap-2 items-center  py-2 px-4 rounded-lg border opacity-75  hover:opacity-100 hover:border-r-gray-600 transition duration-300 ease-out">
                  <p className=" ">Post Ad</p>

                  <Image
                    src={"/postAd.svg"}
                    isBlurred
                    alt="icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "25px", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            {displayWalletCard ? (
              <div className="mt-8">
                <div className=" flex justify-between xl:text-lg  ">
                  <p className=" lato-700 xl:text-xl">Assets</p>
                  <p
                    className="text-[#949DB7] me-2 cursor-pointer "
                    onClick={handleShowLess}
                  >
                    see all assets
                  </p>
                </div>
                <div className="mt-2">
                  <WalletCard />
                </div>
              </div>
            ) : (
              <div className=" grid grid-cols-3 gap-5 mt-8 ">
                <div className=" col-span-1">
                  <AssetWallet toggleDisplayWalletCard={handleShowLess} />
                </div>
                <div className=" col-span-2">
                  <Table showFull={showFull} />
                </div>
              </div>
            )}

            <div className="mt-8  ">
              <div className=" lato-700 xl:text-xl">Market update</div>
              <div className="relative bg-[#191c24]">
                <div className="absolute inset-0 bg-black opacity-30"></div>

                <div className=" relative z-10">
                  <div className="mt-2  px-4 py-2 rounded-lg ">
                    <div className=" flex justify-between mb-2  text-sm">
                      <div className=" flex items-center gap-4  ">
                        <p className="text-[#DBE4FF]">Ethereum price</p>
                        <div className=" w-32">
                          <Select
                            labelPlacement="inside"
                            size="sm"
                            placeholder="ETH"
                            startContent={
                              <Image
                                src={"/ethereum.svg"}
                                isBlurred
                                alt="icon"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "30px", height: "auto" }}
                              />
                            }
                          >
                            {coins.map((coin) => (
                              <SelectItem key={coin.key}>
                                {coin.label}
                              </SelectItem>
                            ))}
                          </Select>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-[#949DB7]">Market cap</h3>
                        <p>1,722,809,941,691,195 NGN</p>
                      </div>
                      <div>
                        <h3 className="text-[#949DB7]">24H vol</h3>
                        <p>5,094,801,920,000T NGN </p>
                      </div>
                      <div>
                        <h3 className="text-[#949DB7]">24H change</h3>
                        <p className="text-[#0FA958]">+0.08%</p>
                      </div>
                    </div>

                    <Chart />
                  </div>
                </div>
              </div>
            </div>

            {displayWalletCard && (
              <div className="mt-8">
                <div className="flex justify-between items-center mb-2">
                  <h3 className=" lato-700 xl:text-xl">Transaction history</h3>
                  <div className="flex items-center gap-4 px-4 py-2 bg-[#181C1F] rounded-lg">
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

                <div>
                  <Table showFull={showFull} />
                </div>
              </div>
            )}

            <div className="relative bg-[#191c24] py-4 rounded-lg mt-8  ">
              <div className="absolute inset-0 bg-black opacity-30"></div>

              <div className=" relative z-10 flex flex-col items-center ">
                <h3 className=" lato-700 xl:text-xl ">shortcuts</h3>

                <div className=" flex flex-col justify-center items-center w-[20%] mt-4 cursor-pointer ">
                  <div className="border p-1 inline-block bg-[#26304E] ">
                    <p className=" border inline-block p-1 rounded-full">EP</p>
                  </div>

                  <p className="lato-700 mt-2">ethereum purchase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
