import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomInput = forwardRef(({ value, onClick, onClear, placeholder }, ref) => {
  return (
    <div className="relative w-[162px] h-[28px] rounded-[4px] border border-[#DEDEDE] flex items-center px-2 bg-transparent">
      <input
        type="text"
        readOnly
        ref={ref}
        value={value || ""}
        placeholder={placeholder}
        onClick={onClick}
        className="h-full w-full bg-transparent text-[16px] font-normal text-[#5F5F5F] cursor-pointer focus:outline-none pr-[30px]"
      />
      {value && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClear();
          }}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-[26px] h-[26px] p-1 rounded bg-[#f9f6f6] border border-[#DEDEDE] text-[#5F5F5F] hover:text-black"
        >
          ✕
        </button>
      )}
      <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-[26px] h-[26px] p-1 rounded fill-current text-[#5F5F5F] bg-[#f9f6f6] pointer-events-none">
        <use xlinkHref="/icons/sprite.svg#bx_bx-calendar" />
      </svg>
    </div>
  );
});

export default function DateFilter({ onFilter, initialStartDate = null }) {
  const [startDate, setStartDate] = React.useState(initialStartDate);
  const [endDate, setEndDate] = React.useState(null);

  React.useEffect(() => {
    if (onFilter) {
      onFilter({
        from: startDate ? startDate.toISOString().split("T")[0] : null,
        to: endDate ? endDate.toISOString().split("T")[0] : null,
      });
    }
  }, [startDate, endDate, onFilter]);

  return (
    <div className="z-50 flex flex-col md:flex-row md:items-center items-center justify-center gap-2 md:gap-4 mt-2 md:mt-0">
      <span className="text-[16px] font-normal text-[#5F5F5F] w-full text-center md:text-left md:w-auto">
        Date
      </span>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-[11px] w-full md:w-auto">
        <DatePicker
          selected={startDate}
          onChange={setStartDate}
          dateFormat="dd_MM_yyyy"
          placeholderText="from"
          popperClassName="!z-[9999]"
          customInput={<CustomInput onClear={() => setStartDate(null)} placeholder="from" />}
        />
        <DatePicker
          selected={endDate}
          onChange={setEndDate}
          dateFormat="dd_MM_yyyy"
          placeholderText="to"
          popperClassName="!z-[9999]"
          customInput={<CustomInput onClear={() => setEndDate(null)} placeholder="to" />}
        />
      </div>
    </div>
  );
}
