import Link from "next/link";

export default function ForGotPassword() {
  return (
    <div
      className="px-6 flex flex-col items-center"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(39, 82, 231, 0.45), #1A1F30 )",
        color: "#F6F7FF",
      }}
    >
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Reset your password</h2>
      </div>
      <div className="mt-6 text-xs flex flex-col items-center">
        <p>
          Enter your e-mail and we will send you instructions on how to reset
        </p>
        <p>your password</p>
      </div>
      <div className="mt-6">
        <input
          type="text"
          placeholder="Type your E-mail address here.."
          className="bg-input-background opacity-25 text-white block rounded-md border-0 py-1.5 pl-2 pr-5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-100 placeholder:text-xs focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 shadow-sm"
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <button
          className="btn bg-primary1 hover:bg-primary-hover btn-wide mt-8"
          style={{
            color: "#DBE4FF",
          }}
        >
          Sign Up
        </button>
      </div>
      <div>
        <p className="text-xs p-2">
          Back to{" "}
          <span
            className="pointer"
            style={{
              color: "#7592F0",
            }}
          >
            <Link href={"/signin"}>Log in here !</Link>
          </span>{" "}
        </p>
      </div>
    </div>
  );
}
