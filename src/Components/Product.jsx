import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Product = ({ products }) => {
  const { addToCart, clearCart } = useContext(CartContext);
  return (
    <div>
      <div className="border h-80 relative flex flex-col justify-center items-center group transition">
        <Link to={`/product/${products.id}`}>
          <img
            className="max-h-40 group-hover:scale-110 transition duration-300"
            src={products.image}
          />
        </Link>
        <div className="absolute top-3 -right-11 group-hover:right-5 p-2 flex gap-y-2 flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => addToCart(products)}
            className="text-white text-3xl bg-red-500 p-2 w-12 h-12 flex justify-center items-center"
          >
            +
          </button>
          <Link
            to={`/product/${products.id}`}
            className="w-12 h-12 shadow-md bg-white flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-7"
            >
              <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path
                fillRule="evenodd"
                d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div>
        <div className="capitalize text-gray-500 text-sm">
          {products.category}
        </div>
        <Link to={`/product/${products.id}`}>
          <h2 className="font-semibold">{products.title}</h2>
        </Link>
        <div className="font-semibold">${products.price}</div>
      </div>
    </div>
  );
};

export default Product;
