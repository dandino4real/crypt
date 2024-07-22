import Image from "next/image";
import Link from "next/link";

export default function StandardBuy() {
  return (
    <div>
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

          <div >
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
            Fixed rate is updated every 30 seconds, all fees are included in the
            transaction
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div
          className=" px-4 py-4 rounded-lg"
          style={{
            backgroundColor: "#26304E",
          }}
        >
          <div>
            <h3 className=" font-semibold">Trade Details</h3>
          </div>
          <div className="mt-6 flex gap-20">
            <div>
              <p
                className="text-sm"
                style={{
                  color: "#949DB7",
                }}
              >
                From
              </p>
              <p
                className="mt-2 px-20 py-2 rounded-lg text-sm"
                style={{
                  backgroundColor: "#1A1F30",
                }}
              >
                48 USDT
              </p>
            </div>
            <div>
              <p
                className="text-sm"
                style={{
                  color: "#949DB7",
                }}
              >
                I will recieve
              </p>
              <p
                className="mt-2 px-20 py-2 rounded-lg text-sm"
                style={{
                  backgroundColor: "#1A1F30",
                }}
              >
                {" "}
                48.034653 USDC
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-10">
        <div className="form-control">
          <label className="flex flex-col cursor-pointer">
            <div
              className="label-text mb-3 text-sm "
              style={{
                color: "#949DB7",
              }}
            >
              Payment Method
            </div>
            <div className="flex items-center gap-10">
              {/* <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-red-500"
                checked
                style={{
                  borderColor: "#949DB7",
                }}
              /> */}
              <div className="flex gap-5 items-center">
                <Image
                  src={"/gpay.svg"}
                  alt="gpay_card"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "75px", height: "auto" }}
                />
                <Image
                  src={"/apple-card.svg"}
                  alt="apple_card"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "95px", height: "auto" }}
                />
                <Image
                  src={"/visa.svg"}
                  alt="visa_card"
                  width={115}
                  height={43}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </label>
        </div>
        <div className="mt-6 form-control">
          <label className="flex flex-col cursor-pointer">
            <div
              className="label-text mb-3 text-sm"
              style={{
                color: "#949DB7",
              }}
            >
              Coin deposit option
            </div>
            <div className="flex items-center gap-10">
              {/* <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
                checked
                style={{
                  borderColor: "#949DB7",
                }}
              /> */}
              <div>
                <Image
                  src={"/moonpay.svg"}
                  alt="visa_card"
                  width={115}
                  height={43}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
                
              </div>
            </div>
          </label>
        </div>
      </div>

      <div
        className="mt-10 rounded-lg px-4 py-6"
        style={{
          backgroundColor: "#26304E",
        }}
      >
        <div>
          <h3 className="font-semibold">Destination Wallet Address</h3>
        </div>
        <div className="mt-4">
          <p
            className="text-sm"
            style={{
              color: "#949DB7",
            }}
          >
            Recipient Wallet Address
          </p>
        </div>
        <div
          className="flex justify-between items-center py-2 px-4 mt-2 rounded-lg text-xs"
          style={{
            backgroundColor: "#1A1F30",
          }}
        >
          <p>1SGscd45SHHsvaWQHsssA2YU</p>
          <div>
            <Image
              src={"/barcode.svg"}
              alt="barcode"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "24px", height: "auto" }}
            />
          </div>
        </div>
        <div
          className="flex items-center gap-1 mt-4 opacity-45 p-2"
          style={{
            color: "#95ABF3",
            backgroundColor: "#5275EC",
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
            <p
              className="text-xs text-white"
              
            >
              For your own safety, please send funds to addresses that belong to
              people of who you know and trust
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-sm"
            style={{
              borderColor: "#949DB7",
            }}
          />

          <p className="text-xs">
            I agree with the{" "}
            <span className=" font-semibold">
              Terms of UsePrivacy Policy, AML
            </span>{" "}
            and <span className="font-semibold">KYC</span>{" "}
          </p>
        </div>

        <div className="mt-4 flex justify-center">
          <Link href={"/verify-email"}>
            <button
              className="btn bg-primary1 hover:bg-primary-hover btn-wide mt-8 border-none text-sm"
              style={{
                color: "#DBE4FF",
              }}
            >
              Buy 36.317677 USDT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
