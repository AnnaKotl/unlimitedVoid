import React, { forwardRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomInput = forwardRef(
  ({ value, onClick, onClear, placeholder, displayValue }, ref) => {
    return (
      <div className="relative w-full flex items-center h-[32px] rounded-[4px] border border-[#DEDEDE] px-2 pr-[52px] bg-white">
        <input
          ref={ref}
          type="text"
          readOnly
          value={displayValue}
          placeholder={placeholder}
          onClick={onClick}
          className={`
            h-full w-full bg-transparent text-[16px] font-normal text-[#5F5F5F] 
            cursor-pointer focus:outline-none
          `}
        />

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClear();
          }}
          className={`
            absolute right-6 top-1/2 -translate-y-1/2
            w-[30px] h-[30px] p-1
            rounded
            bg-[#f9f6f6]
            border border-[#DEDEDE]
            text-[#5F5F5F]
            hover:text-black
          `}
        >
          ✕
        </button>

        <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-[30px] h-[30px] p-1 rounded fill-current text-[#5F5F5F] bg-[#f9f6f6] pointer-events-none">
          <use xlinkHref="/icons/sprite.svg#bx_bx-calendar" />
        </svg>
      </div>
    );
  }
);

export default function DateFilter({ onFilter, initialStartDate = null }) {
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    onFilter?.({
      from: startDate ? startDate.toISOString().split("T")[0] : null,
      to: endDate ? endDate.toISOString().split("T")[0] : null,
    });
  }, [startDate, endDate, onFilter]);

  const formatDate = (date) => {
    if (!date) return "";
    const d = date.getDate().toString().padStart(2, "0");
    const m = (date.getMonth() + 1).toString().padStart(2, "0");
    const y = date.getFullYear();
    return `${d}-${m}-${y}`;
  };

  return (
    <div className="z-50 flex flex-col md:flex-row items-center justify-center md:pb-5 lg:pb-0 gap-2 lg:gap-3 mt-2 md:mt-0">
      <span className="z-50 text-[16px] font-normal w-full text-center md:text-left md:w-auto">
        Date
      </span>

      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-[11px] w-full md:w-auto">
        {/* FROM */}
        <div className="flex items-center justify-center w-full md:w-[162px]">
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              if (endDate && date > endDate) {
                setEndDate(null);
              }
              setStartDate(date);
            }}
            dateFormat="dd-MM-yyyy"
            maxDate={endDate || null}
            popperClassName="!z-[9999]"
            customInput={
              <CustomInput
                placeholder="from"
                displayValue={startDate ? formatDate(startDate) : "from"}
                onClear={() => setStartDate(null)}
              />
            }
          />
        </div>

        {/* TO */}
        <div className="flex items-center justify-center w-full md:w-[162px]">
          <DatePicker
            selected={endDate}
            onChange={(date) => {
              if (startDate && date < startDate) {
                setStartDate(null);
              }
              setEndDate(date);
            }}
            dateFormat="dd-MM-yyyy"
            minDate={startDate || null}
            popperClassName="!z-[9999]"
            customInput={
              <CustomInput
                placeholder="to"
                displayValue={endDate ? formatDate(endDate) : "to"}
                onClear={() => setEndDate(null)}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
