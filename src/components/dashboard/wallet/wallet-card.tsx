// "use client";

// import Image from "next/image";

// import { SetStateAction, useState } from "react";
// import Button from "@/components/shared/button/button";
// import {
//   useAddWithdrawalDetails,
//   useGetAssetTotalBalance,
//   useGetCoinData,
//   useGetCoinPrices,
//   useGetWalletAddress,
//   useGetWalletData,
// } from "@/app/hooks/useWalletData";

// import {
//   Coin,
//   Network,
//   TransformedNetwork,
//   WithdrawData,
//   WalletCardProps,
// } from "@/app/types";
// import ModalSkeleton from "./wallet-skeleton";
// import SkeletonLoader from "./loader-skeleton";

// export default function WalletCard({ showAction, showCoin }: WalletCardProps) {
//   const [selectedNetworkSymbol, setSelectedNetworkSymbol] =
//     useState<string>("");

//   const [selectedCoinSymbol, setSelectedCoinSymbol] = useState<string>("");
//   const [isFlag, setIsFlag] = useState(false);

//   const [selectedCurrency, setSelectedCurrency] = useState("USD");
//   const [isDepositModalOpen, setDepositModalOpen] = useState(false);
//   const [isDepositAddressModalOpen, setDepositAddressModalOpen] =
//     useState(false);
//   const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);

//   const [symbol, setSymbol] = useState("");
//   const [coinURl, setCoinUrl] = useState("");
//   const [coinLogo, setCoinLogo] = useState("");
//   const [isCopied, setIsCopied] = useState(false);
//   const [coin, setCoin] = useState("");
//   const [networkType, setNetworkType] = useState("");
//   const [buttonText, setButtonText] = useState("Submit");
//   const [withdrawalNetwork, setWithdrawalNetwork] = useState("");
//   const [showTotalWithdrawalAmount, setShowTotalWithdrawalAmount] =
//     useState(false);

//   const [withdrawData, setWithDrawData] = useState<WithdrawData>({
//     currency: "",
//     amount: 0,
//     network: "",
//     recipient: "",
//   });

//   const [errorMessage, setErrorMessage] = useState("");
//   const [errorWithdrawalMessage, setErrorWithdrawalMessage] = useState("");
//   const [toast, setToast] = useState(false);

//   const openDepositModal = () => setDepositModalOpen(true);
//   const closeDepositModal = () => setDepositModalOpen(false);
//   const openDepositAddressModal = () => setDepositAddressModalOpen(true);
//   const closeDepositAddressModal = () => setDepositAddressModalOpen(false);
//   const openWithdrawModal = () => setWithdrawModalOpen(true);
//   const closeWithdrawModal = () => setWithdrawModalOpen(false);

//   //   const { data: mutateData, mutate } = useMutation({
//   //   mutationFn: postWithdrawData,
//   // });

//   const { data: coinData } = useGetCoinData();
//   const { data: coinPrices, isLoading } = useGetCoinPrices();
//   const { data: walletData } = useGetWalletData();
//   const {
//     data: address,
//     isLoading: isWalletAddressLoading,
//     isSuccess,
//     refetch,
//   } = useGetWalletAddress(symbol, networkType);

//   const closeToast = () => {
//     setTimeout(() => {
//       setToast(false);
//     }, 3000);
//   };

//   const onSuccess = (data: any) => {
//     setTimeout(() => {
//       setToast(true);
//       closeToast();
//       closeWithdrawModal();
//     }, 3000);
//   };

//   const {
//     data: mutateData,
//     mutate,
//     isPending,
//     isSuccess: isWithdraSuccess,
//   } = useAddWithdrawalDetails(onSuccess);

//   const handleCurrencyChange = (event: {
//     target: { value: SetStateAction<string> };
//   }) => {
//     setSelectedCurrency(event.target.value);
//   };

//   const handleReset = (coinSymbol: string) => {
//     setErrorMessage("");
//     setWithdrawalNetwork("");
//     setSelectedNetworkSymbol("");
//     closeDepositAddressModal();

//     setWithDrawData({
//       currency: coinSymbol,
//       amount: 0,
//       network: "",
//       recipient: "",
//     });
//     setShowTotalWithdrawalAmount(false);
//   };

