import React, { useContext } from "react";
import { SideBarContext } from "../Context/SideBarContext";
import { CartContext } from "../Context/CartContext";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { isOpen, handleClose } = useContext(SideBarContext);
  const { cart, clearCart, total, cartAmount } = useContext(CartContext);
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
            className="size-10 cursor-pointer hover:bg-neutral-100 hover:shadow rounded-full p-1 active:bg-slate-200"
            onClick={handleClose}
          >
            <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="font-semibold capitalize">
            Shopping Bag ({cartAmount})
          </div>
        </div>
        <div className="overflow-y-auto max-h-[37rem]">
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
        {/* total cart */}
        <div className="p-2 flex justify-between items-center">
          <div>
            <p className="text-2xl font-semibold ">
              <span>Total:</span> $ {parseFloat(total).toFixed(2)}
            </p>
          </div>
          <div>
            <Button onClick={clearCart} color="warning" variant="contained">
              clear all
            </Button>
          </div>
        </div>
        <div>
          {/* <div className="mt-10">
            <Button className="w-full" variant="contained">
              View Cart
            </Button>
          </div> */}
          <div className="mt-5 text-4xl">
            <Link to={"/cart"}>
              <Button
                className="w-full font-semibold"
                color="inherit"
                variant="contained"
              >
                pay
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
