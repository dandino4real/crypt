import Button from "@/components/shared/button/button";
import Image from "next/image";

export default function AddressVerification() {
  return (
    <div className="mx-8 mt-8 p-8 bg-[#0A0C0F] rounded-3xl">
      <h3 className="font-semibold">Address verification</h3>
      <p className="my-6 text-xs md:text-sm">
        Upload your proof of Address. the document should contain your full
        name, Address and must not be older than 3 months.
      </p>
      <div className="grid grid-cols-2 gap-4  ">
        <div className="p-4 border border-gray-500 rounded-lg text-gray-500">
          <h3 className=" text-center text-sm md:text-base font-semibold">
            Documents Accepted
          </h3>
          <div className="space-y-1 md:space-y-4 mt-3 md:mt-6 text-xs md:text-sm">
            <p>Bank statements</p>
            <p>Utility bills (within 3 months)</p>
            <p>Internet/cable TV/phone line Bills</p>
            <p>Tax Returns</p>
            <p>Council tax bills</p>
            <p>Government- Issued certificates of Residence</p>
          </div>
        </div>
        <div className="p-4 border border-gray-500 rounded-lg  text-gray-500">
          <h3 className="text-center text-sm md:text-base font-semibold ">
            Documents Not Accepted
          </h3>
          <div className="space-y-2 md:space-y-4 mt-3 md:mt-6 text-xs md:text-sm">
            <p>Screenshots</p>
            <p>Mobile phone bills</p>
            <p>Medical bills</p>
            <p>Receipts</p>
            <p>Insurance statements</p>
          </div>
        </div>
        <div className="border-dashed border-2 border-gray-500 px-6 py-8 flex flex-col items-center col-span-2 rounded-lg">
          <Image
            src={"/download.svg"}
            alt="download icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "80px", height: "auto" }}
            className=" cursor-pointer"
          />

          <p className="text-sm mt-6">
            Drag & Drop your file upload or{" "}
            <span className="text-[#5275EC] cursor-pointer">Browse</span>
          </p>
          <p className="text-[#949DB7] text-sm mt-2">
            Supported format : JPEGs, SVG, PNG, PDF, PTT
          </p>
        </div>
      </div>
      <div className="bg-[#1F273D] flex gap-4 md:gap-14 items-center py-4 px-8 mt-8 rounded-lg">
        <div>
          <Image
            src={"/file.svg"}
            alt="file icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "60px", height: "auto" }}
          />
        </div>
        <div className="w-full">
          <p className="text-xs mb-2">IMG_3892.jpg</p>

          <progress
            className="progress progress-primary w-full bg-white"
            value="85"
            max="100"
          ></progress>

          <div className="flex justify-between text-xs">
            <p className="text-[#949DB7]">1.7 MB of 2 MB</p>
            <p className="hidden md:block text-gradient">Uploading... 85% </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className=" w-32">
          <Button text="Done" />
        </div>
      </div>
    </div>
  );
}
