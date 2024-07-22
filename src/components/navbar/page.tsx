"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import Providers from "@/app/providers";
import ThemeSwitcher from "../ThemeSwitcher";
import { useMutation, useQuery } from "@tanstack/react-query";

interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, active, children }) => {
  return (
    <Link
      href={href}
      className={`hover:text-slate-300 relative ${
        active ? "text-blue-500 font-semibold" : ""
      }`}
    >
      {children}
      {active && (
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500"></span>
      )}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const { theme } = useTheme();

  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    return pathname === href;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const router = useRouter();

  const onSubmit = () => {
 
    if (!email || !validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    router.push(`/verify-email/${email}`);

    // loginMutation.mutate(email);
  };

  // const loginMutation = useMutation({
  //   mutationFn: onSubmit,
  //   onSuccess: (data) => {
  //     const { token } = data;
  //     localStorage.setItem("token", token);

  //     router.push(`/verify-email/${email}`);
  //   },
  //   onError: (error: any) => {
  //     console.error("Error logging in:", error.message);
  //     setEmailError("Failed to log in. Please try again.");
  //   },
  // });

  const validateEmail = (value: string) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    return isValid;
  };

  const handleChange = () => {
    return "";
  };

  return (
    // <Providers>
    <div className={theme === "light" ? "light-theme" : "dark-theme"}>
      <div className="navbar h-20 flex items-center justify-between gap-10 px-4 lg:pe-8 bebas-neue border-b border-b-gray-800   ">
        <div>
          <Link href={"/"}>
            <Image
              src={"/A1-swapify.png"}
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "80px", height: "auto" }}
            />
          </Link>
          <p className="text-lg font-bold ">A1-Swapify</p>
        </div>

        <div className="mx-10 ">
          <ul className="flex gap-5 items-center ">
            <li>Home</li>
            <li className="flex gap-1 items-center">
              Features{" "}
              <Image
                src={"/arrow-down.svg"}
                alt="Logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "15px", height: "auto" }}
              />{" "}
            </li>
            <li>About Us</li>
            <li>Compliance</li>
          </ul>
        </div>

        <div className="grow">
          <div className=" w-full border-r border-r-gray-500 pr-5 mr-5 flex">
            <input
              type="text"
              placeholder="Enter your email here to sign up..."
              className="grow py-2 px-4 rounded-tl-lg rounded-bl-lg bg-[#101828] opacity-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              color="primary"
              variant="solid"
              radius="none"
              className="rounded-tr-lg rounded-br-lg font-semibold "
              onPress={onSubmit}
            >
              Sign Up
            </Button>
          </div>
          <ThemeSwitcher />
        </div>

        {/* <div className="hidden md:flex  md:space-x-20">
          <NavLink href={"/"} active={isActive("/")}>
            Home
          </NavLink>
          <NavLink href={"/marketplace"} active={isActive("/marketplace")}>
            Market
          </NavLink>
          <NavLink href={"/trade"} active={isActive("/trade")}>
            Trade
          </NavLink>
        </div> */}

        {/* <div className="hidden md:flex justify-end space-x-5 md:space-x-10">
          <NavLink href={"/signin"} active={isActive("/signin")}>
            <div className="text-sm whitespace-nowrap link link-hover ">
              Sign In
            </div>
          </NavLink>
          <NavLink href={"/signup"} active={isActive("/signup")}>
            <div className="btn bg-primary hover:bg-primary-hover px-4 py-1 text-white rounded-lg text-sm">
              Register
            </div>
          </NavLink>
        </div> */}

        {/* <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div> */}
      </div>

      {/* {isMobileMenuOpen && (
        <div className="md:hidden px-4 pt-4">
          <div className="flex flex-col gap-4">
            <NavLink href={"/"} active={isActive("/")}>
              Home
            </NavLink>
            <NavLink href={"/marketplace"} active={isActive("/marketplace")}>
              Market
            </NavLink>
            <NavLink href={"/trade"} active={isActive("/trade")}>
              Trade
            </NavLink>
            <NavLink href={"/signin"} active={isActive("/signin")}>
              <div className="text-sm whitespace-nowrap link link-hover ">
                Sign In
              </div>
            </NavLink>
            <NavLink href={"/signup"} active={isActive("/signup")}>
              <div className="btn bg-primary hover:bg-primary-hover px-4 py-1 text-white rounded-lg text-sm">
                Register
              </div>
            </NavLink>
          </div>
        </div>
      )} */}

      {/* </Wrapper> */}
    </div>
    // </Providers>
  );
};

export default Navbar;
