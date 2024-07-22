// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// import Image from "next/image";
// import Link from "next/link";
// import TextInput from "@/components/shared/password/text-input";
// import Button from "@/components/shared/button/button";

// import { useMutation, useQuery } from "@tanstack/react-query";
// import { getGoogleSignInUrl, login } from "@/api/action";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");

//   const router = useRouter();

//   const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email || !validateEmail(email)) {
//       setEmailError("Please enter a valid email address");
//       return;
//     }
//     loginMutation.mutate(email);
//   };

//   const loginMutation = useMutation({
//     mutationFn: login,
//     onSuccess: (data) => {
//       const { token } = data;
//       localStorage.setItem("token", token);
     
   
//         router.push(`/verify-email/${email}`);
   

//     },
//     onError: (error: any) => {
//       console.error("Error logging in:", error.message);
//       setEmailError("Failed to log in. Please try again.");
//     },
//   });

//   const googleSignInMutation = useMutation({
//     mutationFn: getGoogleSignInUrl,
//     onSuccess: (data) => {
//       window.location.href = data.url;
//     },
//     onError: (error: any) => {
//       console.error("Error fetching Google OAuth URL:", error);
//     },
//   });

//   const validateEmail = (value: string) => {
//     const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//     return isValid;
//   };

//   return (
//     <div
//       className=" px-10 min-h-screen  md:min-h-full  rounded-tl-lg rounded-bl-lg  min-w-96 relative "
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
//           priority
//           style={{ width: "154px", height: "auto" }}
//         />
//       </div>

//       <form onSubmit={onSubmit}>
//         <div>
//           <div>
//             <h2 className="font-semibold text-2xl text-center">
//               Log in to A-1 Swapify
//             </h2>
//           </div>
//           <div className="mt-6 flex justify-center">
//             <div
//               className="btn text-xs btn-wide  btn-outline hover:bg-blue-600 border"
//               style={{
//                 color: "#F6F7FF",
//               }}
//               onClick={() => googleSignInMutation.mutate()}
//             >
//               <Image
//                 src={"/Google.svg"}
//                 alt="google image"
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 style={{ width: "15px", height: "auto" }}
//               />
//               <span>Sign in with Google</span>
//             </div>
//           </div>

//           <div className="flex items-center mt-4 text-sm opacity-70">
//             <div className="flex-grow border-t border-gray-300"></div>
//             <div className="px-4">or with e-mail</div>
//             <div className="flex-grow border-t border-gray-300"></div>
//           </div>

//           <div className="text-center">
//             <TextInput
//               placeholder="Enter your email here ..."
//               backgroundColor="input-background"
//               value={email}
//               onChange={(newValue) => setEmail(newValue)}
//             />
//             {emailError && (
//               <p className="text-sm text-red-500 text-end">{emailError}</p>
//             )}

//             <Button
//               text={
//                 loginMutation.isPending ? (
//                   <div className="flex items-center gap-1 justify-center text-sm">
//                     <p>Signing In</p>
//                     <span className="loading loading-dots loading-xs px-2"></span>
//                     <p>Please wait</p>
//                   </div>
//                 ) : (
//                   <p className=" text-sm">Sign In</p>
//                 )
//               }
//               backgroundColor="primary1"
//               hoverColor="primary"
//             />
//           </div>

//           <div className="mt-4 text-xs text-end">
//             Don&apos;t have an account?
//             <span>
//               {" "}
//               <Link
//                 href={"/signup"}
//                 className=" text-link hover:text-link-hover transition-colors duration-300"
//               >
//                 Sign up here !{" "}
//               </Link>
//             </span>
//           </div>
//         </div>
//       </form>

//       <div className="text-xs text-gray-500 p-4 mt-8 text-end absolute bottom-0 right-0 ">
//         2024@A-1 swapify
//       </div>
      
//     </div>
//   );
// }




import {Button, Input} from "@nextui-org/react";
import { MailIcon } from "./Mailicon/mailicon";
// import { CameraIcon } from "./CameralIcon/cameraIcon";
import Image from "next/image";
import Link from "next/link";


export default function SignIn() {
  return (
    <div className="grid grid-cols-3 min-h-screen">
      <div
        className="relative bg-cover bg-center col-span-1 "
      
        // style={{ backgroundImage: "url('/signin-sidebar.jpeg')" }}
        style={{ backgroundImage: "url('/signin-2-bg.svg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative z-10 w-100 px-4">
        
        </div>
      </div>
      <div className=" col-span-2 flex  items-center justify-center bg-[#0E1015]  ">

        <div className=" border-[#C8CDDA] border-opacity-35 rounded-lg pb-10  flex flex-col items-center w-[50%] mx-auto ">
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
          <h3 className=" plus-jakarta-sans-600 xl:text-3xl">Sign in to A1-Swap<span className="text-success">i</span>fy </h3>

          <div className="mt-10 w-[80%] ">
          <Input
          type="email"
          label="Email Address "
          placeholder="Enter email address here..."
          labelPlacement="outside"
          startContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0 " />
          }
        />
          </div>


        {/* <div className="mt-8 ">
          <p className=" text-center text-sm text-[#F6F7FF] ">Click “Sign up” to agree to A-1 Swapify&apos;s <span className="text-[#5275EC] " >{ ' '}Terms of Service{' '} </span> and acknowledge that A-1 Swapify&apos;s <span className="text-[#5275EC] " >Privacy Policy</span> applies to you.</p>
        </div> */}


        <div className="flex justify-center mt-8 w-full ">

        <Button  color="primary" variant="solid" size="md" 
        // endContent={<CameraIcon />} 
        className="w-2/3 font-semibold text-lg ">
        Sign In
      </Button>  
        </div>
    

        <div className="flex items-center mt-4 text-sm opacity-70 w-[80%] ">
            <div className="flex-grow border-t border-gray-300"></div>
            <div className="px-4 text-sm">or </div>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="mt-6 w-full flex justify-center "  >
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
              <Button color="primary" variant="bordered" className="w-2/3 text-white" >
                
              Sign in with Google
      </Button>
          </div>
          <div className="mt-6 xl:text-sm 2xl:lg">
            <p>Don&apos;t have an account ? <span className=" text-[#5275EC]"> {' '}Sign up here !</span> </p>
          </div>



        </div>

      </div>
    </div>
  );
}
