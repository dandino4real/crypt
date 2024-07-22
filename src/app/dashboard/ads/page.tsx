import AdsCard from "@/components/shared/ads_card";
import BuyersCard from "@/components/shared/buyers_card";
import Image from "next/image";

export default function ViewAds() {
  return (
    <div className=" bg-[#0A0C0F] mx-8 mt-8 p-8 min-h-screen rounded-xl">
      <div className="p-4 border border-[#5275EC] mt-6 mx-20 rounded-xl">
        <div className=" rounded-xl border border-gray-500 border-dashed ">
          <div className="flex justify-center gap-5 items-center h-20">
            <Image
              src="/plus-blue.svg"
              alt="dropdown icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "25px", height: "auto" }}
              className="cursor-pointer text-[#5275EC]"
            />
            <p className="lg:text-lg">Post New Ad</p>
          </div>
        </div>
      </div>
      <div className="mt-6 border-t border-t-gray-500">
        <div className="flex justify-between mt-8">
          <p className=" font-semibold lg:text-lg">Active ADs</p>
          <div className="flex gap-3">
            <Image
              src="/settings-icon-blue.svg"
              alt="dropdown icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "25px", height: "auto" }}
              className="cursor-pointer text-[#5275EC]"
            />
            <Image
              src="/checklist.svg"
              alt="dropdown icon"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "25px", height: "auto" }}
              className="cursor-pointer text-[#5275EC]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <AdsCard username="Big Bro 101" online="" verified />
        <AdsCard username="Big Bro 101" online="" verified />
        <AdsCard username="Big Bro 101" online="" verified />
        <AdsCard username="Big Bro 101" online="" verified />
      </div>
    </div>
  );
}