//   const handleNetworkTypeChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setErrorMessage("");
//     const selectedSymbol = event.target.value;
//     setNetworkType(selectedSymbol);
//     const selectedNetwork = networks.find(
//       (network: Network) => network.symbol === selectedSymbol
//     );

//     if (selectedNetwork) {
//       setSelectedNetworkSymbol(selectedNetwork.networkSymbol);
//     } else {
//       setSelectedNetworkSymbol("");
//     }
//   };

//   const handleWithdrawDataChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = event.target;
//     if (name === "amount") {
//       const numericValue = Number(value);
//       if (numericValue < 0) {
//         setErrorMessage("Amount cannot be negative.");
//         return;
//       }
//     }

//     if (name === "network") {
//       handleNetworkTypeChange(event);

//       setWithdrawalNetwork(value);
//     }
//     setWithDrawData((prevData) => ({
//       ...prevData,
//       [name]: name === "amount" ? Number(value) : value,
//     }));

//     setErrorWithdrawalMessage("");
//   };

//   const validateFields = () => {
//     const { network, recipient, amount } = withdrawData;
//     if (!network || !recipient || !amount) {
//       setErrorWithdrawalMessage(
//         "Please fill in all fields before proceeding with the withdrawal."
//       );
//       return false;
//     }
//     return true;
//   };

//   const handleWithdrawal = () => {
//     mutate(withdrawData);
//   };

//   const handleSubmitWithdrawalDetails = () => {
//     if (validateFields()) {
//       setShowTotalWithdrawalAmount(true);
//       setButtonText("Proceed Withdrawal");
//     }
//   };
//   const handleButtonClick = () => {
//     if (buttonText === "Proceed Withdrawal") {
//       handleWithdrawal();
//     } else {
//       handleSubmitWithdrawalDetails();
//     }
//   };

//   const handleCopy = () => {
//     const walletAddress = address?.addressLower;
//     if (walletAddress) {
//       navigator.clipboard.writeText(walletAddress).then(() => {
//         setIsCopied(true);
//         setTimeout(() => setIsCopied(false), 2000);
//       });
//     }
//   };

//   const sortedData = coinData
//     ?.map((coin: { symbol: string }) => {
//       const asset = walletData?.assets.find(
//         (asset: { currency: string }) => asset.currency === coin.symbol
//       );
//       const balance = asset ? asset.availableBalance : 0;
//       return { ...coin, balance };
//     })
//     .sort(
//       (a: { balance: number }, b: { balance: number }) => b.balance - a.balance
//     );

//   const transformedCoinData =
//     coinData?.map((coin: Coin) => ({
//       symbol: coin.symbol,
//       networks: coin.networks.map((network: Network) => ({
//         symbol: network.symbol,
//         networkSymbol: network.logoUrl,
//         networkWithdrawalFee: network.networkConfig.withdrawalFee,
//         networkDepositFee: network.networkConfig.depositFee,
//         minimumWithdrawal: network.networkConfig.minimumWithdrawal,
//       })),
//     })) || [];

//   const handleCoinChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedCoin = event.target.value;
//     setSelectedCoinSymbol(selectedCoin);
//     const foundCoin = coinData.find(
//       (coin: Coin) => coin.symbol === selectedCoin
//     );

//     if (foundCoin) {
//       setCoinLogo(foundCoin.logoUrl);
//     } else {
//       setCoinLogo("");
//     }
//   };

//   // const handleSubmit = async () => {
//   //   setIsFlag(true)
//   //   if (!selectedNetworkSymbol) {
//   //     setErrorMessage("Please select a network type before continuing.");
//   //     return;
//   //   }

//   //   refetch();

//   //   // if (address?.address) {
//   //   //   openDepositAddressModal();
//   //   //   closeDepositModal();
//   //   // }
//   // };

//   const handleSubmit = async () => {
//     refetch();

//     setDepositAddressModalOpen(true);
//     setDepositModalOpen(false);
//     // setIsFlag(true)
//     // if (!selectedNetworkSymbol) {
//     //   setErrorMessage("Please select a network type before continuing.");
//     //   return;
//     // }

//     // if (address?.address) {
//     //   openDepositAddressModal();
//     //   closeDepositModal();
//     // }
//   };

