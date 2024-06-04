import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import Tooltip from "./Tooltip";

const Product = ({ products }) => {
  const { addToCart, clearCart } = useContext(CartContext);
  return (
    <div>
      <div className=" h-80 relative flex flex-col justify-center items-center group transition">
        <Link to={`/product/${products.id}`}>
          <img
            className="max-h-40 group-hover:scale-110 transition duration-300"
            src={products.image}
          />
        </Link>
        <div className="bg-red-100 rounded absolute top-3 -right-11 group-hover:right-5 p-2 flex gap-y-2 flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Tooltip top={true} tooltipText={"Add to Cart"}>
            <button
              onClick={() => addToCart(products)}
              className="text-white text-3xl bg-red-500 p-2 w-12 h-12 flex justify-center items-center rounded-md"
            >
              +
            </button>
          </Tooltip>
          <Tooltip bottom={true} tooltipText={"product page"}>
            <Link to={`/product/${products.id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-black bg-white p-2 w-12 h-12 flex justify-center items-center rounded-md"
            >
              <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path
                fillRule="evenodd"
                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            </Link>
          </Tooltip>
        </div>
      </div>
      <div>
        <div className="capitalize text-gray-500 text-sm">
          {products.category}
        </div>
        <Link to={`/product/${products.id}`}>
          <h2 className="font-semibold truncate">{products.title}</h2>
        </Link>
        <div className="font-semibold">${products.price}</div>
      </div>
    </div>
  );
};

export default Product;
