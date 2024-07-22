"use client";

import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import CustomCard from "@/components/shared/custom_card";
// import Image from "next/image";
import Chart from "@/components/chart/chart";
import Link from "next/link";
import Wrapper from "../wrapper/wrapper";
import ButtonOutline from "../shared/button/button-outline";
// import Button from "../shared/button/button";
import Navbar from "../navbar/page";
import { useTheme } from "next-themes";
import { Image } from "@nextui-org/react";
import { SetStateAction, useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function HeroMiddlePage() {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const items = ["item1", "item2", "item3"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  const handleManualSlide = (index: SetStateAction<number>) => {
    setActiveIndex(index);
  };

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    // <div className="flex flex-col mt-10 w-full ">
    //   <div className="border-b border-gray-700">
    //     <Wrapper>
    //       <div className="flex justify-center ">
    //         <div className="flex text-left pb-16 max-w-5xl">
    //           <div>
    //             <h2 className=" text-lg md:text-2xl font-semibold font-mono capitalize mb-4 ">
    //               supported coins
    //             </h2>
    //             <p className="text-sm">
    //               With our wallet, you can store, send, receive and exchange
    //               more than 3,200 cryptocurrencies. In addition we provide a
    //               comprehensive solution for managing your digital assets and
    //               accepting payments.
    //             </p>
    //           </div>

    //           <div className="flex flex-auto w-3/4 pl-6 pt-28 ">
    //             <Image
    //               src={"/coin_icon.svg"}
    //               alt="coin_image"
    //               width="250"
    //               height="150"
    //               sizes="100vw"
    //               style={{ width: "auto", height: "auto" }}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </Wrapper>
    //   </div>

    //   <div className="border-b border-gray-700">
    //     <Wrapper>
    //       <div className="border-b border-gray-700 pb-48 pt-10">
    //         <div className="flex justify-center">
    //           <div className="md:max-w-5xl md:text-end flex flex-col gap-36 md:flex-row  ">
    //             <div className="pt-12">
    //               <CustomCard
    //                 title="."
    //                 description="Payment are forwarded to secure address while transaction is being finalized"
    //                 icon={faUserPlus}
    //               />
    //             </div>

    //             <div>
    //               <h2 className="text-sm sm:text-lg md:text-2xl font-semibold font-mono  capitalize mb-4">
    //                 Decentralized escrow trading
    //               </h2>
    //               <p className="sm:pl-8 text-sm ">
    //                 We are revolutionizing the way assets are exchange by
    //                 removing the need for intermediaries such that users can
    //                 securely trade directly with each other while we ensure
    //                 transparency and trusts in transactions.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </Wrapper>
    //   </div>

    //   <div className="border-b border-gray-700">
    //     <Wrapper>
    //       <div className="flex justify-center pt-10">
    //         <div className="flex text-left pb-16 max-w-5xl">
    //           <div>
    //             <h2 className="text-sm sm:text-lg md:text-2xl font-mono font-semibold capitalize mb-4 ">
    //               low % transaction fee for all incoming crypto payments
    //             </h2>
    //             <p className="text-sm">
    //               A-1 Swapify offer the best transaction fee that are without
    //               hidden charges for all payments, making it easy for you to
    //               understand and manage your costs.
    //             </p>
    //           </div>

    //           <div className="flex flex-auto w-3/4 justify-center pt-28 ">
    //             <Image
    //               src={"/percent.svg"}
    //               alt="percent_image"
    //               width={0}
    //               height={0}
    //               sizes="100vw"
    //               style={{ width: "100px", height: "auto" }}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </Wrapper>
    //   </div>

    //   <div className="border-b border-gray-700">
    //     <Wrapper>
    //       <div className=" flex justify-center pb-40 pt-10">
    //         <div className=" max-w-5xl">
    //           <div className="mb-4 p-3 text-lg md:text-2xl font-mono font-semibold">
    //             How it works
    //           </div>
    //           <div className="flex flex-col md:flex-row gap-40 md:gap-16 lg:gap-20">
    //             <CustomCard
    //               title="Create an account"
    //               description="Sign up for free on our website and have your data synced on all platform."
    //               icon={faUserPlus}
    //             />
    //             <CustomCard
    //               title="Fund your wallet"
    //               description="Follow our short and easy steps to add assets to your digital wallet."
    //               icon="/envelope-open.svg"
    //             />
    //             <CustomCard
    //               title="Enjoy"
    //               description="Experience smooth and easy cryptotrading and payment transactions."
    //               icon="handshake.svg"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </Wrapper>
    //   </div>

    //   <div className="border-b border-gray-700">
    //     <Wrapper>
    //       <div className="hidden md:flex justify-center pb-10 pt-10">
    //         <div className=" p-4">
    //           <div className="text-2xl mb-4 text-center font-semibold">
    //             Top Market Data
    //           </div>
    //           <div className="flex justify-between">
    //             <div className="mb-4">
    //               <span>BitCoin Market Data</span>
    //               <span className="ml-5 text-xs text-gray-500">
    //                 Updated at 12.00PM
    //               </span>
    //             </div>
    //             <div>
    //               <span>logo</span>
    //             </div>
    //           </div>
    //           <div className="flex gap-32 text-sm">
    //             <div className="flex flex-col justify-center items-center">
    //               <div className=" text-gray-400">USDT Price</div>
    //               <div>-0.38%</div>
    //             </div>
    //             <div className="flex flex-col justify-center items-center">
    //               <div className=" text-gray-400">24H % change </div>
    //               <div>$66.7K</div>
    //             </div>
    //             <div className="flex flex-col justify-center items-center">
    //               <div className=" text-gray-400">Market Cap</div>
    //               <div>$1.29T</div>
    //             </div>
    //             <div className="flex flex-col justify-center items-center">
    //               <div className=" text-gray-400">Circulating Supply</div>
    //               <div>19.67m</div>
    //             </div>
    //           </div>
    //           <div>
    //             <Chart />
    //             <p className="mt-4 text-xs text-gray-400">
    //               Stay ahead of the curve with real-time market data analysis.
    //               Access live updates, trends, and insights to make informed
    //               decisions in the dynamic world of cryptocurrency trading.
    //             </p>
    //           </div>

    //           <div className="mt-8 flex justify-center">
    //             <Link
    //               href={"/"}
    //               className="btn btn-wide bg-primary text-white hover:bg-primary-hover"
    //             >
    //               View Market place
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </Wrapper>
    //   </div>

    //   <div className="border-b border-gray-700 py-14">
    //     <Wrapper>
    //       <div className="grid grid-cols-3">
    //         <div className="col-span-1"></div>
    //         <div className="col-span-2 text-xl bold pl-4">
    //           Frequently Asked Questions
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-3 mt-6 text-sm">
    //         <div className="flex justify-center items-center">
    //           <div className=" col-span-1 py-2 px-8 md:px-16 bg-primary rounded">
    //             General
    //           </div>
    //         </div>

    //         <div className="col-span-2">
    //           <div className="collapse collapse-plus border-b rounded-none border-gray-700 ">
    //             <input type="radio" name="my-accordion-3" />
    //             <div className="collapse-title text-sm font-medium">
    //               Is A-1 Swapify regulated?
    //             </div>
    //             <div className="collapse-content text-sm">
    //               <p>Yes</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-3 mt-4 text-sm">
    //         <div className="flex justify-center items-center">
    //           <div className=" col-span-1 py-2 px-8 md:px-10 outline  rounded">
    //             Transactions
    //           </div>
    //         </div>
    //         <div className="col-span-2">
    //           <div className="collapse collapse-plus border-b rounded-none border-gray-700 ">
    //             <input type="radio" name="my-accordion-3" />
    //             <div className="collapse-title text-sm font-medium">
    //               What cryptocurrencies can i trade on this platform?
    //             </div>
    //             <div className="collapse-content text-sm">
    //               <p>Btc, Etherium and others</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-3 mt-4 text-sm">
    //         <div className="flex justify-center items-center">
    //           <div className=" col-span-1 py-2 px-8 md:px-16 outline  rounded">
    //             wallet
    //           </div>
    //         </div>
    //         <div className="col-span-2">
    //           <div className="collapse collapse-plus border-b rounded-none border-gray-700 ">
    //             <input type="radio" name="my-accordion-3" />
    //             <div className="collapse-title text-sm font-medium">
    //               What is KYC and why is it required?
    //             </div>
    //             <div className="collapse-content text-sm">
    //               <p>KYC simply means Know your customer</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </Wrapper>
    //   </div>

    //   <div className="hidden sm:block pt-14">
    //     <Wrapper>
    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-12 lg:px-24 pt-4 rounded-lg bg-[#00071F]">
    //         <div className="md:col-span-1 lg:col-span-2 px-4 md:px-6 py-8 md:py-12">
    //           <h2 className="text-xl md:text-2xl font-semibold">
    //             Join a new generation of Traders
    //           </h2>
    //           <p className="mt-6 md:mt-10 text-sm">
    //             Subscribe to our newsletter to get the latest crypto insights
    //             and prices updates.
    //           </p>
    //           <div className=" bg-white w-full md:w-3/4 rounded-md flex justify-between items-center px-4 md:px-6 py-2 mt-6 md:mt-8">
    //             <input
    //               type="text"
    //               placeholder="Enter Email Address"
    //               className="input input-ghost flex-grow max-w-xs"
    //             />
    //             <Link
    //               href="/"
    //               className=" btn bg-primary text-white hover:bg-primary-hover ml-4"
    //             >
    //               Stay connected
    //             </Link>
    //           </div>
    //         </div>

    //         <div className="relative mt-8 lg:mt-0">
    //           <div className="flex justify-center">
    //             <Image
    //               src="/hand.svg"
    //               alt="hand"
    //               width={0}
    //               height={0}
    //               style={{ width: "320px", height: "auto" }}
    //             />
    //           </div>
    //           <div className="absolute top-0 flex justify-center w-full">
    //             <div className="relative">
    //               <Image
    //                 src="/eclipse.svg"
    //                 alt="coin"
    //                 width={0}
    //                 height={0}
    //                 style={{ width: "250px", height: "auto" }}
    //               />
    //               <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
    //                 <Image
    //                   src="/dollar.svg"
    //                   alt="dollar icon"
    //                   width={0}
    //                   height={0}
    //                   style={{ width: "50px", height: "auto" }}
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </Wrapper>
    //   </div>
    // </div>

    <div>
      <div
        className={` relative bg-cover w-screen bg-center min-h-screen ${
          theme === "light" ? "bg-bg-light" : "bg-bg-dark"
        }`}
        style={{ backgroundImage: "url('/hero-1.svg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <div className=" grid grid-cols-3 gap-10 relative">
            <div className="absolute top-10 right-10">
              <Image
                src="/create-account-logo.svg"
                isBlurred
                alt="pic"
                width={0}
                height={0}
                style={{ width: "150px", height: "auto" }}
              />
            </div>
            <div className="absolute top-28 right-48">
              <Image
                src="/star.svg"
                isBlurred
                alt="pic"
                width={0}
                height={0}
                style={{ width: "25px", height: "auto" }}
              />
            </div>
            <div className="absolute bottom-48 right-28">
              <Image
                src="/star.svg"
                isBlurred
                alt="pic"
                width={0}
                height={0}
                style={{ width: "35px", height: "auto" }}
              />
            </div>
            <div className="absolute bottom-48 left-96">
              <Image
                src="/star.svg"
                isBlurred
                alt="pic"
                width={0}
                height={0}
                style={{ width: "18px", height: "auto" }}
              />
            </div>
            <div className="col-span-1">
              <div>
                <Image
                  src={"/hand-phone.svg"}
                  isBlurred
                  alt="coin_image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "450px", height: "auto" }}
                />
              </div>

              <div className="flex justify-center ps-28 mt-6">
                <Image
                  src={"/half-phone.svg"}
                  isBlurred
                  alt="coin_image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "208px", height: "auto" }}
                />
              </div>
            </div>
            <div className=" col-span-2 px-10 ms-4 ">
              <h3
                className={`text-[48px] mt-10 plus-jakarta-sans-400 text-gradient ${
                  theme === "light" ? "text-text-light" : "text-text-dark"
                }`}
              >
                how it works
              </h3>

              <div>
                <div className="carousel w-full ">
                  {items.map((item, index) => (
                    <div
                      key={item}
                      id={item}
                      className={`carousel-item w-full ${
                        activeIndex === index ? "block" : "hidden"
                      }`}
                    >
                      <div className="flex flex-col">
                        <h2
                          className={`mt-5 text-4xl md:text-5xl 2xl:text-6xl plus-jakarta-sans-400 ${
                            theme === "light"
                              ? "text-text-light"
                              : "text-text-dark"
                          }`}
                        >
                          {index === 0 && "create your account"}
                          {index === 1 && "fund your wallet"}
                          {index === 2 && "start trading!"}
                        </h2>
                        <p className="text-[#949DB7] mt-5 text-base md:text-lg 2xl:text-xl lato-400">
                          {index === 0 &&
                            "Get started by signing up for free in short simple steps on our \nwebsite"}
                          {index === 1 &&
                            "Add asset token to your A-1 Swapify wallet either through depositing or purchasing with fiat currency"}
                          {index === 2 &&
                            "Experience smooth and easy crypto transactions including swapping, selling and buying various cryptocoins."}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex w-full justify-start gap-20  py-2 mt-36">
                  {items.map((item, index) => (
                    <div
                      key={item}
                      className={`border-b-4 ${
                        activeIndex === index
                          ? "border-b-blue-500"
                          : "border-b-white"
                      } h-1 w-32 cursor-pointer`}
                      onClick={() => handleManualSlide(index)}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`relative  bg-cover bg-center w-screen min-h-screen ${
          theme === "light" ? "bg-bg-light" : "bg-bg-dark"
        }`}
        style={{ backgroundImage: "url('/business-bg.svg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30 "></div>
        <div className="relative z-10">
          <div className="p-4 min-h-screen ">
            <div className="text-5xl xl:6xl mt-10 ms-36 ps-4 ">
              <div className="relative ">
                <h3>Our business in </h3>
                <div className="absolute bottom-2 left-72">
                  <Image
                    src={"/hero-5.svg"}
                    isBlurred
                    alt="icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "45px", height: "auto" }}
                  />
                </div>
              </div>
              <h3 className="">numbers</h3>
            </div>

            <div className=" mt-14 ms-36 ps-4 text-lg xl:text-xl ">
              <p>We are establishing a growing presence</p>
              <p>across the globe.</p>
            </div>
            <div className="flex items-center px-40 gap-20">
              <div className="flex flex-col items-center p-4 gap-5 w-[334px] border-gradient relative bg-black">
                <Image
                  src={"/world.svg"}
                  isBlurred
                  alt="icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "45px", height: "auto" }}
                />
                <h2 className="text-3xl font-bold">100+</h2>
                <p className="text-center lato-700">
                  We have a growing presence in major countries worldwide.
                </p>
              </div>
              <div className="flex flex-col items-center p-4 gap-5 w-[334px] border-gradient mt-28 relative bg-black">
                <Image
                  src={"/network.svg"}
                  isBlurred
                  alt="icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "45px", height: "auto" }}
                />
                <h2 className="text-3xl font-bold">99k+</h2>
                <p className="text-center lato-700">
                  Our global network has grown to thousands of users around the
                  world.
                </p>
              </div>
              <div className="flex flex-col items-center p-4 gap-5 w-[334px] border-gradient relative bg-black">
                <Image
                  src={"/payment.svg"}
                  isBlurred
                  alt="coin_image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "45px", height: "auto" }}
                />
                <h2 className="text-3xl font-bold">50k+</h2>
                <p className="text-center lato-700">
                  The total number of transactions made has exceeded 50,000
                  payments.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-6 left-16">
          <Image
            src={"/hero-4.svg"}
            isBlurred
            alt="icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "200px", height: "auto" }}
          />
        </div>
      </div>

      <div
        className={`relative w-screen  bg-center min-h-screen ${
          theme === "light" ? "bg-bg-light" : "bg-bg-dark"
        }`}
        style={{ backgroundImage: "url('/top-market-data.svg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30 "></div>
        <div className="relative z-10">
          <div className="p-4  ">
            <div className=" text-end mt-10 mx-20 plus-jakarta-sans-400">

            <h3 className="text-xl xs:2xl sm:text-3xl  xl:text-4xl 2xl:text-5xl gradient-homepage-text ">top Market data</h3>
            <h3 className="mt-5  text-2xl xs:text-3xl sm:text-4xl xl:text-5xl 2xl:text-7xl">View market trend for top </h3>
            <h3 className="text-2xl xs:text-3xl sm:text-4xl xl:text-5xl 2xl:text-7xl ">coins on our platform</h3>
            </div>
            <>
              <div className="flex items-center justify-between mt-10">
                <div className="mb-4 font-semibold">Market Update</div>
                <div className="flex gap-3 items-center">
                  <div className="text-sm">More Activity</div>
                  <div>
                    <Image
                      src={"/arrow-right.svg"}
                      alt="arrow"
                      width={44}
                      height={20}
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="overflow-x-auto rounded-lg bg-[#171C2C]">
                  <table className="table">
                    <thead className="text-white">
                      <tr>
                        <th>Cryptocoin</th>
                        <th>Updated</th>
                        <th>Change</th>
                        <th>24H Lowest</th>
                        <th>24H Highest</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-xs">
                        <td>
                          <div className="flex items-center gap-3">
                            <div>
                              <div className="mask mask-squircle ">
                                <Image
                                  src={"/usdt.svg"}
                                  alt="usdt icon"
                                  width={20}
                                  height={20}
                                  sizes="100vw"
                                  style={{ width: "auto", height: "auto" }}
                                />
                              </div>
                            </div>
                            <div className="text-xs">
                              <div>Bitcoin</div>
                            </div>
                          </div>
                        </td>
                        <td>1 minute ago</td>
                        <td>2.64%</td>
                        <td>$12,729</td>
                        <td>$13,000</td>
                        <td>$12,729</td>
                      </tr>
                      <tr className="text-xs">
                        <td>
                          <div className="flex items-center gap-3">
                            <div>
                              <div className="mask mask-squircle ">
                                <Image
                                  src={"/usdt.svg"}
                                  alt="usdt icon"
                                  width={20}
                                  height={20}
                                  sizes="100vw"
                                  style={{ width: "auto", height: "auto" }}
                                />
                              </div>
                            </div>
                            <div>
                              <div>Bitcoin</div>
                            </div>
                          </div>
                        </td>
                        <td>1 minute ago</td>
                        <td>2.64%</td>
                        <td>$12,729</td>
                        <td>$13,000</td>
                        <td>$12,729</td>
                      </tr>
                      <tr className="text-xs">
                        <td>
                          <div className="flex items-center gap-3">
                            <div>
                              <div className="mask mask-squircle ">
                                <Image
                                  src={"/usdt.svg"}
                                  alt="usdt icon"
                                  width={20}
                                  height={20}
                                  sizes="100vw"
                                  style={{ width: "auto", height: "auto" }}
                                />
                              </div>
                            </div>
                            <div>
                              <div>Bitcoin</div>
                            </div>
                          </div>
                        </td>
                        <td>1 minute ago</td>
                        <td>2.64%</td>
                        <td>$12,729</td>
                        <td>$13,000</td>
                        <td>$12,729</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>

      <div
        className={`relative w-screen  bg-center min-h-screen  ${
          theme === "light" ? "bg-bg-light" : "bg-bg-dark"
        }`}
        style={{ backgroundImage: "url('/frequently-asked-questions.svg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30 "></div>
        <div className="relative z-10">
          <div className="p-4 min-h-screen ">
            <div className="mx-20 mt-20">
              <div className="mb-10 text-5xl plus-jakarta-sans">
                <h3>frequently asked </h3>
                <h3>questions</h3>
              </div>

              <Accordion variant="splitted"  motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="What is A-1 Swapify?"
                  className="border border-gray-800"

               
                  style={{
                    backgroundColor: 'transparent'
                  }}
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="How does A-1 Swapify works?"
                  className="border border-gray-800"

                  style={{
                    backgroundColor: 'transparent'
                  }}
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title="How many countries is A-1 Swapify in?"
                  className="border border-gray-800"

                  style={{
                    backgroundColor: 'transparent'
                  }}
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="4"
                  aria-label="Accordion 4"
                  title="Is A-1 Swapify secure?"
                  className="border border-gray-800"
                  style={{
                    backgroundColor: 'transparent'
                  }}
                >
                  {defaultContent}
                </AccordionItem>
                <AccordionItem
                  key="5"
                  aria-label="Accordion 5"
                  title="How can i sign up for A-1 Swapify?"
                  className="border border-gray-800"

                  style={{
                    backgroundColor: 'transparent'
                  }}
                >
                  {defaultContent}
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>


<div className="absolute top-4 left-0">
<Image
                src="/questions-icon.svg"
                isBlurred
                alt="pic"
                width={0}
                height={0}
                style={{ width: "120px", height: "auto" }}
              />

</div>



      </div>

      <div
        className={`relative w-screen  bg-center min-h-screen  ${
          theme === "light" ? "bg-bg-light" : "bg-bg-dark"
        }`}
        style={{ backgroundImage: "url('/distrubuted-team.svg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50 "></div>
        <div className="relative z-10 flex justify-center">
          <div className="p-4 mt-10 ">
            <h3 className="text-5xl plus-jakarta-sans ">We&apos;re a <span className="text-gradient"> distributed  </span>team</h3>
            <div className="mt-6 opacity-65">
              <p>
                We are building a growing presence of offices and teams all
                around the
              </p>
              <p className="text-center">world.</p>
              <div className="flex justify-center mt-36">

              <div className="flex flex-col items-center w-fit px-6 py-4 rounded-lg bg-white text-black border">
                <div>
                <Image
                src="/naija-flag.svg"
                isBlurred
                alt="pic"
                width={0}
                height={0}
                style={{ width: "35px", height: "auto" }}
              />
                </div>
                <h3 className="font-semibold ">Lagos, NIG.</h3>
                <p className="text-sm opacity-65 mt-1">28A,Ibiyinka salvador street, </p>
                <p className=" text-sm opacity-65">Africa lane lekki.</p>

              </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div
        className={`relative w-screen  bg-center   ${
          theme === "light" ? "bg-bg-light" : "bg-bg-dark"
        }`}
        style={{ backgroundImage: "url('/subscribe-bg.svg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30 "></div>
        <div className="relative z-10 px-20">
          <div className="pb-4 pt-20 ">
            <h3 className="text-5xl plus-jakarta-sans">join a new generation</h3>
            <h3 className=" text-5xl plus-jakarta-sans">of crypto traders</h3>
            <div className="grid grid-cols-2 mt-20">
              <div className=" col-span-1 opacity-65 mt-5">
                <h3>Subscribe to our newsletter to get the latest crypto insights and prices update</h3>
                
              </div>
              <div className="flex  col-span-1 bg-white py-2 px-4 rounded-lg mb-20">
                {/* <Input size="sm" type="email" label="Email"  /> */}
                <input
                  type="text"
                  placeholder="Enter Email Address "
                  className="grow py-2 px-4 rounded-tl-lg rounded-bl-lg bg-white  text-black"
                />

                <Button
                  color="primary"
                  variant="solid"
                  radius="none"
                  className="rounded-tr-lg rounded-br-lg font-semibold "
                >
                  Stay connected
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-5 right-6">
        <Image
                src="/generation.svg"
                isBlurred
                alt="pic"
                width={0}
                height={0}
                style={{ width: "200px", height: "auto" }}
              />
        </div>
      </div>
    </div>
  );
}
