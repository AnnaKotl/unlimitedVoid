import React from "react";
import { TailSpin } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center w-full py-8">
      <TailSpin height={40} width={40} color="#40AF79" ariaLabel="loading" />
    </div>
  );
}
