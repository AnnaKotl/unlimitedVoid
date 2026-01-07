import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#FAFAFA] text-black">
      <h1 className="text-header font-bold mb-4">404</h1>
      <p className="text-lg mb-6 font-roboto">Page not found</p>
      <Link
        to="/"
        className="px-6 py-3 bg-gray-400 border border-gray-400 rounded-[14px] font-roboto font-medium hover:bg-gray-500 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
