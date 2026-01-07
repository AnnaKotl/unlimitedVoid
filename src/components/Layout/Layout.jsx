import React from "react";
import Header from "../Header/Header";
import Spinner from "./Spinner";

export default function Layout({ children, loading = false, onFilter }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <img
        src="/vectors/top-left.svg"
        alt="decorative top left"
        className="absolute -top-[10px] -left-[5px] w-[500px] sm:h-auto md:-top-[20px] md:-left-[10px] md:w-[689px] md:h-[482px] z-0"
      />
      <Header onFilter={onFilter} />
      {loading && <Spinner />}
      <div className="mx-auto w-full max-w-[1440px] px-2 sm:px-8 md:px-20 lg:px-50 xl:px-70">
        <main>{children}</main>
      </div>
      <img
        src="/vectors/bottom-right.svg"
        alt="decorative bottom right"
        className="absolute bottom-[10px] -right-[20px] md:bottom-[40px] md:-right-[40px] w-[285px] h-[335px] md:w-[315px] md:h-[368px] pointer-events-none select-none"
      />
    </div>
  );
}
