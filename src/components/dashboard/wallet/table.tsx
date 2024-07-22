"use client";

import Button from "@/components/shared/button/button";
import React, { useState, useEffect } from "react";
import axios from "@/api/axiosInstance";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { fetchWalletHistory } from "@/api/action";
import { Transaction } from "@/lib/types";
import TableSkeleton from "./table-skeleton";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button as NextButton,
  useDisclosure,
} from "@nextui-org/react";

interface TransactionHistory {
  id: number;
  symbol: string;
  currency: string;
  status: "withdraw" | "sold" | "purchased" | "deposit";
  amount: string;
  date: string;
}

const transactionData: TransactionHistory[] = [
  {
    id: 1,
    symbol: "/tether.svg",
    currency: "USDT",
    status: "withdraw",
    amount: "0.00212 USDT",
    date: "01/07/2021",
  },
  {
    id: 2,
    symbol: "/tether.svg",
    currency: "BNB",
    status: "sold",
    amount: "0.00212 BNB",
    date: "01/07/2021",
  },
  {
    id: 3,
    symbol: "/tether.svg",
    currency: "ETH",
    status: "purchased",
    amount: "0.00212 ETH",
    date: "01/07/2021",
  },
  {
    id: 4,
    symbol: "/tether.svg",
    currency: "BTC",
    status: "deposit",
    amount: "0.00212 BTC",
    date: "01/07/2021",
  },
  {
    id: 5,
    symbol: "/tether.svg",
    currency: "USDT",
    status: "withdraw",
    amount: "0.00212 USDT",
    date: "01/07/2021",
  },
];

interface TableProps {
  showFull: boolean;
}

