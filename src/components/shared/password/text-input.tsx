import React from "react";

interface TextInputProps {
  placeholder: string;
  backgroundColor: string;
  value: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  backgroundColor,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <label
      className={`input bg-${backgroundColor} flex items-center gap-2 mt-6 text-sm opacity-75`}
      style={{ padding: "0px" }}
    >
      <input
        type="text"
        required
        className="pl-4 block w-full rounded-md border-0 py-3 pr-4 ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

export default TextInput;
