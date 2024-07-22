import Image from "next/image";
import Link from "next/link";

export default function Google() {
  return (
    
    <div
      className="flex flex-col"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(39, 82, 231, 0.35), #1A1F30 )",
        color: "#F6F7FF",
      }}
    >
      <div className="flex px-8 gap-2 pt-6 pb-2 border-b border-gray-500">
        <Image src={"/Google.svg"} alt="google icon" width={15} height={15}  sizes="100vw"
                style={{width:"auto", height:"auto"}} />
        <div>
          <div>Sign up with Google</div>
        </div>
      </div>

      <div className="w-auto px-8 flex flex-col justify-between max-h-full rounded-tr rounded-bl ">
        <div>
          <div className="pt-8 font-semibold text-xl">
            Sign up to A-1 Swapify
          </div>
          <div className="pt-4 text-sm">
            By continuing, Google will share your name, email address, language
            <span className="block">
              preferences and profile picture with A-1 Swapify. See A-1
              Swapify’s
            </span>
            <span className="block">
              <span
              className="font-bold"
                style={{
                  color: "#5275EC",
                }}
              >
                Privacy Policy
              </span>
              {' '}and
              <span
              className="font-bold"
                style={{
                  color: "#5275EC",
                }}
              >
                {" "}
                Terms of Service.
              </span>
            </span>
            <span className="block mt-4">
              You can manage Sign up with Google in your Google Account.
            </span>
          </div>
          <div className="flex gap-6 pt-16 text-sm ">
            <Link href={'/signup'}>
            
            <div
              className="btn btn-wide text-xs text-white btn-outline  btn-error hover:bg-blue-600"
              style={{
                color: "#F6F7FF",
                width: "200px",
              }}
            >
              Cancel
            </div>
            </Link>
            <div
              className="btn text-xs btn-wide text-white btn-outline hover:bg-blue-600"
              style={{
                color: "#F6F7FF",
                width: "200px",
              }}
            >
              Continue
            </div>
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-500 mt-44 self-end pe-4">
        2024 @ A-1 swapify
      </div>

    </div>
  );
}