//   const transformednetworks = transformedCoinData.filter(
//     (network: Network) => network.symbol === symbol
//   );
//   const netwrk = transformednetworks[0];
//   const networks = netwrk?.networks;

//   const networkFee = networks?.find(
//     (network: Network) => network.symbol === withdrawalNetwork
//   );

//   return (
//     <div>
//       <div className="p-2 border-b border-b-slate-500 font-semibold flex justify-between">
//         <h2>Assets</h2>

//         {coinData && (
//           <div>
//             <select
//               className="px-3 py-2 rounded-lg text-xs font-normal bg-[#1A1E28] "
//               value={selectedCurrency}
//               onChange={handleCurrencyChange}
//             >
//               <option value="USD">Display in USD</option>
//               <option value="NGN">Display in NGN</option>
//             </select>
//           </div>
//         )}
//       </div>

//       {isLoading ? (
//         <div className="carousel carousel-center w-full p-4 space-x-10  rounded-box mt-2 bg-[#0A0C0F]">
//           {[...Array(5)].map((_, index) => (
//             <SkeletonLoader key={index} />
//           ))}
//         </div>
//       ) : (
//         <div className="carousel carousel-center w-full p-4 space-x-10  rounded-box mt-2 bg-[#0A0C0F]">
//           {coinPrices &&
//             sortedData?.map(
//               (coin: { name: string; symbol: string; logoUrl: string }) => {
//                 const priceInfo = coinPrices[coin.symbol];
//                 const asset = walletData?.assets.find(
//                   (asset: { currency: string }) =>
//                     asset.currency === coin.symbol
//                 );

//                 const balance = asset ? asset.availableBalance : 0;

//                 if (!priceInfo) {
//                   console.warn(`No price info found for ${coin.symbol}`);
//                   return null;
//                 }

//                 return (
//                   <div
//                     key={coin.symbol}
//                     className="bg-[#1A1F30] p-4 rounded-lg carousel-item "
//                   >
//                     <div className="text-xs">
//                       <div className="flex justify-between items-center border-b border-b-gray-500 pb-2">
//                         <div>
//                           <div className="flex gap-2 items-center">
//                             <Image
//                               src={coin.logoUrl}
//                               alt={`${coin.symbol} icon`}
//                               width={20}
//                               height={20}
//                               sizes="100vw"
//                               style={{ width: "20px", height: "auto" }}
//                             />
//                             <p>{coin.name}</p>
//                           </div>
//                           <div className="flex gap-1 items-center mt-1">
//                             <div>1{coin.symbol}</div>
//                             <div>
//                               <Image
//                                 src="/conversion.svg"
//                                 alt="icon"
//                                 width={10}
//                                 height={10}
//                                 sizes="100vw"
//                                 style={{ width: "10px", height: "auto" }}
//                               />
//                             </div>

//                             <div>
//                               {selectedCurrency === "USD"
//                                 ? priceInfo.usd + " " + "USD"
//                                 : priceInfo.ngn + " " + "NGN"}
//                             </div>
//                           </div>
//                         </div>

//                         <div>
//                           {showAction && (
//                             <div className="dropdown dropdown-bottom dropdown-end">
//                               <div
//                                 tabIndex={0}
//                                 role="button"
//                                 className="px-4 hover:bg-blue-900 rounded-full py-2 transition-all duration-500 ease-in-out tooltip tooltip-bottom hover:tooltip-open "
//                                 data-tip="Deposit/Withdraw"
//                                 onClick={() => {
//                                   setSymbol(coin.symbol);
//                                   setCoinUrl(coin.logoUrl);
//                                   setButtonText("Submit");
//                                   // setIsFlag(false)
//                                   // closeDepositAddressModal()
//                                   setCoinLogo("");
//                                   handleReset(coin.symbol);
//                                 }}
//                               >
//                                 <Image
//                                   src={"/dots.svg"}
//                                   alt="dots icon"
//                                   width={0}
//                                   height={0}
//                                   sizes="100vw"
//                                   style={{ width: "4px", height: "auto" }}
//                                 />
//                               </div>
//                               <ul
//                                 tabIndex={0}
//                                 className="dropdown-content z-[1] menu p-2 shadow rounded-box w-44 bg-[#26304E]"
//                               >
//                                 <li className="hover:opacity-70">
//                                   <button onClick={openDepositModal}>
//                                     Deposit
//                                   </button>
//                                 </li>
//                                 <li className="hover:opacity-70">
//                                   <button onClick={openWithdrawModal}>
//                                     Withdraw
//                                   </button>
//                                 </li>
//                               </ul>
//                             </div>
//                           )}
//                         </div>
//                       </div>

