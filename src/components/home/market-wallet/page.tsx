import Image from "next/image";

export default function MarketWallet() {
  return (
    <div className="bg-[#26304E] rounded-lg p-4 space-y-2 text-xs ">
      <div className="flex items-center gap-20 border-b border-b-gray-500 pb-2">
        <div className="flex items-center gap-2">
          <Image
            src={"/tether.svg"}
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "18px", height: "auto" }}
          />
          <p>USDT</p>
        </div>
        <p>0.01</p>
      </div>

      <div className="flex items-center gap-20">
        <div>
          <p>₦</p>
          <p>12.82</p>
        </div>
        <Image
          src={"/graph-green.svg"}
          alt="Logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "85px", height: "auto" }}
        />
      </div>

      <div className="flex justify-between">
        <div>
          <p>Profit</p>
          <p className="text-[#0FA958]">+ 2.87%</p>
        </div>
        <div>
          <p>Loss</p>
          <p className="text-[#FF4133]">- 0.17%</p>
        </div>
        <div>
          <p>Neutral</p>
          <p className="text-[#CABBB2]">2,70%</p>
        </div>
      </div>
    </div>
  );
}
