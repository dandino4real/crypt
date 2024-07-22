"use client";

import { useState } from "react";
import Image from "next/image";

interface PasswordInputProps {
  backgroundColor: string;
  value: string; 
  onChange: (value: string) => void; 
}

const InputPasswordLabel: React.FC<PasswordInputProps> = ({ backgroundColor, value,
  onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

   
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  onChange(e.target.value); 
};

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <label>
     <div className="mt-4">
        <span className="text-sm text-input-label">Password</span>
      </div>
      {/* <div className=" relative rounded-md shadow-sm  w-full  "> */}
      <div
        className={`input bg-${backgroundColor} relative flex items-center gap-2 mt-2 text-sm opacity-75`}
        style={{
          padding: "0px",
        }}
      >
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password here ..."
          value={value} 
          onChange={handleChange}
          required
          className="pl-4 block w-full rounded-md border-0 py-3  pr-4  ring-gray-300 placeholder:text-gray-300  focus:ring-2 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
        />
        <div className="absolute inset-y-0 right-2 flex items-center">
          <Image
            src={showPassword ? "/eye-open.svg" : "/eye-close.svg"}
            alt={showPassword ? "eye-open-icon" : "eye-close-icon"}
            width={20}
            height={20}
            className=" cursor-pointer"
            onClick={togglePasswordVisibility}
          />
        </div>
      </div>
    </label>
  );
};

export default InputPasswordLabel;
