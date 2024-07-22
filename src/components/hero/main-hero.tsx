import Link from "next/link";

import Navbar from "../navbar/page";

import { Button, ButtonGroup, Input, Image } from "@nextui-org/react";

const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];

export default function Hero() {
  return (
    <div
      className="relative bg-cover bg-center h-screen w-screen "
      style={{ backgroundImage: "url('/business-bg.svg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 w-100 px-4">
        <Navbar />

        <div className="grid grid-cols-3 mt-16 px-20    ">
          <div className=" col-span-2  ">
            <div className="font-bold">
              <h3 className="text-6xl plus-jakarta-sans-400 ">
                buy, exchange crypto{" "}
              </h3>
              <h3 className="text-6xl plus-jakarta-sans-400 ">
                <span className=" text-[#97ABFF] gradient-homepage-text ">
                  safely{" "}
                </span>
                and <span className=" gradient-homepage-text"> securely </span>
              </h3>
            </div>

            <div className="mt-10 text-lg plus-jakarta-sans-400">
              <p>Experience the future of trading with our cutting-edge </p>
              <p className="">
                exchange. Effortlessly swap, trade, and manage your{" "}
              </p>
              <p className="">
                digital assets in a secure and intuitive environment.
              </p>
            </div>
            <div className="flex items-center gap-10 mt-20  ">
              <Link href={"/signin"}>
                <Button
                  variant="bordered"
                  // color="primary"
                  size="lg"
                  className="border-[#5275EC] text-white font-semibold"
                >
                  Sign In
                </Button>
              </Link>

              <Link href={"/signup"}>
                <Button
                  variant="shadow"
                  size="lg"
                  color="primary"
                  className="font-semibold "
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          <div className=" col-span-1 px-4 pb-5  rounded-lg bg-[#191C25] opacity-90 relative  ">
            <div>
              <div className="mt-5 flex justify-center">
                <ButtonGroup>
                  <Button>Buy</Button>
                  <Button>Sell</Button>
                </ButtonGroup>
              </div>
              <div className=" mt-14 ">
                <Input
                  label="You Buy"
                  placeholder="0.00"
                  labelPlacement="outside"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">$</span>
                    </div>
                  }
                  endContent={
                    <div className="flex items-center">
                      <label className="sr-only" htmlFor="currency">
                        Currency
                      </label>
                      <select
                        className="outline-none border-0 bg-transparent text-default-400 text-small"
                        id="currency"
                        name="currency"
                      >
                        <option>USD</option>
                        <option>ARS</option>
                        <option>EUR</option>
                      </select>
                    </div>
                  }
                  type="number"
                  className="border rounded-lg "
                />
              </div>
              <div className="mt-10">
                <Input
                  label="You Receive"
                  placeholder="0.00"
                  labelPlacement="outside"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">$</span>
                    </div>
                  }
                  endContent={
                    <div className="flex items-center">
                      <label className="sr-only" htmlFor="currency">
                        Currency
                      </label>
                      <select
                        className="outline-none border-0 bg-transparent text-default-400 text-small"
                        id="currency"
                        name="currency"
                      >
                        <option>USD</option>
                        <option>ARS</option>
                        <option>EUR</option>
                      </select>
                    </div>
                  }
                  type="number"
                  className="border rounded-lg "
                />
              </div>
              <div className="absolute top-0 left-80">
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
              <div className="absolute top-0 right-80">
                <Image
                  src={"/hero-6.svg"}
                  isBlurred
                  alt="icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "45px", height: "auto" }}
                />
              </div>
              <div className="absolute bottom-0 right-80">
                <Image
                  src={"/hero-7.svg"}
                  isBlurred
                  alt="icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "45px", height: "auto" }}
                />
              </div>
              <div className="absolute bottom-0 left-80">
                <Image
                  src={"/hero-8.svg"}
                  isBlurred
                  alt="icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "45px", height: "auto" }}
                />
              </div>
              <div className="mt-6 text-center">
                <span>1BTC</span>
                <span> = </span>
                <span>91,919,580 Naira</span>
              </div>

              <div className="mt-10">
                <Button
                  variant="shadow"
                  size="lg"
                  // color="primary"
                  fullWidth
                  className="font-semibold bg-[#5275EC]   "
                >
                  Buy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
