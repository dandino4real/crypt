import Link from "next/link";

export default function Authenticator (){
return (
    <div className="px-6 flex flex-col items-center justify-center"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(39, 82, 231, 0.45), #1A1F30 )",
      color: "#F6F7FF",
    }}
    >
        <div>
            <h2 className="text-xl font-semibold ">
            2FA via Authenticator app
            </h2>
        </div>
        <div className="mt-10">
            <p className="text-xs">Copy the code below</p>
        </div>
        <div className="mt-6">
            <h2>AZZGMRKX46C34QP</h2>
        </div>
        <div className="mt-4">
        <button
            className="btn hover:bg-primary-hover  mt-8"
            style={{
           
              color: "#DBE4FF",
              backgroundColor: "#5275EC"
            }}
          >
            Copy
          </button>
        </div>
        <div className="mt-6">
            <p>Paste this code into your 2FA app: Authy</p>
        </div>
        <div className="mt-8">

          <Link href={'/signup/verify2fa'}>


        <button
            className="btn bg-primary1 hover:bg-primary-hover btn-wide mt-8"
            style={{
             
              color: "#DBE4FF",
            }}
          >
            Next
          </button>
          </Link>
        </div>
       
    </div>
)
}