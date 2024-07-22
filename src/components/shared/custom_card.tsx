import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import React from 'react';
import Image from 'next/image';

interface CustomCardProps {
  title?: string;
  description: string;
  icon: IconDefinition | string;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex-grow bg-white text-left w-64 h-60 " style={{
      color:'#0A0C0F'
    }}>
      {title && <h2 className="bg-primary p-3 text-center  " style={{color: "#F6F7FF" }}
      >{title}</h2>}
      <p className="p-3 text-sm">{description}</p>
      <div className="relative z-20">
        <div
          className="flex justify-center items-center w-60 h-60 bg-black text-white absolute"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%, 0 87%)",
          }}
        >
          {typeof icon === 'string' ? (
            <Image src={icon} alt="Icon" width={0} height={0} sizes="100vw "
            style={{width:"80px", height:"auto", color: "blue" }} />
          ) : (
            <FontAwesomeIcon icon={icon} className="w-20 h-20" style={{ color: "blue" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
