"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("access_token");

    router.push("/signin");
  };
  return (

    <div className="relative bg-[#191c24]">
           <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className=" relative z-10">

    <div className="flex flex-col ">
      <div className="flex justify-center md:justify-normal">
        <Link href={'/'}>
        
        <Image
          src={"/A1-swapify.png"}
          alt="dashboard-icon"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "85px", height: "auto" }}
          className="mx-6 cursor-pointer"
        />
        </Link>
      </div>

      <Link href={"/dashboard"}>
        <div className="flex justify-center md:grid md:grid-cols-3 py-2  transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">
          <div className="col-span-1 flex justify-end items-center pe-4">
            <Image
              src={"/dashboard-icon.svg"}
              alt="dashboard-icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "18px", height: "auto" }}
            />
          </div>
          <div className="hidden md:block md:col-span-2   ">Dashboard</div>
        </div>
      </Link>

      <Link href={"/dashboard/market"}>
        <div className=" flex justify-center md:grid md:grid-cols-3 py-2  transition-colors duration-300 ease-in-out hover:bg-black hover:text-white ">
          <div className="col-span-1 flex justify-end items-center pe-4">
            <Image
              src={"/market-place-icon.svg"}
              alt="market-place-icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "20px", height: "auto" }}
            />
          </div>
          <div className="hidden md:block md:col-span-2 ">Marketplace</div>
        </div>
      </Link>

      <div
        className="relative flex justify-center md:grid md:grid-cols-3   py-2   transition-colors duration-300 ease-in-out hover:bg-black hover:text-white cursor-pointer "
        onClick={toggleDropdown}
      >
        <div className="col-span-1 flex justify-end items-center pe-4">
          <Image
            src={"/trade-icon.svg"}
            alt="trade-icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "18px", height: "auto" }}
          />
        </div>
        <div className="hidden md:block md:col-span-2 ">Trade</div>
        {isDropdownOpen && (
          <div
            className="absolute top-10 left-4 mt-2 w-48  py-2 rounded shadow-lg z-500 text-white"
            style={{
              backgroundColor: "#26304E",
            }}
          >
            <Link
              href="/dashboard/trade"
              className="block px-4 pt-2 hover:text-gray-400"
            >
              <div className="text-sm">
                <div>
                  <p>Standard trade</p>
                </div>
                {/* <p>Buy, sell and swap on the directly on the platform at the best rates.</p> */}
              </div>
            </Link>
            <Link
              href="/dashboard/trade/p2p"
              className="block px-4 py-2 hover:text-gray-400"
            >
              <div className="text-sm">
                <div>
                  <p>p2p trade</p>
                </div>
                {/* <p>Trade directly with other users on our platform. Buy and sell, swap crypto coins, securely and instantly</p> */}
              </div>
            </Link>
          </div>
        )}
      </div>

      <Link href={"/dashboard/wallet"}>
        <div className="border-b-4 border-black ">
          <div className="flex justify-center md:grid md:grid-cols-3 mb-10 py-2  transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">
            <div className="col-span-1 flex justify-end items-center pe-4">
              <Image
                src={"/wallet-icon.svg"}
                alt="wallet-icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "18px", height: "auto" }}
              />
            </div>
            <div className=" whitespace-nowrap hidden md:block md:col-span-2 ">
              My Wallet
            </div>
          </div>
        </div>
      </Link>


      <Link href={"/dashboard/settings"}>
      <div className="flex justify-center md:grid md:grid-cols-3 py-2 mt-20 ">
        <div className="col-span-1 flex justify-end items-center pe-4">
          <Image
            src={"/settings-icon.svg"}
            alt="settings-icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "18px", height: "auto" }}
          />
        </div>
        <div className="hidden md:block md:col-span-2 ">Settings</div>
      </div>
      </Link>

      <Link href={"/dashboard/help"}>
      <div className="flex justify-center md:grid md:grid-cols-3 py-2 ">
        <div className="col-span-1 flex justify-end items-center pe-4">
          <Image
            src={"/help-icon.svg"}
            alt="help-icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "18px", height: "auto" }}
          />
        </div>
        <div className="hidden md:block md:col-span-2 ">Help</div>
      </div>
      </Link>

      <div
        onClick={handleLogout}
        className="flex justify-center md:grid md:grid-cols-3 py-2 cursor-pointer"
      >
        <div className="col-span-1 flex justify-end items-center pe-4">
          <Image
            src={"/logout-icon.svg"}
            alt="logout-icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "18px", height: "auto" }}
          />
        </div>
        <div className="hidden md:block md:col-span-2">Log out</div>
      </div>

   
    </div>
      </div>


    </div>

    
  );
}
