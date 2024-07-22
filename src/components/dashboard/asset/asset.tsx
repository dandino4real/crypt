import { Image } from "@nextui-org/react";
import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import React from "react";
import Table from "../wallet/table";
import Chart from "@/components/chart/chart";

interface Currency {
  currency: string;
  balance: string;
  symbol: string;
}

const initialData: Currency[] = [
  {
    currency: "Tether",
    balance: "1234 USDT",
    symbol: "/tether.svg",
  },
  {
    currency: "Ethereum",
    balance: "0.01234 ETH",
    symbol: "/ethereum.svg",
  },
  {
    currency: "Bitcoin",
    balance: "0.0033 BTC",
    symbol: "/btc.svg",
  },
  {
    currency: "Binance Coin",
    balance: "3 BNB",
    symbol: "/tether.svg",
  },
];
interface AssetWalletProps {
  toggleDisplayWalletCard: () => void;
}

interface TransactionHistory {
  id: number;

  status: "withdraw" | "sold" | "purchased" | "deposit" | "swap";
  amount: string;
  date: string;
}

const transactionData: TransactionHistory[] = [
  {
    id: 1,

    status: "withdraw",
    amount: "0.00212 USDT",
    date: "01/07/2021",
  },
  {
    id: 2,

    status: "sold",
    amount: "0.00212 USDT",
    date: "01/07/2021",
  },
  {
    id: 3,

    status: "purchased",
    amount: "0.00212 USDT",
    date: "01/07/2021",
  },
  {
    id: 4,

    status: "deposit",
    amount: "0.00212 USDT",
    date: "01/07/2021",
  },
  {
    id: 5,

    status: "swap",
    amount: "0.00212 USDT",
    date: "01/07/2021",
  },
];

