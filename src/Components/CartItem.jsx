import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const CartItem = ({ item }) => {
  //destructure item
  const { id, title, image, price, amount } = item;
  //use cart context
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  return (
    <>
      <div className="flex flex-col justify-between items-center border-b">
        <div className="w-full min-h-36 flex p-5 gap-x-4 max-h-40">
          {/* image */}
          <Link to={`/product/${id}`}>
            <img className="max-w-20" src={image} alt="" />
          </Link>

          {/* title and remove icon */}
          <div className="flex flex-1 justify-between items-start ">
            <div className="flex flex-col gap-3">
              <Link
                className="font-medium hover:underline max-w-60"
                to={`/product/${id}`}
              >
                {title}
              </Link>

              {/* pricing */}
              <div className="flex justify-start items-center gap-x-3.5">
                <div className="flex justify-between items-center border">
                  {/* add */}
                  <div
                    onClick={() => increaseAmount(id)}
                    className="w-1/3 flex justify-center items-center hover:bg-green-600 hover:text-white cursor-pointer p-2"
                  >
                    +
                  </div>
                  {/* qty */}
                  <div className="w-1/3 flex justify-center items-center p-2">
                    {amount}
                  </div>
                  {/* minus */}
                  <div
                    onClick={() => decreaseAmount(id)}
                    className="w-1/3 flex justify-center items-center hover:bg-red-600 hover:text-white cursor-pointer p-2"
                  >
                    -
                  </div>
                </div>
                {/* each item price */}
                <div>${price}</div>
              </div>
            </div>
          </div>

          {/* remove icon*/}
          <div className="flex flex-col justify-between items-end gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer"
              onClick={() => removeFromCart(id)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
            {/* total price */}
            <div>${parseFloat(price * amount).toFixed(2)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
