"use client";

import DashboardCard from "@/components/dashboard/card/card";
import Button from "@/components/shared/button/button";
import Chart from "@/components/chart/chart";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const baseCoinData = {
  name: "Bitcoin",
  updated: "1 minute ago",
  change: "2.64%",
  lowest: "$12,729",
  highest: "$13,000",
  price: "$12,729",
  iconSrc: "/usdt.svg",
};

const repeatCount = 15;
const coinData = Array.from({ length: repeatCount }, () => baseCoinData);

export default function MarketPlace() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [coinExists, setCoinExists] = useState<boolean>(false);

  const [showBalance, setShowBalance] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };
  const coins = ["BTC", "ETH", "USDT"];

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query === "") {
      setSearchResults([]);
      setCoinExists(false);
      return;
    }

    const results = coins.filter((coin) =>
      coin.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
    setCoinExists(results.length > 0);
  };

  return (
    <>
      <div className="text-sm breadcrumbs mx-8 p-4 mt-4 rounded-3xl opacity-50 bg-[#616C8F]">
        <ul>
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li>Market Place</li>
        </ul>
      </div>

      <div className="bg-[#0A0C0F] mx-8 mt-8 rounded-3xl min-h-screen p-8 ">
        <div className=" bg-[#191C24] p-4 rounded-lg ">
          <div className="grid grid-cols-2  ">
            <div className=" col-span-1 flex items-center">Market Stats</div>

            <div className="col-span-1 ">
              <div className="form-control ">
                <label className="bg-[#171C2C]  input input-bordered flex items-center gap-2 rounded-full border border-gray-300  px-3 placeholder-gray-400 text-sm outline outline-0">
                  <Image
                    src={"/search-icon.svg"}
                    alt="search icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "20px", height: "auto" }}
                  />
                  <input
                    type="text"
                    className="grow "
                    placeholder="Search for coin..."
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </label>
              </div>
            </div>
          </div>

          {searchQuery && (
            <div className="mt-4 ">
              {coinExists ? (
                <div>
                  <div className="grid grid-cols-2 gap-20 text-sm mt-6">
                    <div className=" col-span-1 space-y-6">
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
                          // onClick={openModal}
                        >
                          Buy
                        </button>
                      </div>

                      <div className="  flex gap-6 ">
                        <div className="bg-[#111111] px-2 py-1 whitespace-nowrap flex items-center justify-center rounded-lg">
                          Rank #1
                        </div>
                        <div className="text-sm">On 2,366,645 Watchlist</div>
                      </div>
                    </div>
                    <div className="col-span-1 space-y-6 ">
                      <div className="flex justify-between text-xs ">
                        <div className="flex items-center gap-2">
                          <div className="bold text-sm">₦1, 264.97</div>
                          <div className="text-xs text-[#53D258]">
                            + 0.60 %{" "}
                          </div>
                          <Image
                            src={"/profit.svg"}
                            alt="profit icon"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "20px", height: "auto" }}
                          />
                        </div>
                        <div className="flex items-center gap-3  ">
                          <div className="text-sm whitespace-nowrap">
                            Add to Watchlist
                          </div>
                          <div className="form-control">
                            <label className="cursor-pointer label">
                              <input
                                type="checkbox"
                                className="toggle toggle-primary"
                                checked
                              />
                            </label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="form-control w-full  ">
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
                              <div className="text-gray-300 text-sm">
                                ₦200,795.83
                              </div>
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
              ) : (
                <div className="mt-4 text-red-500">Coin not found</div>
              )}
            </div>
          )}
        </div>

        {searchQuery && (
          <div>
            <div className="flex justify-between mx-4 pl-4 mt-10 ">
              <div className="flex gap-3 text-sm">
                <div>
                  <Link
                    href={"/"}
                    className=" px-2 py-1 rounded"
                    style={{
                      backgroundColor: "#5275EC",
                    }}
                  >
                    Price
                  </Link>
                </div>
                <div>
                  <Link
                    href={"/"}
                    className="outline outline-1 px-2 py-1 rounded"
                    style={{
                      outlineColor: "#5275EC",
                    }}
                  >
                    Market Cap
                  </Link>
                </div>

                <div>
                  <Link
                    href={"/"}
                    className="outline outline-1 px-2 py-1 rounded"
                    style={{
                      outlineColor: "#5275EC",
                    }}
                  >
                    Trade View
                  </Link>
                </div>
              </div>

              <div className="flex gap-3">
                <select
                  className="select select-bordered select-xs  max-w-xs"
                  style={{ backgroundColor: "#1A1E29", color: "#fff" }}
                >
                  <option>24Hr</option>
                  <option>12Hr</option>
                  <option>6Hr</option>
                  <option>1Hr</option>
                </select>
              </div>
            </div>
            <div className="mt-10 mx-4 pl-4 ">
              <Chart />
            </div>
            <div className="mt-6 space-y-2">
              <h2 className="font-semibold">More About USDT</h2>
              <p className="text-sm">
                Designed to be backed 1:1 by fiat (US Dollars), Tether tokens
                (USDT) are minted or destroyed as the reserves held by Tether
                company increases or falls. In this way, Tether tokens are seen
                as a unit of stable store of value
                {showMore ? (
                  <span>
                    , providing a stable alternative to the volatility of
                    traditional cryptocurrencies. Tether can be used for various
                    purposes, including trading, payments, and remittances,
                    offering a secure and reliable option for cryptocurrency
                    users.
                  </span>
                ) : (
                  "... "
                )}
                <span
                  className="text-[#5275EC] cursor-pointer"
                  onClick={toggleShowMore}
                >
                  {showMore ? " Less" : " More"}
                </span>
              </p>
            </div>
          </div>
        )}

        {!searchQuery && (
          <div className="flex justify-between items-center bg-[#191C24] p-4 mt-8 rounded-lg">
            <div>
              <Button
                text="Withdraw"
                backgroundColor="[#FF1100]"
                hoverColor="[#e66259]"
                marginTop="0"
              />
            </div>
            <div>
              <div>
                <p>Total Balance</p>
              </div>
              <div className="grid grid-cols-3 ">
                <p className=" text-gradient col-span-2">
                  {showBalance ? "₦1,038,312.24" : "•••••••••••••••"}
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
            <div>
              <Button
                text="Deposit"
                backgroundColor="[#0C8846]"
                hoverColor="[#4a926b]"
                marginTop="0"
              />
            </div>
          </div>
        )}

        <div className="overflow-x-auto rounded-lg bg-[#171C2C] mt-8">
          <table className="min-w-full divide-y divide-gray-500 ">
            <thead className="text-white ">
              <tr className="px-6 py-6 text-left text-xs font-semibold tracking-wider">
                <th className="py-2 ps-2">Coin name</th>
                <th>Updated</th>
                <th>Change</th>
                <th>24H Lowest</th>
                <th>24H Highest</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {coinData.map((coin, index) => (
                <tr key={index} className=" hover:opacity-60 px-6 text-xs">
                  <td className="whitespace-nowrap py-2">
                    <div className="flex items-center gap-3 ps-2">
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
    </>
  );
}
