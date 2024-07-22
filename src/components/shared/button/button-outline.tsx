import React from "react";

interface ButtonProps {
  text: string;
  outlineColor?: string;
  hoverColor?: string;
  marginTop?: string;
  onClick?: () => void;
}

const ButtonOutline: React.FC<ButtonProps> = ({
  text,
  outlineColor = 'primary1',
  hoverColor = 'primary',
  marginTop = '10',
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick} 
      className={`border-2 border-${outlineColor} text-${outlineColor} w-full mt-${marginTop} hover:bg-${hoverColor} hover:opacity-80 transition-colors duration-300 px-4 py-2 rounded-md bebas-neue`}
    >
      {text}
    </button>
  );
};

export default ButtonOutline;
