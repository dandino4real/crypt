"use client";

import { Image } from "@nextui-org/react";

import { useRouter } from "next/navigation";

export default function VerifyEmail({
  params,
}: {
  params: { emailId: string };
}) {
  const router = useRouter();
  const { emailId } = params;
  const decodedEmail = emailId ? decodeURIComponent(emailId) : "";

  const timeoutDuration = 3000;

  setTimeout(() => {
    router.push("/signup/otp");
  }, timeoutDuration);

  return (
    <div className="grid grid-cols-3 min-h-screen">
      <div
        className="relative bg-cover bg-center col-span-1 "
        // style={{ backgroundImage: "url('/email-bg.svg')" }}
        style={{ backgroundImage: "url('/email-sidebar.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 w-100 px-4"></div>
      </div>

      <div className=" col-span-2 flex flex-col justify-between min-h-screen  pt-10 bg-[#0E1015] ">
        <div className=" flex flex-col justify-center items-center pb-20 mx-56  ">
          {/* <div className=" flex items-center justify-center">
            <Image
              src={"/A1-swapify.png"}
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100px", height: "auto" }}
            />
            <h3 className=" plus-jakarta-sans-700 text-3xl">A1-Swapify</h3>
          </div> */}

          <div className=" mt-20 text-3d ">
            <Image
              src={"/email-big.svg"}
              alt="email"
              isBlurred
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "150px", height: "auto" }}
            />
          </div>
          <div className="mt-20">
            <h3 className=" text-xl font-semibold">Check your email</h3>
          </div>
          <div className="mt-6 text-lg">
            <p>we have sent an otp for your e-mail verification to</p>
          </div>
          <div className="mt-1">
            <p className="text-[#5275EC] text-lg">{decodedEmail}</p>
          </div>
        </div>

        <div className=" text-end py-4 pe-4 opacity-50 ">A1-swapify</div>
      </div>
    </div>
  );
}
