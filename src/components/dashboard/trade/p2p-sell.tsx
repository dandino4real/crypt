import SellersCard from "@/components/shared/sellers_card";
import Image from "next/image";

export default function SellP2P() {
  return (
    <div>
      <h2>Offer list</h2>


      <div
        className="p-4 rounded-lg mt-4"
        style={{
          backgroundColor: "#191C24",
        }}
      >
        <div className="flex items-center gap-4 mx-4">
          <div
            className="flex items-center py-1 px-4 gap-2 rounded-lg text-xs"
            style={{
              backgroundColor: "#3E455B",
            }}
          >
            <Image
              src={"/usdt.svg"}
              alt="usdt"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "20px", height: "auto" }}
            />
            <p>Tether</p>
            <p
              className="p-1 px-2 rounded-lg text-xs"
              style={{
                backgroundColor: "#096735",
              }}
            >
              USDT
            </p>
          </div>

          <div
            className="py-1 px-2 rounded-lg flex gap-2"
            style={{
              backgroundColor: "#3E455B",
            }}
          >
            <div className="flex items-center gap-2">
            <p
              className="p-1 px-2 rounded-lg text-xs"
              style={{
                backgroundColor: "#096735",
              }}
            >
              USDT
            </p>

            <p>₦1,220.00</p>

            </div>
            <select
              className="select-xs select-bordered w-full max-w-xs text-sm "
              style={{
                backgroundColor: "#3E455B",
              }}
            >
              <option>NGN</option>
              <option>USD</option>
            </select>
          </div>
        </div>

        <SellersCard  username='Big Bro 101' online='Online' verified={true} />
        <SellersCard  username='Crypto lord 101' online='Seen 2 hours ago' verified={false}/>
        <SellersCard  username='Big Bro 101' online='Seen 8 mins ago'verified={true}/>
        <SellersCard  username='Big Bro 101' online='Online' verified={true}/>
        <SellersCard  username='Big Bro 101' online='Online' verified={true}/>
      </div>
    </div>
  );
}
