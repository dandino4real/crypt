import Image from "next/image";
import Link from "next/link";

export default function Create2FA() {
  return (
    <div
      className="px-6"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(39, 82, 231, 0.45), #1A1F30 )",
        color: "#F6F7FF",
      }}
    >
      <div className="flex items-center mt-4 text-xl">
        <div>
          <Image
            src={"/arrow-back.svg"}
            alt="back-arrow"
            width={36}
            height={36}
            sizes="100vw"
            style={{width:"auto", height:"auto"}}
            className="bold"
          />
        </div>
        <div>
          <h2>Set- up 2FA</h2>
        </div>
      </div>
      <div className="mt-6">
        <h2>Two factor Authentication for Login</h2>
      </div>
      <div className="mt-5">
        <p className="text-sm">
          Turn on 2FA Validation for your account. This is recommended so as to
          keep your <br />{" "}
          <span className="block">
            {" "}
            account safe, such that in the event of an hack, there would be no
            access to your
          </span>{" "}
          account.
        </p>
      </div>
      <div className="flex justify-between mt-5">
        <div>
          <p className=" font-semibold">Set up Authenticator app</p>
        </div>
        <div className="flex items-center">
          <div>
            <input
              type="checkbox"
              className="toggle [--tglbg:yellow] bg-blue-500 hover:bg-blue-700 border-blue-500"
              checked
            />
          </div>
          <div>
            <Image
              src={"/arrow-forward.svg"}
              alt="back-forward"
              width={36}
              height={36}
              sizes="100vw"
              style={{width:"auto", height:"auto"}}
              className="bold"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="text-xs mt-5">
          We&apos;ll ask you to enter a code from Google Authenticator every
          time you Login.
        </p>
      </div>
      <div className="mt-5">
        <p
          className="text-xs"
          style={{
            color: "#989898",
          }}
        >
          Note: Be sure to download, the Authy before turning on the toogle bar
        </p>
      </div>
      <div className="mt-5">
        <p
          className="text-xs"
          style={{
            color: "#989898",
          }}
        >
          Download Authy App Below from your app store or google play store,{" "}
          <br /> link your account to it and click continue when you are done.
        </p>
      </div>
      <div className="flex justify-center gap-20 mt-5">
        <div>
          <Image
            src={"/apple-store.svg"}
            alt="apple-store logo"
            width={150}
            height={45.54}
            sizes="100vw"
            style={{width:"auto", height:"auto"}}
          />
        </div>
        <div>
          <Image
            src={"/google-play.svg"}
            alt="google-play logo"
            width={150}
            height={45.54}
            sizes="100vw"
            style={{width:"auto", height:"auto"}}
          />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Link href={"/signup/authenticator"}>
          <button
            className="btn bg-primary1 hover:bg-primary-hover btn-wide mt-8"
            style={{
              color: "#DBE4FF",
            }}
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}
