import SwapsCard from "@/components/shared/swap_card";
import Image from "next/image";

export default function SwapP2P() {
  return (
    <div className="bg-[#0A0C0F] rounded-3xl ">
      <div>
        <div className="flex">
          <div className="pl-3 pe-4 p-2 flex flex-col items-end rounded-lg bg-[#3F4351]">
            <div className="flex gap-10">
              <div className="flex items-center rounded-md px-3  bg-[#292C33]">
                <div className="flex items-center gap-2 text-sm ">
                  <div>
                    <Image
                      src={"/bitcoin.svg"}
                      alt="alt-coin"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "72px", height: "auto" }}
                    />
                  </div>
                  <p className="text-xs">Tether</p>
                </div>
                <select className="select-xs select-bordered w-full max-w-xs text-xs bg-[#292C33]">
                  <option>USDT</option>
                  <option>ETH</option>
                  <option>BTC</option>
                </select>
              </div>

              <div className="w-2/3 ">
                <input
                  type="number"
                  placeholder="Type Amount here"
                  className="bg-[#1A1F30] text-[#616C8F] rounded-md px-4 py-2 text-xs w-full"
                />
              </div>
            </div>

            <div className="flex gap-8 text-xs mt-1 text-[#95ABF3]">
              <p>Min 20 USDT</p>
              <p>Max: 100,000 USDT</p>
            </div>
          </div>
        </div>

        <div className="flex w-1/2 justify-center  h-10">
          <Image
            src={"/swap.svg"}
            alt="swap-icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "50px" }}
          />
        </div>

        <div className="flex ">
          <div className="pl-3 pe-4 py-2 flex flex-col items-end rounded-lg bg-[#3F4351]">
            <div className="flex gap-10">
              <div className="flex items-center rounded-md px-3  bg-[#292C33]">
                <div className="flex items-center gap-2 text-sm ">
                  <div>
                    <Image
                      src={"/bitcoin.svg"}
                      alt="alt-coin"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "72px", height: "auto" }}
                    />
                  </div>
                  <p className="text-xs">Tether</p>
                </div>
                <select className="select-xs select-bordered w-full max-w-xs text-xs bg-[#292C33]">
                  <option>USDT</option>
                  <option>ETH</option>
                  <option>BTC</option>
                </select>
              </div>

              <div className="w-2/3 ">
                <input
                  type="number"
                  placeholder="Type Amount here"
                  className="bg-[#1A1F30] text-[#616C8F] rounded-md px-4 py-2 text-xs w-full"
                />
              </div>
            </div>

            <div className="flex gap-8 text-xs mt-1 text-[#95ABF3]">
              <p>Min 20 USDT</p>
              <p>Max: 100,000 USDT</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#191C24] p-4 mt-8 rounded-2xl">
        <h3 className="px-6">Offer List</h3>
        <div>
          <SwapsCard
            username="Crypto lord 101"
            online="Seen 2 hours  ago"
            verified={false}
          />
          <SwapsCard
            username="Big Bro 101"
            online="Seen 2 hours  ago"
            verified={true}
          />
          <SwapsCard
            username="Crypto lord 101"
            online="online"
            verified={true}
          />
          <SwapsCard
            username="Crypto lord 101"
            online="Seen 2 hours  ago"
            verified={true}
          />
        </div>
      </div>
    </div>
  );
}
