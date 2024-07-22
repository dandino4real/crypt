import Image from "next/image";
import Link from "next/link";

export default function StandardSell() {
  return (
    <div>
      <div
        className="inline-block p-4 rounded-lg"
        style={{
          backgroundColor: "#26304E",
        }}
      >
        <div className="flex  ">
          <div
            className="pl-3 pe-4 py-2 flex gap-20 rounded-lg"
            style={{
              backgroundColor: "#3F4351",
            }}
          >
            <div className="flex gap-20 px-4">
              <div
                className="flex items-center rounded-md px-3 "
                style={{
                  backgroundColor: "#292C33",
                }}
              >
                <div className="flex items-center gap-2 text-sm ">
                  <div>
                    <Image
                      src={"/bitcoin.svg"}
                      alt="alt-coin"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "48px", height: "auto" }}
                    />
                  </div>
                  <p className="text-xs">Tether</p>
                </div>
                <select
                  className="select-xs select-bordered w-full max-w-xs text-xs border"
                  style={{
                    backgroundColor: "#292C33",
                  }}
                >
                  <option>USDT</option>
                  <option>Ethereum</option>
                  <option>BTC</option>
                </select>
              </div>
            </div>

            <div>
              <span
                className="block text-xs"
                style={{
                  color: "#616C8F",
                }}
              >
                Qty: 1 USDT
              </span>
              <p className="mt-1 text-xs">Price: ₦1,281.35</p>
            </div>
          </div>
        </div>

        <div className="flex  justify-center h-10 ">
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
          <div
            className="pl-3 pe-4 py-2 flex gap-20 rounded-lg"
            style={{
              backgroundColor: "#3F4351",
            }}
          >
            <div className="flex gap-20 px-4">
              <div
                className="flex items-center rounded-md px-3 "
                style={{
                  backgroundColor: "#292C33",
                }}
              >
                <div className="flex items-center gap-2 text-sm ">
                  <div>
                    <Image
                      src={"/bitcoin.svg"}
                      alt="alt-coin"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "48px", height: "auto" }}
                    />
                  </div>
                  <p className="text-xs">Tether</p>
                </div>
                <select
                  className="select-xs select-bordered w-full max-w-xs text-xs border"
                  style={{
                    backgroundColor: "#292C33",
                  }}
                >
                  <option>USDT</option>
                  <option>Ethereum</option>
                  <option>BTC</option>
                </select>
              </div>
            </div>

            <div className="text-xs">
              <span
                className="block text-xs"
                style={{
                  color: "#616C8F",
                }}
              >
                Qty: 1 USDT
              </span>
              <p className="mt-1 text-xs">Price: ₦1,281.35</p>
            </div>
          </div>
        </div>

        <div
          className="flex items-center gap-1 mt-1"
          style={{
            color: "#95ABF3",
          }}
        >
          <div>
            <Image
              src={"/help.svg"}
              alt="help-icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "12px", height: "auto" }}
            />
          </div>
          <div>
            <p className="text-xs">
              Fixed rate is updated every 30 seconds, all fees are included in
              the transaction
            </p>
          </div>
        </div>
      </div>

      <div
        className=" mt-6 rounded-lg p-4"
        style={{
          backgroundColor: "#26304E",
        }}
      >
        <div>
          <h2 className=" font-semibold">How much do you want to Sell?</h2>
        </div>
        <div className="mt-6">
          <p className="py-2 text-sm">I will send</p>
          <input
            type="text"
            className=" w-full rounded-md px-4 py-2"
            style={{
              backgroundColor: "#1A1F30",
            }}
          />
          <div
            className="flex justify-end gap-20 text-xs pt-1"
            style={{
              color: "#95ABF3",
            }}
          >
            <p>Min 20 USDT </p>
            <p>Max: 100,000 USDT</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="py-2 text-sm">I will receive</p>
          <input
            type="text"
            className=" w-full rounded-md px-4 py-2"
            style={{
              backgroundColor: "#1A1F30",
            }}
          />
          <div
            className="flex justify-end gap-20 text-xs pt-1"
            style={{
              color: "#95ABF3",
            }}
          >
            <p>Min 20 USDT </p>
            <p>Max: 100,000 USDT</p>
          </div>
        </div>
      </div>

      <div
        className="mt-6 rounded-lg p-4"
        style={{
          backgroundColor: "#26304E",
        }}
      >
        <div className="pb-2">
          <h3 className=" font-semibold">Asset Transfer</h3>
        </div>
        <div className="grid grid-cols-5 my-4 border border-gray-400 mx-6 rounded-lg py-4 ">
          <div
            className=" col-span-2 text-sm pl-4  "
            style={{
              color: "#95ABF3",
            }}
          >
            <p className="p-2">Amount : </p>
            <p className="p-2">A-1 Swapify address (USDT) :</p>
          </div>
          <div className=" col-span-3 text-sm pe-4">
            <p className="p-2">48 USDT</p>
            <p className="p-2">bcdrfyti345bghfvdgrvtrvtgrhdndjedvssbzja </p>
            <p
              className="p-2"
              style={{
                color: "#0FA958",
              }}
            >
              Blockchain : USDT
            </p>
            <div className=" p-2 flex justify-between items-center">
              <div
                className="flex items-center gap-2 px-8 py-2 rounded-lg"
                style={{
                  backgroundColor: "#5275EC",
                }}
              >
                <p>Copy Address</p>
                <div>
                  <Image
                    src={"/copy.svg"}
                    alt="copy icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "25px", height: "auto" }}
                  />
                </div>
              </div>
              <div>
                <Image
                  src={"/barcode.svg"}
                  alt="barcode icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "25px", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex items-center gap-1 pl-6 pb-2"
          style={{
            color: "#95ABF3",
          }}
        >
          <div>
            <Image
              src={"/help.svg"}
              alt="help-icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "15px", height: "auto" }}
            />
          </div>
          <div>
            <p className="text-xs">
              You can only send fund to the wallet address above once
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <Link href={"/dashboard/trade/standard-sell/withdrawal-details"}>
          <button
            className="btn bg-primary1 hover:bg-primary-hover btn-wide mt-8 border-none text-sm"
            style={{
              color: "#DBE4FF",
            }}
          >
            Add Card
          </button>
        </Link>
      </div>
    </div>
  );
}
