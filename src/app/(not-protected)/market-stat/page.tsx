"use client";

import Chart from "@/components/chart/chart";
import DashboardCard from "@/components/dashboard/card/card";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import axios from "@/api/axiosInstance";

const baseCoinData = {
  name: "Bitcoin",
  updated: "1 minute ago",
  change: "2.64%",
  lowest: "$12,729",
  highest: "$13,000",
  price: "$12,729",
  iconSrc: "/usdt.svg",
};

const repeatCount = 25;
const coinData = Array.from({ length: repeatCount }, () => baseCoinData);

export default function Market() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleGoogleSignUp = async () => {
    try {
      const response = await axios.get("api/v1/auth/google");
      const { url } = response.data;
      window.location.href = url;
    } catch (error) {
      console.error("Error fetching Google OAuth URL:", error);
    }
  };
  return (
    <>
      <div className=" pt-8 pl-8 pe-12 ">
        <div className="p-6 rounded-2xl bg-[#1A1F30]">
          <div className="font-semibold">Market Stats</div>



          <div className="grid grid-cols-3 gap-20 text-sm mt-6">
            <div className=" col-span-2 space-y-6">
              <div className="flex items-center gap-6">
                <div className="flex gap-2 items-center ">
                  <Image
                    src={"/usdt.svg"}
                    alt="alt coin"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20px", height: "auto" }}
                  />

                  <p>Tether</p>
                </div>

                <button
                  className=" bg-[#0C8846] hover:opacity-75 px-4 py-1 rounded-lg transition-opacity duration-300"
                  onClick={openModal}
                >
                  Buy
                </button>
              </div>

              <div className="  flex gap-6 ">
                <div className="bg-[#111111] px-4 py-0 whitespace-nowrap flex items-center justify-center rounded-lg">
                  Rank #1
                </div>
                <div className="text-sm">
                  On 2,366,645 Watchlist across our platform, it offers
                  reliability and peace of mind for your digital transactions.
                  Explore the power of USDT on our platform today.
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-6">
              <div className="flex items-center gap-3 text-xs ">
                <div className="bold text-sm">₦1, 264.97</div>
                <div className="flex items-center gap-2">
                  <div className="text-xs text-[#53D258]">+ 0.60 % </div>
                  <Image
                    src={"/profit.svg"}
                    alt="profit icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20px", height: "auto" }}
                  />
                </div>
              </div>
              <div>
                <label className="form-control w-full max-w-xs ">
                  <div className="label pt-0">
                    <span className="label-text text-gray-300 text-xs ">
                      High / Low Price
                    </span>
                    <span className="label-text-alt text-sm">
                      <select
                        className="select select-bordered select-xs  max-w-xs"
                        style={{
                          backgroundColor: "#1A1E29",
                          color: "#fff",
                        }}
                      >
                        <option>24Hr</option>
                        <option>12Hr</option>
                        <option>6Hr</option>
                        <option>1Hr</option>
                      </select>
                    </span>
                  </div>

                  <progress
                    className="progress progress-error  bg-white"
                    value="70"
                    max="100"
                  ></progress>

                  <div className="label text-xs">
                    <span className="label-text-alt flex gap-3">
                      <div className="text-gray-300 text-sm">Low:</div>
                      <div className="text-gray-300 text-sm">₦200,795.83</div>
                    </span>
                    <span className="label-text-alt text-gray-300 text-sm">
                      High : ₦92,380.312
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>




          <div className="flex justify-center gap-4 mt-10">
            <div className="grow">
              <DashboardCard
                icon="/marketcap.svg"
                title="Market Cap"
                value="₦1, 858, 294,393"
                percentageChange="+ 0.60 %"
                percentageIcon="/profit.svg"
              />
            </div>
            <div className="grow">
              <DashboardCard
                icon="/exclamation-white.svg"
                title="Circulating supply"
                value="₦18,958,437.00 BTC"
                maxValue="Max 21,000000"
              />
            </div>
            <div className="grow">
              <DashboardCard
                icon="/halfclock.svg"
                title="24 Hr Volume"
                value="₦858, 294,393,036,424"
                percentageChange="+ 0.60 %"
                percentageIcon="/profit.svg"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 mt-10 gap-8  ">
          <div className=" col-span-2 bg-[#1A1F30] p-4 rounded-lg">
            <Chart />
          </div>
          <div className="col-span-1 text-xs opacity-85 bg-[#1A1F30] p-4 rounded-lg">
            <h3 className=" font-semibold text-sm">More info about USDT</h3>
            <p className="mt-4">
              Designed to be backed 1:1 by fiat (US Dollars), Tether tokens
              (USDT) are minted or destroyed as the reserves held by Tether
              company increases or falls. In this way Tether tokens are seen as
              a unit of stable store of value. It is the most popular and liquid
              stablecoin in the cryptocurrency ecosystem.
            </p>
            <p className="mt-4 text-sm">Interesting Market Fact on USDT </p>

            <ul className="mt-2 list-disc list-outside ">
              <li>Ranked No.3</li>
              <li>4.72% Market Dominance</li>
              <li>It has it issue date on 26/11/2014</li>
              <li>It had it all time high on the 25/02/2015 at 1.2154 USD</li>
              <li>it had it all time low on the 02/03/2015 at 0.5683 USD</li>
              <li>Total supply circulation is 113.09B USDT</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10 mt-8">
          <div className=" col-span-2 bg-[#171C2C]  ">
            <div className="overflow-x-auto rounded-lg  ">
              <table className="min-w-full divide-y divide-gray-500">
                <thead className="text-white">
                  <tr className="px-6 py-3 text-left text-xs font-semibold tracking-wider">
                    <th className="pb-2">Coin name</th>
                    <th>Updated</th>
                    <th>Change</th>
                    <th>24H Lowest</th>
                    <th>24H Highest</th>
                    <th>Price</th>
                  </tr>
                </thead>

                <tbody>
                  {coinData.map((coin, index) => (
                    <tr
                      key={index}
                      className="cursor-pointer hover:opacity-60 px-6 text-xs"
                      //   onClick={handleClick}
                    >
                      <td className="whitespace-nowrap py-2">
                        <div className="flex items-center gap-3">
                          <div>
                            <div className="mask mask-squircle">
                              <Image
                                src={coin.iconSrc}
                                alt={`${coin.name} icon`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "20px", height: "auto" }}
                              />
                            </div>
                          </div>
                          <div className="text-xs">
                            <div>{coin.name}</div>
                          </div>
                        </div>
                      </td>
                      <td>{coin.updated}</td>
                      <td>{coin.change}</td>
                      <td>{coin.lowest}</td>
                      <td>{coin.highest}</td>
                      <td>{coin.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className=" col-span-1 space-y-10 text-xs   ">
            <div className="bg-[#1A1F30] p-4 rounded-lg">
              <h3 className="text-sm">Hot coins today</h3>
              <div className="space-y-4 mt-4 ">
                <div className="flex items-center gap-10 ">
                  <Image
                    src={"/usdt.svg"}
                    alt="usdt icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20px", height: "auto" }}
                  />
                  <div>
                    <p>91,038,312.24</p>
                    <div className="flex items-center gap-2">
                      <p>+ 0.60 %</p>
                      <Image
                        src={"/profit.svg"}
                        alt="profit icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "20px", height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-10 ">
                  <Image
                    src={"/usdt.svg"}
                    alt="usdt icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20px", height: "auto" }}
                  />
                  <div>
                    <p>91,038,312.24</p>
                    <div className="flex items-center gap-2">
                      <p>+ 0.60 %</p>
                      <Image
                        src={"/profit.svg"}
                        alt="profit icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "20px", height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-10 ">
                  <Image
                    src={"/usdt.svg"}
                    alt="usdt icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20px", height: "auto" }}
                  />
                  <div>
                    <p>91,038,312.24</p>
                    <div className="flex items-center gap-2">
                      <p>+ 0.60 %</p>
                      <Image
                        src={"/profit.svg"}
                        alt="profit icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "20px", height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-10 ">
                  <Image
                    src={"/usdt.svg"}
                    alt="usdt icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20px", height: "auto" }}
                  />
                  <div>
                    <p>91,038,312.24</p>
                    <div className="flex items-center gap-2">
                      <p>+ 0.60 %</p>
                      <Image
                        src={"/profit.svg"}
                        alt="profit icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "20px", height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xs bg-[#1A1F30] p-4 rounded-lg">
              <h3 className="text-sm font-semibold">New Cryptocoins</h3>
              <div className="space-y-4 mt-4 ">
                <div className="flex items-center gap-10 ">
                  <Image
                    src={"/usdt.svg"}
                    alt="usdt icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20px", height: "auto" }}
                  />
                  <div>
                    <p>Litecoin</p>

                    <p className="text-[#949DB7]">Added 2 days ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-10 ">
                  <Image
                    src={"/usdt.svg"}
                    alt="usdt icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20px", height: "auto" }}
                  />
                  <div>
                    <p>Litecoin</p>

                    <p className="text-[#949DB7]">Added 2 days ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-10 ">
                  <Image
                    src={"/usdt.svg"}
                    alt="usdt icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20px", height: "auto" }}
                  />
                  <div>
                    <p>Litecoin</p>

                    <p className="text-[#949DB7]">Added 2 days ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-10 ">
                  <Image
                    src={"/usdt.svg"}
                    alt="usdt icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20px", height: "auto" }}
                  />
                  <div>
                    <p>Litecoin</p>

                    <p className="text-[#949DB7]">Added 2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box w-1/2 h-[80vh] text-sm bg-[#181C1F] flex flex-col justify-around items-center">
            <div className="h-4/5 ">
              <h2 className="text-2xl font-semibold text-center">
                Join A-1 Swapify{" "}
              </h2>
              <div className="flex flex-col gap-4 pt-16 md:text-sm ">
                <button
                  className="btn text-xs btn-outline hover:bg-blue-600 flex items-center text-[#F6F7FF]"
                  onClick={handleGoogleSignUp}
                >
                  <Image
                    src="/Google.svg"
                    alt="Google logo"
                    width={15}
                    height={15}
                  />
                  <p className="whitespace-nowrap ml-2">Sign up with Google</p>
                </button>
                <Link
                  href="/signup/email"
                  className="btn text-xs btn-outline btn-error hover:bg-blue-600 flex items-center"
                  style={{
                    color: "#F6F7FF",
                  }}
                >
                  <p className="whitespace-nowrap">Sign up with your email</p>
                </Link>
              </div>
              <p className="mt-6 text-sm">
                Already have an account ?
                <span className="text-[#7592F0]">
                  <Link href={"/signin"}> Log in here !</Link>{" "}
                </span>
              </p>
            </div>

            <p className="text-center text-xs">
              Click “Sign up” to agree to A-1 Swapify&apos;s{" "}
              <span className="text-[#5275EC]">Terms of Service </span> and
              acknowledge that A-1 Swapify&apos;s{" "}
              <span className="text-[#5275EC]">Privacy Policy</span> applies to
              you.
            </p>
          </div>
          <div className="modal-backdrop" onClick={closeModal}></div>
        </div>
      )}
    </>
  );
}
