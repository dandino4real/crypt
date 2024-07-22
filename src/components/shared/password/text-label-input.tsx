import React from "react";

interface TextInputProps {
  placeholder: string;
  backgroundColor: string;
  label: string;
  value: string; 
  onChange: (value: string) => void; 
}

const TextInputLabel: React.FC<TextInputProps> = ({
  placeholder,
  backgroundColor,
  label,
  value,
  onChange,
}) => {

 
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  onChange(e.target.value); 
};

  return (
    <label>
      <div className="mt-8">
        <span className="text-sm text-input-label">{label}</span>
      </div>
      <div
        className={`input bg-${backgroundColor}  mt-2 text-sm opacity-75`}
        style={{ padding: "0px" }}
      >
        <input
          type="text"
          className="pl-4 block w-full rounded-md border-0 py-3 pr-4 ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6 "
          placeholder={placeholder}
          value={value} 
          onChange={handleChange}
          required
        />
      </div>
    </label>
  );
};

export default TextInputLabel;
