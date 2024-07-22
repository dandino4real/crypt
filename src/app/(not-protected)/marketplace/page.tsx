"use client";

import MarketWallet from "@/components/home/market-wallet/page";

import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const handleClick = () => {
    router.push("/market-stat");
  };
  return (
    <>
      <h3 className="text-lg font-semibold mt-8">
        Cryptocurrency Prices by Market Cap
      </h3>
      <p className="mt-6 text-sm">
        Make informed decisions with up-to-the-minute data. Whether you&apos;re a
        seasoned investor or just getting started, our comprehensive market cap
        rankings provide valuable insights into the dynamic world of digital
        assets. Start exploring now !
      </p>
      <div className="carousel carousel-center w-full  space-x-10 rounded-box mt-8 ">
        <div className=" carousel-item">
          <MarketWallet />
        </div>

        <div className=" carousel-item">
          <MarketWallet />
        </div>

        <div className=" carousel-item">
          <MarketWallet />
        </div>

        <div className=" carousel-item">
          <MarketWallet />
        </div>

        <div className=" carousel-item">
          <MarketWallet />
        </div>
      </div>
      <div className="flex justify-end mt-10 ">
        <div className=" w-1/2 ">
          <label className="input input-bordered flex items-center gap-2 rounded-full border  border-gray-500   py-1 px-3 placeholder-gray-400 text-sm bg-[#171C2C] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-40"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>

            <input
              type="text"
              className="grow"
              placeholder="Search for coin..."
            />
          </label>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg bg-[#171C2C] mt-8">
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
                onClick={handleClick}
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


      
    </>
  );
}