//                       <div className="grid grid-cols-2 gap-6 mt-2">
//                         <div className=" col-span-1 flex flex-col justify-center">
//                           <p>Balance :</p>
//                           <p className="text-sm text-gradient">
//                             {balance} <span>{coin.symbol}</span>
//                           </p>
//                         </div>
//                         <div className=" col-span-1 flex flex-col gap-4 text-xs">
//                           <div>
//                             <p className="text-[#949DB7]">Market cap</p>
//                             <p className="text-xs">
//                               {selectedCurrency === "USD"
//                                 ? priceInfo.usd_market_cap.toFixed(2) + " USD"
//                                 : priceInfo.ngn_market_cap.toFixed(2) + " NGN"}
//                             </p>
//                           </div>
//                           <div>
//                             <p className="text-[#949DB7]">24H vol</p>
//                             <p className="text-xs">
//                               {selectedCurrency === "USD"
//                                 ? priceInfo.usd_24h_vol.toFixed(2) + " USD"
//                                 : priceInfo.ngn_24h_vol.toFixed(2) + " NGN"}
//                             </p>
//                           </div>
//                           <div>
//                             <p className="text-[#949DB7]">24H change</p>
//                             <p
//                               className={`text-xs ${
//                                 priceInfo.usd_24h_change < 0
//                                   ? "text-red-500"
//                                   : "text-green-500"
//                               }`}
//                             >
//                               {selectedCurrency === "USD"
//                                 ? (priceInfo.usd_24h_change > 0 ? "+" : "") +
//                                   priceInfo.usd_24h_change.toFixed(2) +
//                                   "%"
//                                 : (priceInfo.ngn_24h_change > 0 ? "+" : "") +
//                                   priceInfo.ngn_24h_change.toFixed(2) +
//                                   "%"}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               }
//             )}
//         </div>
//       )}

//       {isDepositModalOpen && (
//         <div className="modal modal-open">
//           <div className="modal-box w-1/3 bg-[#26304E] max-h-screen overflow-y-auto">
//             <h3 className="text-sm font-semibold  flex gap-2 justify-center">
//               Deposit{" "}
//               <span className="flex gap-2">
//                 <Image
//                   src={coinURl}
//                   alt="coinIcon"
//                   width={0}
//                   height={0}
//                   sizes="100vw"
//                   style={{ width: "20px", height: "auto" }}
//                 />
//                 <p>{symbol}</p>
//               </span>{" "}
//               from wallet
//             </h3>

//             {showCoin && (
//               <>
//                 <p className="pt-4 pb-2 text-xs px-4">From</p>
//                 <div className="flex gap-20 px-4">
//                   <div className="flex items-center rounded-md  w-full py-2 px-4 bg-[#1A1F30] ">
//                     <div className="flex items-center gap-2 text-sm ">
//                       {coinLogo && (
//                         <span className="pe-2">
//                           <Image
//                             src={coinLogo}
//                             alt="coin icon"
//                             width={20}
//                             height={20}
//                             sizes="100vw"
//                             style={{ width: "20px", height: "auto" }}
//                           />
//                         </span>
//                       )}
//                     </div>

//                     <select
//                       className="select-xs select-bordered w-full max-w-xs text-xs bg-[#1A1F30]  "
//                       onChange={handleCoinChange}
//                     >
//                       <option value="">Select coin</option>
//                       {coinData.map((coin: Coin, index: number) => (
//                         <option key={index} value={coin.symbol}>
//                           {coin.symbol}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               </>
//             )}

//             <div className="flex justify-between mt-4 pt-6 pb-2 text-xs px-4 ">
//               <p>Transfer Network type </p>
//               <p className=" opacity-70">
//                 Deposit fee: <span>{networks[0]?.networkDepositFee}</span>{" "}
//                 <span>{symbol}</span>
//               </p>
//             </div>