const AssetWallet = ({ toggleDisplayWalletCard }: AssetWalletProps) => {
  const [data, setData] = useState<Currency[]>(initialData);
  const [filteredData, setFilteredData] = useState<Currency[]>(initialData);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [hasMore, setHasMore] = useState<boolean>(true); // Assume more data initially available

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState<
    | "auto"
    | "center"
    | "top"
    | "top-center"
    | "bottom"
    | "bottom-center"
    | "custom-top-right"
  >("custom-top-right");

  const handlePlacementChange = (value: string) => {
    setModalPlacement(
      value as
        | "auto"
        | "center"
        | "top"
        | "top-center"
        | "bottom"
        | "bottom-center"
        | "custom-top-right"
    );
  };

  // Simulate loading more data
  const loadMoreData = () => {
    // In a real scenario, fetch more data from an API
    // For demonstration, appending the same initial data
    setData((prevData) => [...prevData, ...initialData]);
    setFilteredData((prevData) => [...prevData, ...initialData]);
    setHasMore(false); // In this example, only load once
  };

  // Filter data based on search term
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filteredResult = data.filter((item) =>
      item.currency.toLowerCase().includes(value)
    );
    setFilteredData(filteredResult);
  };

  return (
    <div className="relative bg-[#191c24] rounded-lg p-4 h-full ">
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className=" relative z-10">
        <div className="max-h-[520px] overflow-y-auto ">
          <div className=" flex justify-between">
            <p className=" plus-jakarta-sans-700 text-xl">Assets</p>
            <div className=" cursor-pointer" onClick={toggleDisplayWalletCard}>
              {" "}
              <Image
                src={"/show-assets.svg"}
                alt="exclamation icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "24px", height: "auto" }}
              />
            </div>
          </div>
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search currency..."
            value={searchTerm}
            onChange={handleSearch}
            className=" px-4 py-2 my-4 bg-gray-800 text-white  rounded-lg focus:outline-blue-700"
          />

          {/* Table */}
          <div className="max-h-[400px] overflow-y-auto">
            <table className="min-w-full  text-white ">
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index}>
                    <div className=" border border-gray-800 rounded-lg mt-2 flex justify-between items-center hover:border-blue-700 transition duration-300 ease-out plus-jakarta-sans-200">
                      <td className="px-4 py-2  ">
                        <div className="flex  items-center">
                          <Image
                            src={item.symbol}
                            alt={item.currency}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "20px", height: "auto" }}
                            className=" mr-2"
                          />
                          <div>
                            <div className="font-semibold ">
                              {item.currency}
                            </div>
                            <div className="text-[#5275EC]">{item.balance}</div>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 " onClick={onOpen}>
                        <div className="flex justify-end">
                          {" "}
                          <Image
                            src={"/next.svg"}
                            alt="exclamation icon"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "24px", height: "auto" }}
                            className=" cursor-pointer"
                          />
                        </div>
                      </td>
                    </div>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Infinite Scroll Indicator */}
          {hasMore && (
            <div className="flex justify-center p-4 mt-2">
              <button
                onClick={loadMoreData}
                className="text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 opacity-70"
              >
                Load more...
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        className={
          modalPlacement === "custom-top-right"
            ? "fixed top-0 right-0 m-0 p-0 min-h-screen  "
            : ""
        }
      >
        <Modal
          isOpen={isOpen}
          placement={
            modalPlacement === "custom-top-right" ? undefined : modalPlacement
          }
          onOpenChange={onOpenChange}
          className={
            modalPlacement === "custom-top-right"
              ? "absolute top-0 right-0 m-0 p-0 "
              : ""
          }
        >
          <ModalContent>
            {(onClose) => (
              <div className=" fixed top-0 min-h-screen bg-[#060912] px-5 ">
                <ModalHeader className="flex flex-col gap-2">
                  <div>
                    <div className="flex justify-end ">
                      <Image
                        src={"/close-modal.svg"}
                        alt="close icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "24px", height: "auto" }}
                        className="cursor-pointer"
                        onClick={onClose}
                      />
                    </div>
                    <div className=" flex flex-col items-center gap-4">
                      <p className=" plus-jakarta-sans-400">Tether coin</p>
                      <div>
                        <Image
                          src={"/tether.svg"}
                          alt="coin icon"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "30px", height: "auto" }}
                        />
                      </div>
                      <div>
                        <div className=" flex items-center gap-2">
                          <div>
                            <Image
                              src={"/convert.svg"}
                              alt="icon"
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "15px", height: "auto" }}
                            />
                          </div>
                          <p className="plus-jakarta-sans-400">1 USDT = 840,655 NGN</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ModalHeader>
                <ModalBody>



                  <div className="relative ">
                    <div className="absolute -top-2 left-6 flex justify-center mt-6 ">
                      <div
                        className="rounded-lg  relative py-4  px-9   "
                        style={{
                          backgroundImage: "url('/wallet-bg-5.png')",

                          // backgroundImage: "url('/wallet-bg-7.svg')",
                          backgroundSize: "auto",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div></div>

                        <div className=" relative z-10  flex flex-col items-center justify-center w-full gap-4 ">
                          <p className="text-2xl lato-900 text-[#3E455B] ">
                            Tether
                          </p>

                          <div>
                            <p className=" text:sm lato-700 text-center text-[#3E455B]">
                              {" "}
                              Balance :
                            </p>
                            <div className="flex gap-1 lato-900 justify-center items-center">
                              <p className="text-xl text-[#3E455B] ">
                 
                                1804
                              </p>
                              <p className="text-[#3E455B]">
                             
                                USDT
                              </p>

                         
                            </div>
                          </div>

                          <div className=" flex gap-10 plus-jakarta-sans-200 ">
                            <div> 
                              <Button
                                color="primary"
                                variant="bordered"
                                className="text-[#3E455B] lato-700"
                              >
                                Withdraw
                              </Button>
                            </div>
                            <div>
                              <Button
                                color="primary"
                                variant="shadow"
                                className="lato-700"
                              >
                                Deposit
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" flex justify-center mt-6 -z-10">
                    <div
                      className="rounded-lg  relative py-4 px-9 "
                      style={{
                        // backgroundImage: "url('/wallet-bg-5.png')",
                        backgroundImage: "url('/wallet-bg-7.svg')",
                        backgroundSize: "auto",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className=" relative z-10  flex flex-col items-center justify-center w-full gap-4 ">
                        {/* Skeleton for Tether text */}
                        <div className=" h-6 w-24 mb-2"></div>

                        {/* Skeleton for Balance and Amount */}
                        <div className="flex flex-col items-center">
                          <div className=" h-4 w-16 mb-2"></div>
                          <div className="flex gap-1 justify-center items-center">
                            <div className=" h-6 w-16"></div>
                            <div className=" h-6 w-12"></div>
                          </div>
                        </div>

                        {/* Skeleton for Buttons */}
                        <div className="flex gap-10">
                          <div className=" h-10 w-24 rounded"></div>
                          <div className=" h-10 w-24 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>










                  <div className="mt-6 bg-[#131B32] flex justify-between items-center py-4 px-4 rounded-lg plus-jakarta-sans-200 ">
                    <div className="flex flex-col items-center cursor-pointer hover:text-blue-500 transition duration-300 ease-out">
                      <Image
                        src="/withdrawal.svg"
                        alt="icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "20px", height: "auto" }}
                      />
                      <p>Withdraw</p>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer hover:text-blue-500 transition duration-300 ease-out">
                      <Image
                        src="/deposit.svg"
                        alt="icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "25px", height: "auto" }}
                      />
                      <p>Deposit</p>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer hover:text-blue-500 transition duration-300 ease-out">
                      <Image
                        src="/buy.svg"
                        alt="icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "25px", height: "auto" }}
                      />
                      <p>Buy</p>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer hover:text-blue-500 transition duration-300 ease-out">
                      <Image
                        src="/sell.svg"
                        alt="icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "25px", height: "auto" }}
                      />
                      <p>Sell</p>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer hover:text-blue-500 transition duration-300 ease-out">
                      <Image
                        src="/swap-icon.svg"
                        alt="icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "25px", height: "auto" }}
                      />
                      <p>Swap</p>
                    </div>
                  </div>

                  <div className=" mt-6 bg-[#131B32] p-4 rounded-lg plus-jakarta-sans-200 ">
                    <div className=" flex gap-8 items-center">
                      <p>USDT coin price</p>
                      <div className=" flex gap-2 items-center border border-r-gray-600 px-6 py-2 rounded-lg">
                        <div>
                          <Image
                            src={"/tether.svg"}
                            alt="coin icon"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "20px", height: "auto" }}
                          />
                        </div>

                        <p>USDT</p>
                      </div>
                    </div>

                    <div className="mt-2">
                      <Chart />
                    </div>
                  </div>

                  <div className=" mt-6">
                    <p className="plus-jakarta-sans-700">USDT Transaction History</p>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-800 rounded-lg mt-2">
                        <thead>
                          <tr className="bg-gray-800 text-white plus-jakarta-sans-400">
                            <th className="px-4 py-2 text-left">Status</th>
                            <th className="px-4 py-2 text-left">Amount</th>
                            <th className="px-4 py-2 text-left">Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {transactionData.map((transaction) => (
                            <tr
                              key={transaction.id}
                              className="border-b border-gray-800 hover:bg-gray-700 transition duration-300 ease-out plus-jakarta-sans-200"
                            >
                              <td className="px-4 py-2">
                                {transaction.status}
                              </td>
                              <td className="px-4 py-2">
                                {transaction.amount}
                              </td>
                              <td className="px-4 py-2">{transaction.date}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </div>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default AssetWallet;
