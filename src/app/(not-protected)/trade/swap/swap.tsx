import Button from "@/components/shared/button/button";

import Image from "next/image";
import axios from "@/api/axiosInstance";
import { useState } from "react";
import Link from "next/link";

export default function Swap() {
  const [showTransactionDetails, setShowTransactionDetails] = useState(false);
  const [swapButtonText, setSwapButtonText] = useState("Swap");
  const [baseAmount, setBaseAmount] = useState("");
  const [swapAmount, setSwapAmount] = useState("");
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

  const handleSwapButtonClick = () => {
    if (swapButtonText === "Swap") {
      if (baseAmount && swapAmount) {
        setShowTransactionDetails(true);
        setSwapButtonText("Continue");
      } else {
        alert("Please enter an amount to swap.");
      }
    } else {
      openModal();
    }
  };

  return (
    <div>
      <div className="rounded-3xl grid grid-cols-3 gap-10 px-8">
        <div className=" col-span-2 flex justify-end ">
          <div className=" bg-[#1A1F30] p-4 rounded-lg ">
            <div className="flex ">
              <div className="pl-3 pe-4 p-2 flex flex-col items-end rounded-lg bg-[#3F4351] ">
                <div>
                  <p className="pb-1 opacity-65 text-xs">I will send</p>
                  <div className="flex gap-x-24">
                    <div className="flex items-center rounded-md px-3 bg-[#292C33]  ">
                      <div className="flex items-center gap-2 text-sm py-1 ">
                        <div>
                          <Image
                            src={"/btc.svg"}
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
                        onChange={(e) => setBaseAmount(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-2/3 justify-center  h-10 ">
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
              <div className="pl-3 pe-4 p-2 flex flex-col items-end rounded-lg bg-[#3F4351] ">
                <div>
                  <p className="pb-1 opacity-65 text-xs">I will get</p>
                  <div className="flex gap-x-24">
                    <div className="flex items-center rounded-md px-3 bg-[#292C33]  ">
                      <div className="flex items-center gap-2 text-sm py-1 ">
                        <div>
                          <Image
                            src={"/btc.svg"}
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
                        onChange={(e) => setSwapAmount(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-20 mt-2">
              <div className="flex gap-2 items-center">
                <Image
                  src={"/exclamation.svg"}
                  alt="swap-icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "15px", height: "auto" }}
                />
                <p className="text-xs text-[#95ABF3]">
                  Fixed rate is updated every 30 seconds, all fees <br></br> are
                  included in the transaction
                </p>
              </div>
              <p className="text-xs text-[#616C8F]">1 USDT = 0.99699 USDC</p>
            </div>
            <div className="flex justify-center">
              <div className="w-2/3">
                <Button text={swapButtonText} onClick={handleSwapButtonClick} />
              </div>
            </div>
          </div>
        </div>
        {showTransactionDetails && (
          <div className="col-span-1 bg-[#1A1F30] p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Transaction Details</h3>
            <div className="border-t border-t-gray-500 border-b border-b-gray-500 pt-2 pb-4 text-xs space-y-4">
              <div>
                <p className="text-[#989898]">I will Send</p>
                <p>48 USDT</p>
              </div>
              <div>
                <p className="text-[#989898]">Exchange rate</p>
                <p>1 USDT=0.99699 USDC</p>
                <p>fixed rate</p>
              </div>
              <div>
                <p className="text-[#989898]">Service fee 0.25%</p>
                <p>0.0048002835 USDT</p>
              </div>
              <div>
                <p className="text-[#989898]">Transactional cost</p>
                <p>0.0008002835 USDT</p>
              </div>
            </div>
            <div className="text-xs mt-4">
              <p className="text-[#989898]"> I will Receive</p>
              <p>47.89969 USDT</p>
            </div>
          </div>
        )}
      </div>
      <h3 className="mt-8 font-semibold">Steps to swapping crypto</h3>
      <div className="text-xs flex gap-10 mt-6">
        <div>
          <p className="bg-[#1A1F30] text-center p-4 font-semibold rounded-tl-lg rounded-tr-lg">
            Set your preferred exchange pair
          </p>
          <div className="border border-[#5275EC] rounded-bl-lg rounded-br-lg p-4">
            <p className="text-center opacity-85">
              set your exchange pair, enter your wallet address to which your
              new coins will be sent to and receive wallet address to send
              coins.
            </p>
            <div className="flex justify-center mt-4">
              <Image
                src={"/exchange-pair.svg"}
                alt="icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "230px", height: "auto" }}
              />
            </div>
          </div>
        </div>

        <div>
          <p className="bg-[#1A1F30] text-center p-4 font-semibold rounded-tl-lg rounded-tr-lg">
            Confirm order
          </p>
          <div className="border border-[#5275EC] rounded-bl-lg rounded-br-lg p-4">
            <p className="text-center opacity-85">
              set your exchange pair, enter your wallet address to which your
              new coins will be sent to and receive wallet address to send
              coins.
            </p>
            <div className="flex justify-center mt-4">
              <Image
                src={"/confirmorder.svg"}
                alt="icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "230px", height: "auto" }}
              />
            </div>
          </div>
        </div>

        <div>
          <p className="bg-[#1A1F30] text-center p-4 font-semibold rounded-tl-lg rounded-tr-lg">
            Receive your coins
          </p>
          <div className="border border-[#5275EC] rounded-bl-lg rounded-br-lg p-4">
            <p className="text-center opacity-85">
              set your exchange pair, enter your wallet address to which your
              new coins will be sent to and receive wallet address to send
              coins.
            </p>
            <div className="flex justify-center mt-4">
              <Image
                src={"/receive-coin.svg"}
                alt="icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "230px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-8 font-semibold text-center">
        Popular Tether USDT conversions
      </h2>
      <div className="grid grid-cols-2 grid-rows-3 gap-10 text-xs  mx-52 mt-8">
        <div className=" flex justify-between items-center border border-[#2E5FFF] rounded-lg px-4 py-2">
          <div>
            <p>USDT to USDC</p>
            <p className="opacity-65">1 USDT=0.99699 USDC</p>
          </div>
          <div className="relative me-3">
            <Image
              src={"/us-coin.svg"}
              alt="coin icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "25px", height: "auto" }}
            />
            <Image
              src={"/tether.svg"}
              alt="coin icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "25px", height: "auto" }}
              className="absolute z-1 top-0 left-4"
            />
          </div>
        </div>

        <div className=" flex justify-between items-center border border-[#2E5FFF] rounded-lg px-4 py-2">
          <div>
            <p>USDT to ETH</p>
            <p className="opacity-65">1 USDT=0.00033 ETH</p>
          </div>
          <div className="relative me-3">
            <Image
              src={"/ethereum.svg"}
              alt="coin icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "25px", height: "auto" }}
            />
            <Image
              src={"/tether.svg"}
              alt="coin icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "25px", height: "auto" }}
              className="absolute z-1 top-0 left-4"
            />
          </div>
        </div>

        <div className=" flex justify-between items-center border border-[#2E5FFF] rounded-lg px-4 py-2">
          <div>
            <p>USDT to BTC</p>
            <p className="opacity-65">1 USDT=0.000016 BTC</p>
          </div>
          <div className="relative me-3">
            <Image
              src={"/btc.svg"}
              alt="coin icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "25px", height: "auto" }}
            />
            <Image
              src={"/tether.svg"}
              alt="coin icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "25px", height: "auto" }}
              className="absolute z-1 top-0 left-4"
            />
          </div>
        </div>

        <div className=" flex justify-between items-center border border-[#2E5FFF] rounded-lg px-4 py-2">
          <div>
            <p>USDT to ETC</p>
            <p className="opacity-65">1 USDT=0.037ETC</p>
          </div>
          <div className="relative me-3">
            <Image
              src={"/etc.svg"}
              alt="coin icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "25px", height: "auto" }}
            />
            <Image
              src={"/tether.svg"}
              alt="coin icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "25px", height: "auto" }}
              className="absolute z-1 top-0 left-4"
            />
          </div>
        </div>

        <div className=" flex justify-between items-center border border-[#2E5FFF] rounded-lg px-4 py-2">
          <div>
            <p>USDT to BNB</p>
            <p className="opacity-65">1 USDT= 0.0017BNB</p>
          </div>
          <div className="relative me-3">
            <Image
              src={"/btc.svg"}
              alt="coin icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "25px", height: "auto" }}
            />
            <Image
              src={"/tether.svg"}
              alt="coin icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "25px", height: "auto" }}
              className="absolute z-1 top-0 left-4"
            />
          </div>
        </div>

        <div className=" flex justify-between items-center border border-[#2E5FFF] rounded-lg px-4 py-2">
          <div>
            <p>USDT to Lite</p>
            <p className="opacity-65">1 USDT=0.012 LTC</p>
          </div>
          <div className="relative me-3">
            <Image
              src={"/lite.svg"}
              alt="coin icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "25px", height: "auto" }}
            />
            <Image
              src={"/tether.svg"}
              alt="coin icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "25px", height: "auto" }}
              className="absolute z-1 top-0 left-4"
            />
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
    </div>
  );
}