//             <div className="flex gap-20 px-4">
//               <div className="flex items-center rounded-md  w-full py-3 px-4 bg-[#1A1F30] ">
//                 {selectedNetworkSymbol && (
//                   <span className="pe-2">
//                     <Image
//                       src={selectedNetworkSymbol}
//                       alt="Network Icon"
//                       width={20}
//                       height={20}
//                       sizes="100vw"
//                       style={{ width: "20px", height: "auto" }}
//                     />
//                   </span>
//                 )}
//                 <select
//                   className="select-xs select-bordered w-full max-w-xs text-xs bg-[#1A1F30] text-[#616C8F]"
//                   onChange={handleNetworkTypeChange}
//                 >
//                   <option value="">Select network</option>
//                   {networks.map((network: Network, index: number) => (
//                     <option key={index} value={network.symbol}>
//                       {network.symbol}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {errorMessage && (
//               <p className="px-4 py-1 text-red-500 text-xs text-end">
//                 {errorMessage}
//               </p>
//             )}

//             <div className=" px-4">
//               {/* <Button text={ isFlag ? "Processing..." : "Continue"} onClick={handleSubmit} /> */}
//               <Button text="Continue" onClick={handleSubmit} />
//             </div>
//           </div>
//           <div className="modal-backdrop" onClick={closeDepositModal}></div>
//         </div>
//       )}

//       {isDepositAddressModalOpen && (
//         <>
//           {isWalletAddressLoading ? (
//             <ModalSkeleton />
//           ) : isSuccess ? (
//             // Success modal
//             <div className="modal modal-open">
//               <div className="modal-box w-1/3 bg-[#26304E] max-h-screen overflow-y-auto ">
//                 <h3 className="text-sm font-semibold  flex gap-2 justify-center mt-6">
//                   Deposit{" "}
//                   <span className="flex gap-2">
//                     <Image
//                       src={coinURl}
//                       alt="coinIcon"
//                       width={0}
//                       height={0}
//                       sizes="100vw"
//                       style={{ width: "20px", height: "auto" }}
//                     />
//                     <p>{symbol}</p>
//                   </span>{" "}
//                   to A1-swapify
//                 </h3>

//                 <div className="flex   bg-[#434E6E] py-2 px-2 rounded-lg mt-8">
//                   <Image
//                     src={"/exclamation.svg"}
//                     alt="coinIcon"
//                     width={0}
//                     height={0}
//                     sizes="100vw"
//                     style={{ width: "15px", height: "auto" }}
//                   />
//                   <p className="text-xs text-wrap text-center  px-1 mt-2 text-[#949DB7]">
//                     Only transfer <span>{symbol}</span> to this address. Any
//                     other assets might be lost forever.
//                   </p>
//                 </div>

//                 {showCoin && (
//                   <>
//                     <p className="pt-4 pb-2 text-xs px-4">From</p>
//                     <div className="flex gap-20 px-4">
//                       <div className="flex items-center rounded-md  w-full py-2 px-4 bg-[#1A1F30] ">
//                         <div className="flex items-center gap-2 text-sm ">
//                           {coinLogo && (
//                             <span className="pe-2">
//                               <Image
//                                 src={coinLogo}
//                                 alt="coin icon"
//                                 width={20}
//                                 height={20}
//                                 sizes="100vw"
//                                 style={{ width: "20px", height: "auto" }}
//                               />
//                             </span>
//                           )}
//                         </div>

//                         <select
//                           className="select-xs select-bordered w-full max-w-xs text-xs bg-[#1A1F30]  "
//                           onChange={handleCoinChange}
//                         >
//                           <option value="">Select coin</option>
//                           {coinData.map((coin: Coin, index: number) => (
//                             <option key={index} value={coin.symbol}>
//                               {coin.symbol}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                     </div>
//                   </>
//                 )}

