import Link from "next/link";
import Image from "next/image";

export default function TransactionDetails() {
  return (
    <div
      className="mx-8 mt-10  p-4 pt-8 rounded-2xl space-y-20 min-h-screen"
      style={{
        backgroundColor: "#0A0C0F",
      }}
    >
        <div className="flex justify-between px-4 pb-2 border-b-2 border-gray-500">
            <div className="flex gap-2 text-sm">
                <p>Trade</p>
                <p>Gl0xzppcbDS</p>
                <p style={{
                    color:"#0FA958"
                }}>Completed</p>
            </div>
            <div>
            <Link href={"/"}>
                  <Image
                    src={"/exclamation.svg"}
                    alt="exclamation"
                    width={12}
                    height={12}
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                  />
                </Link>
            </div>
        </div>
      <div
        className="m-6 p-6 rounded-lg"
        style={{
          backgroundColor: "#26304E",
        }}
      >
        <div>
          <h2 className="font-semi-bold">Transaction Details</h2>
        </div>
        <div className="grid grid-cols-3 text-sm m-6 border border-gray-500 px-6 py-4 rounded-lg ">
          <div
            className=" col-span-1 space-y-4"
            style={{
              color: "#95ABF3",
            }}
          >
            <div>You Send :</div>
            <div
              style={{
                color: "#949DB7",
              }}
            >
              Quantity :
            </div>
            <div className="flex items-center gap-1">
              <p>Transaction Fees </p>
              <div>
                <Link href={"/"}>
                  <Image
                    src={"/exclamation.svg"}
                    alt="exclamation"
                    width={15}
                    height={15}
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                  />
                </Link>
              </div>
              <p>:</p>
            </div>
            <div>Trade ID :</div>
            <div>You Get :</div>
            <div>Order Time :</div>
          </div>
          <div className=" col-span-2 space-y-4">
            <div>50,000 NGN</div>
            <div
              style={{
                color: "#949DB7",
              }}
            >
              36.317677 USDT
            </div>
            <div>1,000.00 NGN</div>
            <div className="flex items-center gap-1">
              <p
                style={{
                  color: "#0C8846",
                }}
              >
                Gl0xzppcbDS
              </p>
              <div>
                <Image
                  src={"/copy.svg"}
                  alt="copy icon"
                  width={20}
                  height={20}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
            <div>36.564803 USDT</div>
            <div>17-04-2024 11:59 pm</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-20 items-center pb-20">
        <Link href={"/dashboard/trade/card-details"}>
          <button
            className="btn bg-primary1 hover:bg-primary-hover btn-wide  "
            style={{
              color: "#DBE4FF",
            }}
          >
           View My Assets
          </button>
        </Link>

        

        <Link href={"/dashboard/trade"}>
          <button
            className="btn btn-outline btn-wide"
            style={{
              color: "#DBE4FF",
            }}
          >
           Appeal My Trade
          </button>
        </Link>
      </div>
    </div>
  );
}
