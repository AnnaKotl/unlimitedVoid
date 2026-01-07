import React from "react";
import DateFilter from "../Controls/DateFilter";

export default function Header({ onFilter }) {
  const startDate = new Date("2026-01-01");
  const formattedDate = startDate
    .toLocaleDateString("en-GB")
    .split("/")
    .join("-");

  return (
    <header className="relative z-30">
      <div className="absolute inset-0 header-overlay"></div>
      <div className="relative z-10 mx-auto w-full xl:max-w-[1480px] px-2">
        {/* DESKTOP */}
        <div className="hidden md:grid w-full xl:max-w-[1100px] grid-cols-[1fr_2fr] items-center gap-[40px] lg:gap-[86px] mx-auto">
          <div className="flex justify-center md:justify-end py-2 px-1 lg:pb-[28px] lg:pt-[6px]">
            <a href="/">
              <img
                src="/vectors/logo.svg"
                alt="Logo"
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[138px] lg:h-[138px]"
              />
            </a>
          </div>
          <div className="grid grid-rows-[auto_auto_auto] gap-3 lg:gap-4 py-2 md:py-0 text-center sm:text-left">
            <div className="flex flex-row items-center gap-2 lg:gap-4 flex-wrap">
              <h1 className="text-[24px]">monblanproject</h1>
              <span className="text-[#3D8EDA] border border-[#3D8EDA] font-medium px-3 py-[6px] text-[13px]">
                Start on {formattedDate}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <p className="flex items-center text-sm">
                <span className="font-bold mr-1">870</span>posts
              </p>
              <p className="flex items-center text-sm">
                <span className="font-bold mr-1">11,787</span>followers
              </p>
              <p className="flex items-center text-sm">
                <span className="font-bold mr-1">112</span>following
              </p>
            </div>
            <div className="hidden md:flex items-center justify-start max-h-[30px] mt-1 sm:mt-2">
              <DateFilter onFilter={onFilter} initialStartDate={startDate} />
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex flex-col md:hidden w-full max-w-[500px] mx-auto gap-2 pb-4 pt-2">
          <div className="flex flex-row items-center gap-4 w-full justify-center">
            <a href="/">
              <img
                src="/vectors/logo.svg"
                alt="Logo"
                className="w-[80px] h-[80px]"
              />
            </a>
            <div className="flex flex-col gap-1">
              <h1 className="text-lg font-semibold text-center">
                monblanproject
              </h1>
              <span className="text-[#3D8EDA] border border-[#3D8EDA] font-medium px-2 py-1 text-[12px] text-center">
                Start on {formattedDate}
              </span>
            </div>
          </div>
          <div className="flex justify-center flex-wrap gap-4 text-sm mt-2">
            <p className="flex items-center">
              <span className="font-bold mr-1">870</span>posts
            </p>
            <p className="flex items-center">
              <span className="font-bold mr-1">11,787</span>followers
            </p>
            <p className="flex items-center">
              <span className="font-bold mr-1">112</span>following
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
