// "use client";

// import Image from "next/image";
// import Link from "next/link";

// import axios from "@/api/axiosInstance";

// export default function SignUp() {
//   const handleGoogleSignUp = async () => {
//     try {
//       const response = await axios.get("api/v1/auth/google");
//       const { url } = response.data;
//       window.location.href = url;
//     } catch (error) {
//       console.error("Error fetching Google OAuth URL:", error);
//     }
//   };

//   return (
//     <div
//       className=" min-h-screen px-4 md:px-10 flex flex-col justify-between md:min-h-full  rounded-tl-lg rounded-bl-lg min-w-96 space-y-12"
//       style={{
//         backgroundImage:
//           "radial-gradient(circle, rgba(39, 82, 231, 0.25), #1A1F30)",
//         color: "#F6F7FF",
//       }}
//     >
//       <div>
//         <h2 className="text-1xl pt-8 font-semibold md:text-2xl">
//           Sign up to A-1 Swapify
//         </h2>
//         <div className="text-xs pt-4 md:text-sm">
//           Welcome to <span className="font-semibold">A-1 Swapify!</span> Join
//           thousands of traders
//           <br />
//           <span className="block">
//             worldwide to start trading cryptocurrencies securely
//           </span>
//           <span className="block">
//             and easily. It&apos;s fast, simple, and free!
//           </span>
//         </div>
//         <div className="flex flex-col gap-2 md:flex-row md:gap-4 pt-16 md:text-sm">
//           <button
//             className="btn text-xs btn-outline hover:bg-blue-600 flex items-center text-[#F6F7FF]"
//             onClick={handleGoogleSignUp}
//           >
//             <Image src="/Google.svg" alt="Google logo" width={15} height={15} />
//             <p className="whitespace-nowrap ml-2">Sign up with Google</p>
//           </button>
//           <Link
//             href="/signup/email"
//             className="btn text-xs btn-outline btn-error hover:bg-blue-600 flex items-center"
//             style={{
//               color: "#F6F7FF",
//             }}
//           >
//             <p className="whitespace-nowrap">Sign up with your email</p>
//           </Link>
//         </div>
//       </div>
//       <div className="text-xs text-gray-500 pb-4 text-end">
//         2024 @ A-1 Swapify
//       </div>
//     </div>
//   );
// }
// "use client";

// import Button from "@/components/shared/button/button";

// import TextInputLabel from "@/components/shared/password/text-label-input";
// import Image from "next/image";
// import react, { useState } from "react";
// import axios from "@/api/axiosInstance";
// import { useRouter } from "next/navigation";

// import "react-phone-input-2/lib/style.css";

