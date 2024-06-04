import React, { useContext } from "react";
import { SideBarContext } from "../Context/SideBarContext";

const SideBar = () => {
  const { isOpen, handleClose } = useContext(SideBarContext);
  return (
    <div>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } w-full bg-white h-full fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 px-4 lg:px-[35px] z-10`}
      >
        <div className="flex flex-row-reverse justify-between items-center py-5 border-b-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 cursor-pointer"
            onClick={handleClose}
          >
            <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="font-semibold capitalize">Shopping Bag (0)</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
