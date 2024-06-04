import { Opacity } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";

const Tooltip = ({ children, tooltipText }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center relative ">
      <button
        className=" p-4 text-white rounded"
        onMouseEnter={() => {
          setTooltipOpen(true);
        }}
        onMouseLeave={() => {
          setTooltipOpen(false);
        }}
      >
        {children}
      </button>

      <div
        className={`w-max transition-all duration-200 absolute bg-gray-200 p-2 border rounded ${
          tooltipOpen ? "" : "opacity-0"
        } -translate-y-16`}
      >
        {tooltipText}
        <div className="w-0 h-0 border-r-[12px] border-solid border-r-transparent border-l-transparent border-left-[12px] border-t-[12px] absolute -bottom-3 left-1/2" />
        <div className="w-0 h-0 border-l-[12px] border-solid border-r-transparent border-l-transparent border-left-[12px] border-t-[12px] absolute -bottom-3 right-1/2" />
      </div>
    </div>
  );
};

export default Tooltip;