const Table: React.FC<TableProps> = ({ showFull }) => {
  const [transactionHistory, setTransactionHistory] = useState<Transaction[]>(
    []
  );
  const [authToken, setAuthToken] = useState<string | null>(null);
  // const [showFull, setShowFull] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState<{
    [key: string]: any;
  } | null>(null);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const itemsPerPage = 5;

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["fetchWalletHistory", authToken, currentPage],
    queryFn: () => fetchWalletHistory(authToken, currentPage, itemsPerPage),
    enabled: !!authToken,
  });

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setAuthToken(token);
  }, []);

  useEffect(() => {
    if (data) {
      setTotalPages(data.meta.pages);
      const transformedData = data.data.map((history: any) => ({
        id: history.id,
        assetType: history.currency,
        walletName: truncateId(history.wallet),
        sender: truncateId(history.sender),
        receiver: truncateId(history.recipient),
        transHash: truncateId(history.txId),
        amount: `${history.amount} ${history.currency}`,
        status: history.status === "COMPLETED" ? "successful" : history.status,
        date: format(new Date(history.createdAt), "EEE dd-MMM-yyyy hh:mma"),
      }));

      setTransactionHistory(transformedData);
    }
  }, [data]);

  const headers = [
    "Asset Type",
    "Wallet Name",
    "Sender",
    "Receiver",
    "Trans Hash",
    "Amount",
    "Status",
    "Date",
  ];
  const header = ["Asset Type", "Amount", "Status", "Date", "Action"];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleRowClick = async (rowData: { [key: string]: any }) => {
    try {
      const response = await axios.get(
        `/api/v1/wallets/history/${rowData.id}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setSelectedRowData(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const truncateId = (id: string) => (id ? `${id.slice(0, 10)}...` : "null");

  return (
    <div className="relative bg-[#191c24] p-4 rounded-lg h-full ">
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {showFull && (
        <div className=" relative z-10 overflow-x-auto">
          <div className="overflow-x-auto  ">
            <table className="min-w-full divide-y divide-gray-500">
              <thead className="">
                <tr>
                  {headers.map((header) => (
                    <th
                      key={header}
                      className="px-6 py-3 text-left text-xs font-semibold tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              {isLoading && <TableSkeleton />}
              {/* {data?.data.length === 0 && (
     <tbody>
       <tr>
       <div className="border">

<Image
             src={"/history.svg"}
             alt="icon"
             width={0}
             height={0}
             sizes="100vw"
             style={{ width: "14px", height: "auto" }}
           />
       </div>
       </tr>

     </tbody>
       
     )} */}
              <tbody className="text-sm">
                {isError && (
                  <p className=" mt-10 p-4">Something went wrong ...</p>
                )}
                {data && data.data.length === 0 && (
                  <tr>
                    <td colSpan={headers.length} className="text-center py-4">
                      <div className="flex flex-col items-center mt-8">
                        <Image
                          src={"/history.svg"}
                          alt="No history icon"
                          width={64}
                          height={64}
                          className="mb-2"
                        />
                        <p>No transaction history available.</p>
                      </div>
                    </td>
                  </tr>
                )}

                {data &&
                  transactionHistory.map((row: Transaction, index: number) => (
                    <tr
                      key={index}
                      onClick={() => handleRowClick(row)}
                      className="cursor-pointer hover:opacity-60"
                    >
                      <td className="px-6 py-2 text-xs whitespace-nowrap">
                        {row.assetType}
                      </td>
                      <td className="px-6 py-2 text-xs whitespace-nowrap">
                        {truncateId(row.walletName)}
                      </td>
                      <td className="px-6 py-2 text-xs whitespace-nowrap">
                        {truncateId(row.sender)}
                      </td>
                      <td className="px-6 py-2 text-xs whitespace-nowrap">
                        {truncateId(row.receiver)}
                      </td>
                      <td className="px-6 py-2 text-xs whitespace-nowrap">
                        {truncateId(row.transHash)}
                      </td>
                      <td className="px-6 py-2 text-xs whitespace-nowrap">
                        {row.amount}
                      </td>
                      <td className="px-6 py-2 text-xs whitespace-nowrap">
                        {row.status}
                      </td>
                      <td className="px-6 py-2 text-xs whitespace-nowrap hover:text-gray-500">
                        {row.date}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <div className="flex justify-end gap-4 items-center mt-4">
              <button
                className={`btn btn-xs ${
                  currentPage === 1 ? "btn-disabled" : ""
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
              <span className="text-xs text-gray-500">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className={`btn btn-xs ${
                  currentPage === totalPages ? "btn-disabled" : ""
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </div>

            {isModalOpen && (
              <div className="modal modal-open">
                <div className="modal-box w-1/4 max-h-screen overflow-y-auto bg-[#26304E]">
                  <h3 className="text-sm font-bold text-center">
                    Transaction Summary
                  </h3>
                  <div className="flex justify-start gap-1 pt-4 pb-2 text-xs mb-2">
                    <p>Type :</p>
                    <p className="font-semibold capitalize">
                      {selectedRowData?.type}
                    </p>
                  </div>
                  <div className="flex flex-col text-xs p-4 rounded-lg bg-[#303A57]">
                    <div className="grid grid-cols-2">
                      <div>
                        <div className="text-[#949DB7]">Coin type</div>
                        <div>{selectedRowData?.currency}</div>
                      </div>
                      <div>
                        <div className="text-[#949DB7]">Transaction Date</div>
                        <div>
                          {format(
                            new Date(selectedRowData?.createdAt),
                            "EEE dd-MMM-yyyy hh:mma"
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="mt-4">
                        <div className="text-[#949DB7]">Status</div>
                        <div>
                          {selectedRowData?.status === "COMPLETED"
                            ? "successful"
                            : selectedRowData?.status}
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="text-[#949DB7]">Transaction ID</div>
                        <div className="break-words">{selectedRowData?.id}</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 text-xs mt-4">
                    <div>
                      <p className="text-[#949DB7]">Transaction Hash</p>
                      <p className="break-words">{selectedRowData?.txId}</p>
                    </div>
                    <div>
                      <p className="text-[#949DB7]">Transaction Network</p>
                      <p>{selectedRowData?.network}</p>
                    </div>
                    <div>
                      <p className="text-[#949DB7]">Total Amount</p>
                      <p>{selectedRowData?.amount}</p>
                    </div>
                    <div>
                      <p className="text-[#949DB7]">Transaction Fee (0.1%)</p>
                      <p>{selectedRowData?.paidFee}</p>
                    </div>
                    <div>
                      <p className="text-[#949DB7]">Transaction Amount</p>
                      <p>{selectedRowData?.amount}</p>
                    </div>
                  </div>
                  <div>
                    <Button text="Done" onClick={closeModal} />
                  </div>
                </div>
                <div className="modal-backdrop" onClick={closeModal}></div>
              </div>
            )}
          </div>
        </div>
      )}
      {!showFull && (
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-2">
            <h3 className="lato-700 xl:text-xl plus-jakarta-sans-700">
              Transaction history
            </h3>
            <div className="flex items-center gap-4 px-4 py-2 bg-[#181C1F] rounded-lg">
              <Image
                src="/calendar.svg"
                alt="calendar icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "16px", height: "auto" }}
              />
              <p>Today</p>
              <Image
                src="/filter.svg"
                alt="filter icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "16px", height: "auto" }}
              />
            </div>
          </div>

          <table className="min-w-full divide-y divide-gray-500">
            <thead>
              <tr>
                {header.map((headerItem) => (
                  <th
                    key={headerItem}
                    className="py-3 text-left tracking-wider plus-jakarta-sans-400"
                  >
                    {headerItem}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transactionData.map((row, index) => (
                <tr
                  key={index}
                  // onClick={() => handleRowClick(row)}
                  className=" hover:opacity-60 plus-jakarta-sans-200"
                >
                  <td className="py-4 whitespace-nowrap text:sm flex gap-2 text-left ">
                    <Image
                      src={row.symbol}
                      alt="filter icon"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "16px", height: "auto" }}
                    />
                    <p>{row.currency}</p>
                  </td>
                  <td className=" py-2 text:sm  whitespace-nowrap text-left ">
                    {row.amount}
                  </td>
                  <td className=" py-2 text:sm  whitespace-nowrap text-left">
                    {row.status}
                  </td>
                  <td className=" py-2 text:sm whitespace-nowrap text-left">
                    {row.date}
                  </td>
                  <td className="py-2 text:sm  whitespace-nowrap text-left">
                    <div
                      className="flex  justify-center gap-2 border border-[#699BF7] py-2 px-2 rounded-lg cursor-pointer "
                      onClick={onOpen}
                    >
                      <p> view</p>
                      <Image
                        src={"/view.svg"}
                        alt="icon"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "16px", height: "auto" }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end gap-4 items-center mt-6">
            <button
              className={`btn btn-xs ${
                currentPage === 1 ? "btn-disabled" : ""
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
            <span className="text-xs text-gray-500">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className={`btn btn-xs ${
                currentPage === totalPages ? "btn-disabled" : ""
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
          <div>
            <>
             
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className=" my-6 bg-[#131B32]">
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col items-center gap-1 plus-jakarta-sans-400 ">
                        Trasaction History
                      </ModalHeader>
                      <ModalBody className="mb-6">
                        <p>Type : Purchase</p>
                        <div className=" grid grid-cols-2 grid-rows-2 gap-4  bg-[#202840] p-4 text-sm plus-jakarta-sans-200 rounded-lg">
                          <div>
                            <p className="opacity-75">Currency</p>
                            <div className=" flex items-center gap-1">
                              <Image
                                src="/tether.svg"
                                alt="coin icon"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "16px", height: "auto" }}
                              />
                              <p>Tether</p>
                            </div>
                          </div>
                          <div>
                            <p className="opacity-75">Transaction Date</p>
                            <p>February 21, 2024</p>
                          </div>
                          <div>
                            <p className="opacity-75">Status</p>
                            <p className="text-[#0FA958] inline-block bg-[#3b674f] px-2 py-1 rounded-lg">completed</p>
                          </div>
                          <div>
                            <p className="opacity-75">Transaction Amount</p>
                            <p>8.600.99 USDT</p>
                          </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3 text-sm plus-jakarta-sans-200">
                          <div className="opacity-75">Transaction ID :</div>
                          <div>665f0808d9b1c988de65aa97</div>
                          <div className="opacity-75">
                            Transaction Network :
                          </div>
                          <div>ERC20</div>
                          <div className="opacity-75">Transaction Hash :</div>
                          <div>x66551cdaa1def9c0dd4c1598</div>
                          <div className="opacity-75">Sender Address :</div>
                          <div >
                            2NDyUi1S9ba9B2JgSE39gZQ BGbdxQyp5fXX
                          </div>
                          <div className="opacity-75">Recipient Address :</div>
                          <div>2NDyUi1S9ba9B2JgSE39gZQ BGbdxQyp5fXX</div>
                          <div className="opacity-75">Paid Fee :</div>
                          <div>8799.87976667USDT</div>
                          <div className="opacity-75">
                            Platform Fee (0.1%) :
                          </div>
                          <div>0.879967689097 USDT</div>
                          <div className="opacity-75">Network Fee (0.1%) :</div>
                          <div>0.879967689097 USDT</div>
                          <div className="opacity-75">Description :</div>
                          <div>XXXXXXXXXXXXXXXX</div>
                        </div>
                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