//                 <p className="pt-6 pb-2 text-xs px-4">Transfer Network type </p>
//                 <div className="flex gap-20 px-4">
//                   <div className="flex justify-center items-center rounded-md  w-full py-2 px-4 bg-[#3E455B] ">
//                     {selectedNetworkSymbol && (
//                       <div className="flex justify-center">
//                         <div className="pe-2">
//                           <Image
//                             src={selectedNetworkSymbol}
//                             alt="Network Icon"
//                             width={0}
//                             height={0}
//                             sizes="100vw"
//                             style={{ width: "20px", height: "auto" }}
//                           />
//                         </div>
//                         <p className="text-sm opacity-70">{networkType}</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {coinData && (
//                   <div className="pt-2  mt-4 ">
//                     <div className="flex flex-col items-center text-xs">
//                       <p className="mt-4 mb-2 text-xs opacity-70">
//                         Scan QR code to Deposit
//                       </p>
//                       {address?.qrCode && (
//                         <Image
//                           src={address?.qrCode}
//                           alt="QR code for deposit address"
//                           width={0}
//                           height={0}
//                           sizes="100vw"
//                           style={{ width: "120px", height: "auto" }}
//                         />
//                       )}
//                       <div className="flex items-center gap-2 mt-6">
//                         <p>{address?.addressLower}</p>
//                         <button
//                           className="px-4 py-2  text-white rounded bg-[#2E5FFF] "
//                           onClick={handleCopy}
//                         >
//                           <div className="flex gap-2 items-center">
//                             <p>{isCopied ? "Copied!" : "Copy"}</p>
//                             <div>
//                               <Image
//                                 src={"/copy.svg"}
//                                 alt="copy icon"
//                                 width={0}
//                                 height={0}
//                                 sizes="100vw"
//                                 style={{ width: "20px", height: "auto" }}
//                               />
//                             </div>
//                           </div>
//                         </button>
//                       </div>
//                     </div>

//                     <div className="mt-6 mb-3 flex justify-center items-center ">
//                       <Image
//                         src={"/A1-swapify.png"}
//                         alt="copy icon"
//                         width={0}
//                         height={0}
//                         sizes="100vw"
//                         style={{ width: "70px", height: "auto" }}
//                       />
//                       <p>A1-swapify</p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <div
//                 className="modal-backdrop"
//                 onClick={closeDepositAddressModal}
//               ></div>
//             </div>
//           ) : (
//             <div className="modal modal-open">
//               <div className="modal-box w-1/3 bg-[#26304E] max-h-screen overflow-y-auto">
//                 <h3 className="text-sm font-semibold flex gap-2 justify-center mt-6">
//                   Deposit{" "}
//                   <span className="flex gap-2">
//                     <Image
//                       src={coinURl}
//                       alt="coinIcon"
//                       width={0}
//                       height={0}
//                       sizes="100vw"
//                       style={{ width: "20px", height: "auto" }}
//                     />
//                     <p>{symbol}</p>
//                   </span>{" "}
//                   to A1-swapify
//                 </h3>
//                 {/* Add more content for the initial state or other states if needed */}
//               </div>
//               <div
//                 className="modal-backdrop"
//                 onClick={closeDepositAddressModal}
//               ></div>
//             </div>
//           )}
//         </>
//       )}

//       {isWithdrawModalOpen && (
//         <div className="modal modal-open ">
//           <div className="modal-box w-1/3 min-h-[90vh] max-h-screen bg-[#26304E] ">
//             <div className="flex items-center gap-2 text-sm justify-center font-semibold">
//               <p>WithDraw</p>
//               <div className="flex items-center gap-2">
//                 <Image
//                   src={coinURl}
//                   alt="coinIcon"
//                   width={0}
//                   height={0}
//                   sizes="100vw"
//                   style={{ width: "20px", height: "auto" }}
//                 />
//                 <p>{symbol}</p>
//               </div>
//               <p> From Wallet</p>
//             </div>

//             {/* <p className="pt-4 pb-2 text-xs px-4">From</p>

//             <div className="flex gap-20 px-4">
//               <div className="flex items-center rounded-md w-full py-2 px-4 bg-[#1A1F30]">
//                 <div className="flex items-center gap-2 text-xs ">
//                   <Image
//                     src={"/bitcoin.svg"}
//                     alt="alt-coin"
//                     width={0}
//                     height={0}
//                     sizes="100vw"
//                     style={{ width: "24px", height: "auto" }}
//                   />
//                 </div>

//                 <select
//                   className="select-xs select-bordered w-full max-w-xs text-xs bg-[#1A1F30]"
//                   name="currency"
//                   onChange={handleWithdrawDataChange}
//                 >
//                   <option value="">Select coin</option>

