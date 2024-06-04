import { Opacity } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Tooltip = ({ children, tooltipText, top, bottom, right, left }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center relative ">
      <div
        className=" text-white rounded items-center"
        onMouseEnter={() => {
          setTooltipOpen(true);
        }}
        onMouseLeave={() => {
          setTooltipOpen(false);
        }}
      >
        
        {children}
      </div>
      {/* text bottom */}
      {bottom && (
        <div
          className={`w-max transition-all duration-200 absolute bg-gray-200 p-2 border rounded ${
            tooltipOpen ? "" : "opacity-0"
          } translate-y-16`}
        >
          {tooltipText}
          <div className="w-0 h-0 border-r-[12px] border-solid border-l-transparent border-r-transparent border-right-[12px] border-b-[12px] absolute -top-3 left-1/2" />
          <div className="w-0 h-0 border-l-[12px] border-solid border-l-transparent border-r-transparent border-right-[12px] border-b-[12px] absolute -top-3 right-1/2" />
        </div>
      )}
      {/* text top*/}
      {top && (
        <div
          className={`w-max transition-all duration-200 absolute bg-gray-200 p-2 border rounded ${
            tooltipOpen ? "" : "opacity-0"
          } -translate-y-16`}
        >
          {tooltipText}
          <div className="w-0 h-0 border-r-[12px] border-solid border-r-transparent border-l-transparent border-left-[12px] border-t-[12px] absolute -bottom-3 left-1/2" />
          <div className="w-0 h-0 border-l-[12px] border-solid border-r-transparent border-l-transparent border-left-[12px] border-t-[12px] absolute -bottom-3 right-1/2" />
        </div>
      )}
      {/* text left*/}
      {left && (
        <div
          className={`w-max transition-all duration-200 absolute bg-gray-200 p-2 border rounded ${
            tooltipOpen ? "" : "opacity-0"
          } -translate-x-32`}
        >
          {tooltipText}
          <div className="w-0 h-0 border-l-[12px] border-solid border-t-transparent border-b-transparent border-left-[12px] border-b-[12px] absolute top-5 -right-3" />
          <div className="w-0 h-0 border-l-[12px] border-solid border-t-transparent border-b-transparent border-left-[12px] border-t-[12px] absolute top-2 -right-3" />
        </div>
      )}
      {/* text right*/}
      {right && (
        <div
          className={`w-max transition-all duration-200 absolute bg-gray-200 p-2 border rounded ${
            tooltipOpen ? "" : "opacity-0"
          } translate-x-32`}
        >
          {tooltipText}
          <div className="w-0 h-0 border-r-[12px] border-solid border-t-transparent border-b-transparent border-left-[12px] border-t-[12px] absolute top-2 -left-3" />
          <div className="w-0 h-0 border-r-[12px] border-solid border-t-transparent border-b-transparent border-left-[12px] border-b-[12px] absolute top-5 -left-3" />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
