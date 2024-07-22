import React from "react";

interface ButtonProps {
  text: string | React.ReactNode;
  backgroundColor?: string;
  hoverColor?: string;
  marginTop?: string;
  onClick?: () => void;
}

// interface ButtonProps {
//   children: React.ReactNode;
//   backgroundColor: string;
//   hoverColor: string;
//    marginTop?: string;
//   onClick?: () => void;
// }


const Button: React.FC<ButtonProps> = ({
  text,
  backgroundColor = 'primary1',
  marginTop = '10',
  hoverColor= 'blue-800',
  onClick,
  
}) => {
  return (
    <button
      type="submit"
      onClick={onClick} 
      className={`py-3  px-4 rounded-lg  bg-${backgroundColor} hover:bg-blue-700 text-white border-none w-full mt-${marginTop} transition-all  duration-500 bebas-neue`}
      
    >
      {text}
    </button>
  );
};

export default Button;
