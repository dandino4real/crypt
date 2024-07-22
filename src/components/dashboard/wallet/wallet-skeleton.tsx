import React from "react";
import Image from "next/image";

export default function ModalSkeleton() {
  return (
    <div className="modal modal-open">
      <div className="modal-box w-1/3 bg-[#26304E] max-h-screen overflow-y-auto animate-pulse">
        <div className="flex flex-col gap-6">
          <h3 className="text-sm font-semibold flex gap-2 justify-center mt-6">
            <span className="h-5 w-24 bg-gray-700 rounded"></span>
            <span className="flex gap-2">
              <span className="h-5 w-5 bg-gray-700 rounded"></span>
              <span className="h-5 w-10 bg-gray-700 rounded"></span>
            </span>
          </h3>

          <div className="flex bg-[#434E6E] py-2 px-2 rounded-lg mt-8">
            <span className="h-4 w-4 bg-gray-700 rounded"></span>
            <p className="text-xs text-wrap text-center px-1 mt-2 text-[#949DB7]">
              <span className="h-4 w-full bg-gray-700 rounded"></span>
            </p>
          </div>

          <p className="pt-4 pb-2 text-xs px-4 h-4 w-20 bg-gray-700 rounded"></p>
          <div className="flex gap-20 px-4">
            <div className="flex items-center rounded-md w-full py-2 px-4 bg-[#1A1F30]">
              <span className="h-5 w-5 bg-gray-700 rounded"></span>
              <span className="h-4 w-full bg-gray-700 rounded ml-4"></span>
            </div>
          </div>

          <p className="pt-6 pb-2 text-xs px-4 h-4 w-40 bg-gray-700 rounded"></p>
          <div className="flex gap-20 px-4">
            <div className="flex justify-center items-center rounded-md w-full py-2 px-4 bg-[#3E455B]">
              <span className="h-5 w-5 bg-gray-700 rounded"></span>
              <p className="text-sm opacity-70 h-4 w-20 bg-gray-700 rounded ml-4"></p>
            </div>
          </div>

          <div className="pt-2 mt-4">
            <div className="flex flex-col items-center text-xs">
              <p className="mt-4 mb-2 text-xs opacity-70 h-4 w-40 bg-gray-700 rounded"></p>
              <span className="h-20 w-20 bg-gray-700 rounded"></span>
              <div className="flex items-center gap-2 mt-6">
                <p className="h-4 w-40 bg-gray-700 rounded"></p>
                <button className="px-4 py-2 text-white rounded bg-gray-700">
                  <div className="flex gap-2 items-center">
                    <p className="h-4 w-12 bg-gray-700 rounded"></p>
                    <div className="h-5 w-5 bg-gray-700 rounded"></div>
                  </div>
                </button>
              </div>
            </div>

            <div className="mt-6 mb-3 flex justify-center items-center">
              <span className="h-10 w-10 bg-gray-700 rounded"></span>
              <p className="h-4 w-24 bg-gray-700 rounded ml-4"></p>
            </div>
          </div>
        </div>
        <div className="modal-backdrop"></div>
      </div>
    </div>
  );
}