// export default function SignUpPassword() {
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const validateEmail = (value: string) => {
//     const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//     return isValid;
//   };

//   const router = useRouter();

//   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!validateEmail(email)) {
//       setEmailError("Please enter a valid email address");
//       return;
//     }
//     try {
//       setIsLoading(true);
//       const response = await axios.post("api/v1/auth/sign-up", {
//         email,
//       });

//       const { token } = response.data;

//       if (email) {
//         localStorage.setItem("token", token);
//         router.push(`/verify-email/${email}`);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div
//       className=" min-w-80 px-4 md:px-10 min-h-screen  md:min-h-full rounded-tl-lg rounded-bl-lg  md:min-w-96 relative "
//       style={{
//         backgroundImage:
//           "radial-gradient(circle, rgba(39, 82, 231, 0.25), #1A1F30 )",
//         color: "#F6F7FF",
//       }}
//     >
//       <div className="flex justify-center">
//         <Image
//           src={"/A1-swapify.png"}
//           alt="A1-swapify logo"
//           width={0}
//           height={0}
//           sizes="100vw"
//           style={{ width: "154px", height: "auto" }}
//         />
//       </div>
//       <div className="flex justify-center">
//         <h2 className="text:xl  font-semibold md:text-2xl">
//           Sign up to A-1 Swapify
//         </h2>
//       </div>

//       <div
//         className="flex flex-col  justify-between  space-y-12"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle, rgba(39, 82, 231, 0.25), #1A1F30 )",
//           color: "#F6F7FF",
//         }}
//       >
//         <form onSubmit={onSubmit}>
//           <div className="flex flex-col">
//             <div>
//               <div>
//                 <TextInputLabel
//                   placeholder="Enter your email here..."
//                   backgroundColor="input-background"
//                   label="Email"
//                   value={email}
//                   onChange={(newValue) => setEmail(newValue)}
//                 />
//                 {emailError && (
//                   <p className="text-xs text-red-500 text-end pt-1">
//                     {emailError}
//                   </p>
//                 )}
//               </div>

//               <Button
//                 text={isLoading ? "Signing Up..." : "Sign Up"}
//                 backgroundColor="primary1"
//                 hoverColor="primary"
//               />
//             </div>
//           </div>
//         </form>
//       </div>
//       <div className="text-xs text-gray-500 p-4 self-end absolute bottom-0 right-0 ">
//         2024 @ A-1 swapify
//       </div>
//     </div>
//   );
// }

import { Button, Input } from "@nextui-org/react";
import { MailIcon } from "./email/MailIcon/mailIcon";
import { CameraIcon } from "./email/CameralIcon/cameraIcon";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="grid grid-cols-3 min-h-screen">
      <div
        className="relative bg-cover bg-center col-span-1 "
     
        // style={{ backgroundImage: "url('/signup-sidebar.jpeg')" }}
        style={{ backgroundImage: "url('/signup-1-bg.svg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 w-100 px-4"></div>
      </div>
      <div className=" col-span-2 flex  items-center justify-center bg-[#0E1015] ">
        <div className=" border-[#C8CDDA] border-opacity-35 rounded-lg pb-10 px-5 flex flex-col items-center w-[50%] mx-auto ">
          <div>
            <Link href={"/"}>
              <Image
                src={"/A1-swapify.png"}
                alt="Logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "120px", height: "auto" }}
              />
            </Link>
          </div>
          <h3 className=" plus-jakarta-sans-600 xl:text-3xl">
            Sign up to A1-Swap<span className="text-success">i</span>fy
          </h3>
          <div className="mt-10 w-full">
            <Input
              type="email"
              label="Email Address "
              placeholder="Enter Email address here..."
              labelPlacement="outside"
              startContent={
                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0 " />
              }
            />
          </div>
          <div className="mt-8 ">
            <p className=" text-center text-sm text-[#F6F7FF] bebas-neue ">
              Click “Sign up” to agree to{" "}
              <span className="font-semibold"> A1-Swapify</span>{" "}
              <span className="text-[#5275EC] "> Terms of Service </span> and
              acknowledge that<span className="font-semibold"> A1-Swapify</span>{" "}
              <span className="text-[#5275EC] "> Privacy Policy </span> applies
              to you.
            </p>
          </div>
          <div className="flex justify-center mt-8 w-full ">
            <Button
              color="primary"
              variant="solid"
              size="md"
              // endContent={<CameraIcon />}
              className="w-2/3 font-semibold  "
            >
              Sign Up
            </Button>
          </div>

          <div className="flex items-center mt-4 text-sm opacity-70 w-full  ">
            <div className="flex-grow border-t border-gray-300"></div>
            <div className="px-4 text-sm">or </div>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="mt-6 w-full flex justify-center ">
            {/* <div
              className="btn text-xs btn-wide  btn-outline hover:bg-blue-600 border"
              style={{
                color: "#F6F7FF",
              }}
              // onClick={() => googleSignInMutation.mutate()}
            >
              <Image
                src={"/Google.svg"}
                alt="google image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "15px", height: "auto" }}
              />
              <span>Sign up with Google</span>
            </div> */}
            <Button
              color="primary"
              variant="bordered"
              className="w-2/3 text-white"
            >
              Sign up with Google
            </Button>
          </div>
          <div className="mt-6  text-sm">
            <p>
              Already have an account ?
              <span className=" text-[#5275EC] cursor-pointer ">
                {" "}
                Log in here !
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}