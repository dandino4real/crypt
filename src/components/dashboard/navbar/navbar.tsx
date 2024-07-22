import Image from "next/image";
import Link from "next/link";

export default function DashboardNavbar() {
  return (
<div className="relative  bg-[#191c24]">

<div className="absolute inset-0 bg-black opacity-30"></div>
 

  <div className="relative z-10">


   {/* <div className="navbar pe-8 py-4 pl-4 bg-[#1A1F30] "> */}
    <div className="navbar pe-8 py-4 pl-4  ">
    
      <div className="flex-1 ">
        {/* <div className="form-control w-3/4">
          <label className="input  flex items-center gap-2 rounded-full   px-3 placeholder-gray-400 text-sm bg-black hover:bg-gray-900   ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-40"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search..." />
          </label>
        </div> */}
        <h3 className="plus-jakarta-sans-800 xl:text-xl ">Welcome Back, William!</h3>
      </div>

      <div className=" flex justify-center items-center ml-10">
        <div>
          <Link href={"/dashboard/profile"}>
            <div className="w-10 rounded-full cursor-pointer ">
              <Image
                src={"/profile-pix.svg"}
                alt="profile pix"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "30px", height: "auto" }}
              />
            </div>
          </Link>
        </div>

        <div className="navbar-end  ">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
        <div >
          {/* <Link href={"/dashboard/profile"}> */}

          <Image
            src={"/customer-care.svg"}
            alt="icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "70px", height: "auto" }}
         
          />

          {/* </Link> */}
        </div>
      </div>
    </div>
  </div>
</div>


  );
}
