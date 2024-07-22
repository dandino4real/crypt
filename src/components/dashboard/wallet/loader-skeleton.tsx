import React from "react";
import Image from "next/image";

export default function SkeletonLoader() {
  return (
    <div className="bg-[#1A1F30] p-4 rounded-lg carousel-item animate-pulse">
      <div className="text-xs">
        <div className="flex justify-between items-center border-b border-b-gray-500 pb-2">
          <div>
            <div className="flex gap-2 items-center">
              <div className="h-5 w-5 bg-gray-700 rounded-full"></div>
              <div className="h-4 w-16 bg-gray-700 rounded"></div>
            </div>
            <div className="flex gap-1 items-center mt-1">
              <div className="h-4 w-8 bg-gray-700 rounded"></div>
              <div className="h-4 w-4 bg-gray-700 rounded"></div>
              <div className="h-4 w-12 bg-gray-700 rounded"></div>
            </div>
          </div>
          <div className="h-5 w-5 bg-gray-700 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-2">
          <div className="col-span-1 flex flex-col justify-center">
            <div className="h-4 w-16 bg-gray-700 rounded"></div>
            <div className="h-4 w-20 bg-gray-700 rounded mt-2"></div>
          </div>
          <div className="col-span-1 flex flex-col gap-4 text-xs">
            <div>
              <div className="h-4 w-16 bg-gray-700 rounded"></div>
              <div className="h-4 w-24 bg-gray-700 rounded mt-2"></div>
            </div>
            <div>
              <div className="h-4 w-16 bg-gray-700 rounded"></div>
              <div className="h-4 w-24 bg-gray-700 rounded mt-2"></div>
            </div>
            <div>
              <div className="h-4 w-16 bg-gray-700 rounded"></div>
              <div className="h-4 w-24 bg-gray-700 rounded mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
