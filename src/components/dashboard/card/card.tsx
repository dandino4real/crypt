
import Image from "next/image";
import React from "react";

interface DashboardCardProps {
  icon: string;
  title: string;
  value: string;
  maxValue?: string;
  percentageChange?: string;
  percentageIcon?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  icon,
  title,
  value,
  maxValue,
  percentageChange,
  percentageIcon,
}) => {
  return (
    <div
      className="flex flex-col p-4 bg-slate-300  rounded-xl justify-center items-center space-y-3 text-sm "
      style={{ background: "linear-gradient(to top right, #97ABFF, #123597 )" }}
    >
      <div className="flex  gap-2">
        <Image
          src={icon}
          alt="profit icon"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "20px", height: "auto" }}
        />

        <div>{title}</div>
      </div>

      <div>{value}</div>
      <div className="flex gap-2">
        {maxValue && (
          <div className="text-black">{maxValue}</div>
        )}
        {percentageChange && ( <div className="text-[#9de8c0]">{percentageChange}</div>)}
       
        {percentageIcon && (
          <Image
            src={percentageIcon}
            alt="percentage icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "20px", height: "auto" }}
          />
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
