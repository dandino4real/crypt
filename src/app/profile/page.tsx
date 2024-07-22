"use client";

import { SetStateAction, useState } from "react";

export default function Profile() {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (email === "") {
      setIsFocused(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
        
      <fieldset className={`rounded-lg ${isFocused || email ? 'py-1' : 'py-0'}`}>
        {(isFocused || email) && <legend className="text-xs">Email:</legend>}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="bg-gray-500 px-2 placeholder:text-xs rounded-lg"
          value={email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </fieldset>
    </div>
  );
}
