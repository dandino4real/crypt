"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

interface BuyersCardProps {
  username: string;
  online: string;
  verified: boolean;
}

const BuyersCard: React.FC<BuyersCardProps> = ({
  username,
  online,
  verified,
}) => {
  const router = useRouter();

  const handleClick = () => {
  
    if (verified) {
      router.push("/dashboard/trade/p2p/buy");
    } else {
      console.log("Not Qualified clicked");
    }
  };
  return (
    <div
      className="p-4 mt-6 mx-4 rounded-lg text-xs space-y-4 "
      style={{
        backgroundColor: "#262F4A",
      }}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center pe-2 border-r border-stone-500">
            <div className="w-10 rounded-full">
              <Image
                src={"/profile-pix.svg"}
                alt="profile pix"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "30px", height: "auto" }}
              />
            </div>
            <p>{username}</p>
            <p
              style={{
                color: online === "Online" ? "#0FA958" : "#989898",
              }}
            >
              {online}
            </p>
          </div>
          <div className="flex gap-4">
            <div className=" flex gap-1 items-center">
              <p>661</p>
              <Image
                src={"/thumpsup.svg"}
                alt="thumpsup pix"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "15px", height: "auto" }}
              />
            </div>
            <div className="flex items-center gap-1">
              <p>5</p>
              <Image
                src={"/thumpsdown.svg"}
                alt="thumpsdown pix"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "15px", height: "auto" }}
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleClick}
          className={`px-4 py-2 rounded-md text-white ${
            verified
              ? "bg-green-500 hover:bg-green-600"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          {verified ? "Buy from Seller" : "Not Qualified"}
        </button>
      </div>

      <div className="flex items-center gap-4 ">
        <p
          className="py-1 px-2 rounded-lg text-xs "
          style={{
            backgroundColor: "#096735",
          }}
        >
          1 USDT
        </p>
        <p>1,220.00</p>
      </div>
      <div className="flex gap-10 text-xs">
        <p>Quantity : 54.3760 USDT</p>
        <p>Limit: 20,750 - 1,00,000 NGN</p>
      </div>
      <div
        className="p-2 rounded-lg"
        style={{
          backgroundColor: "#0A0C0F",
        }}
      >
        <h3>About Seller :</h3>
        <div className="flex gap-32 py-2">
          <div className="flex items-center gap-2">
            <Image
              src={"/mark-good.svg"}
              alt="mark icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "15px", height: "auto" }}
            />
            <p
              className="text-xs"
              style={{
                color: "#989898",
              }}
            >
              Email Verified
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/mark-good.svg"}
              alt="mark icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "15px", height: "auto" }}
            />
            <p
              className="text-xs"
              style={{
                color: "#989898",
              }}
            >
              KYC Verified
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/mark-good.svg"}
              alt="mark icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "15px", height: "auto" }}
            />
            <p
              className="text-xs"
              style={{
                color: "#989898",
              }}
            >
              ID Verified
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyersCard;
