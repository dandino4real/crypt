import React from "react";
import Image from "next/image";

interface CustomCardProps {
  title?: string;
  number: string;
  icon: string;
  profit: string;
  loss: string;
  neutral: string;
}

const CoinCard: React.FC<CustomCardProps> = ({
  title,
  number,
  icon,
  profit,
  loss,
  neutral,
}) => {
  return (
    <div
      className=" w-64" style={{
        color: "#E4E6ED"
      }}
   
    >
      <div className="flex justify-between items-center">

        <div className="flex gap-2">
          <div>
            <Image
              src={icon}
              alt="Icon"
              width={20}
              height={20}
              sizes="100vw"
              style={{width:"auto", height:"auto", color: "blue"}}
            
            />
          </div>
          <div className="text-sm">{title}</div>
        </div>
        <div>
          <Image src={"/dots.svg"} alt="Icon" width={4} height={4}  sizes="100vw"
                style={{width:"auto", height:"auto"}} />
        </div>
      </div>

      <div className="rounded-3xl p-4 mt-8 " style={{
        backgroundColor:"#171C2C"
      
      }}>
        <div className="flex justify-between">
          <div className="text-sm">{number}</div>
          <div>
            <svg
              width="70"
              height="50"
              viewBox="0 0 106 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6951 36.5463C6.70224 38.5536 1.90135 38.219 0 37.8009V70H53H106V15.4287C95.5426 -7.6543 84.3722 2.04726 80.0942 9.78342L72.7265 22.5376C69.4783 28.6708 59.4646 38.8881 45.3946 30.6919C31.3247 22.4958 23.5291 25.7436 21.3901 28.392C19.4888 30.2738 14.6879 34.5391 10.6951 36.5463Z"
                fill="url(#paint0_linear_511_2392)"
              />
              <path
                d="M1.13965 37.6838C3.0001 38.1006 7.69776 38.4341 11.6047 36.4333C15.5117 34.4324 20.2093 30.1807 22.0698 28.3049C24.1628 25.6649 31.7907 22.4274 45.558 30.5975C59.3254 38.7676 69.1238 28.5828 72.3021 22.4691L79.5114 9.75548C83.6974 2.04393 94.6276 -7.62677 104.86 15.3828"
                stroke="#009A49"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_511_2392"
                  x1="43.8817"
                  y1="1"
                  x2="43.7099"
                  y2="82.9997"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#009A49" />
                  <stop
                    offset="0.0001"
                    stopColor="#009A49"
                    stopOpacity="0.25"
                  />
                  <stop offset="0.681869" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="text-sm">Profit</div>
            <div className="text-xs" style={{
              color: '#009A49'
            }}>+{profit}%</div>
          </div>
          <div>
            <div className="text-sm">Loss</div>
            <div className="text-xs" style={{
              color: '#FF4133'
            }}>-{loss}%</div>
          </div>
          <div>
            <div className="text-sm">Neutral</div>
            <div className="text-xs" style={{
              color: "#CABBB2"
            }}>+{neutral}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