//                   {coinData.map((coin: Coin, index: number) => (
//                     <option key={index} value={coin.symbol}>
//                       {coin.symbol}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div> */}

//             <div className="flex justify-between pt-6 pb-2 text-xs px-4 mt-4">
//               <p className="">Transfer Network type </p>
//               {withdrawalNetwork && (
//                 <p className="opacity-70">
//                   Network fee: <span>{networkFee?.networkWithdrawalFee} </span>{" "}
//                   <span>{symbol}</span>
//                 </p>
//               )}
//             </div>

//             <div className="flex px-4">
//               <div className="flex items-center rounded-lg w-full py-2  bg-[#1A1F30] pe-1 ">
//                 {selectedNetworkSymbol && (
//                   <span className="ps-2">
//                     <Image
//                       src={selectedNetworkSymbol}
//                       alt="Network Icon"
//                       width={20}
//                       height={20}
//                       sizes="100vw"
//                       style={{ width: "20px", height: "auto" }}
//                     />
//                   </span>
//                 )}
//                 <select
//                   className="select-xs select-bordered w-full max-w-xs text-xs bg-[#1A1F30] text-[#616C8F]"
//                   name="network"
//                   // onChange={handleNetworkTypeChange}
//                   onChange={handleWithdrawDataChange}
//                 >
//                   <option value="">Choose transfer network type</option>

//                   {networks.map((network: Network, index: number) => (
//                     <option key={index} value={network.symbol}>
//                       {network.symbol}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* <div className="flex gap-20 px-4">
//               <div className="flex items-center rounded-lg w-full  bg-[#1A1F30] ">
//                 <select
//                   className="select-xs select-bordered w-full  text-xs bg-[#1A1F30] text-[#616C8F] h-10 rounded-lg "
//                   name="network"
//                   onChange={handleWithdrawDataChange}
//                 >
//                   <option value="">Choose transfer network type</option>

//                   {networks.map((network: Network, index: number) => (
//                     <option key={index} value={network.symbol}>
//                       {network.symbol}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div> */}

//             <div className="px-4">
//               <p className="pt-6 pb-2 text-xs ">To recipient wallet address </p>
//               <input
//                 type="text"
//                 name="recipient"
//                 value={withdrawData.recipient}
//                 className="w-full text-xs py-3 px-3 rounded-lg bg-[#1A1F30]  placeholder:text-xs "
//                 placeholder={`Enter ${symbol} recipient address`}
//                 onChange={handleWithdrawDataChange}
//               />
//             </div>

//             <div className="px-4">
//               <div className="pt-6 pb-2 text-xs flex justify-between">
//                 <p>Amount </p>
//                 <p className="opacity-70">
//                   Withdrawal fee:
//                   <span>{networks[0]?.networkWithdrawalFee} </span>
//                   <span>{symbol}</span>
//                 </p>
//               </div>
//               <input
//                 type="number"
//                 name="amount"
//                 value={withdrawData.amount}
//                 className="w-full text-xs py-3 px-3 rounded-lg bg-[#1A1F30] text-[#616C8F] placeholder:text-xs"
//                 placeholder="type amount"
//                 onChange={handleWithdrawDataChange}
//               />
//               <div>
//                 <p className="text-xs mt-2 opacity-70">
//                   <span>Min amount:</span>
//                   <span>{networks[0]?.minimumWithdrawal}</span>{" "}
//                   <span>{symbol}</span>
//                 </p>
//               </div>
//             </div>

//             {showTotalWithdrawalAmount && (
//               <div className=" mt-8 mx-6">
//                 <div className="bg-[#314175] p-4 text-xs rounded-lg">
//                   <div className="flex justify-around">
//                     <p>Total withdrawal amount :</p>
//                     <p>0.000 {symbol}</p>
//                   </div>
//                 </div>
//                 <p className="text-xs opacity-65 pt-1">
//                   This is your final transaction amount excluding charges
//                 </p>
//               </div>
//             )}

//             {errorWithdrawalMessage && (
//               <p className="px-4 text-red-500 text-xs mt-4">
//                 {errorWithdrawalMessage}
//               </p>
//             )}

//             <h3 className="text-center text-xs mt-6 pb-1 border-b border-b-gray-500 opacity-90 ">
//               Disclaimer
//             </h3>
//             <p className="text-xs text-center px-1 mt-2 opacity-70">
//               Please make sure the destination address is correct, a withdrawal
//               request cannot be cancelled after submission.
//             </p>

//             <Button
//               text={
//                 isPending ? (
//                   <div className="flex items-center gap-1 justify-center text-sm">
//                     <p>Processing</p>
//                     <span className="loading loading-dots loading-xs px-2"></span>
//                   </div>
//                 ) : (
//                   <p className=" text-sm">Proceed Withdrawal</p>
//                 )
//               }
//               onClick={handleButtonClick}
//             />
//           </div>
//           <div className="modal-backdrop" onClick={closeWithdrawModal}></div>
//         </div>
//       )}
//       {toast && (
//         <div className="toast toast-top toast-end">
//           <div className="alert alert-success">
//             <span>Transaction successfully processed:</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { Button } from "@nextui-org/button";
import Image from "next/image";
// import { Image } from "@nextui-org/react";

import { useState } from "react";

interface Wallet {
  coinName: string;
  currency: string;
  balance: number;
  symbol: string;
}

const walletData: Wallet[] = [
  {
    coinName: "Tether",
    currency: "USDT",
    balance: 1343,
    symbol: "/tether.svg",
  },
  {
    coinName: "Ethereum",
    currency: "ETH",
    balance: 0.0142,
    symbol: "/ethereum.svg",
  },
  {
    coinName: "BitCoin",
    currency: "BTC",
    balance: 0.00327,
    symbol: "/btc.svg",
  },
  {
    coinName: "Binance Coin",
    currency: "BNB",
    balance: 3,
    symbol: "/tether.svg",
  },
];

export default function WalletCard({}) {
  const [showBalance, setShowBalance] = useState(true);


  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  return (
    <div className="relative bg-[#191c24] py-4 rounded-lg ">
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="  ">
        <div className="carousel carousel-center w-full ps-8 pe-4 space-x-10 rounded-box h-56 flex items-center ">
          {walletData.map((item, index) => {
            return (
              <div className="relative  ">
                <div className="absolute -top-10 -left-2 flex justify-center mt-6 z-10 ">
                  <div
                    className="rounded-lg  relative py-4 px-12 border   "
                    style={{
                      backgroundImage: "url('/wallet-bg-5.png')",

                      backgroundSize: "auto",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    

                    <div className=" relative  flex flex-col items-center justify-center  gap-4 ">
                      <div className=" flex items-center gap-1">
                        <Image
                          src={item.symbol}
                          alt="icon"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "24px", height: "auto" }}
                        />

                        <p className="text-2xl lato-900 text-[#3E455B] ">
                          {item.coinName}
                        </p>
                      </div>

                      <div>
                        <p className=" text:sm lato-700 text-center text-[#3E455B]">
                          {" "}
                          Balance :
                        </p>
                        <div className="flex gap-1 lato-900 justify-center items-center">
                          <p className="text-xl text-[#3E455B] ">
                            {showBalance ? item.balance : "••••••••••"}{" "}
                          </p>
                          <p className="text-[#3E455B]">{item.currency}</p>

                          <div className="ms-2">
                          <Image
                            src={showBalance ? "/eye-open.svg" : "/eye-close.svg"}
                            alt={showBalance ? "eye-open icon" : "eye-close icon"}
                            width={20}
                            height={20}
                            onClick={toggleBalance}
                            className="cursor-pointer"
                          />
                          </div>
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

                <div
                  className="rounded-lg  py-4 px-9"
                  style={{
                    backgroundImage: "url('/wallet-bg-7.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="   flex flex-col items-center justify-center w-full gap-4 ">
               
                    <div className=" h-6 w-24 mb-2"></div>

                
                    <div className="flex flex-col items-center">
                      <div className=" h-4 w-64 mb-2"></div>
                      <div className="flex gap-1 justify-center items-center">
                        <div className=" h-6 w-16"></div>
                        <div className=" h-6 w-12"></div>
                      </div>
                    </div>

                 
                    <div className="flex gap-10">
                      <div className=" h-10 w-24 rounded"></div>
                      <div className=" h-10 w-24 rounded"></div>
                    </div>
                  </div>




                </div>

                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
