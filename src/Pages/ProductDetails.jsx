import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductProvider";
import { Button } from "@mui/material";
import { CartContext } from "../Context/CartContext";

const ProductDetails = () => {
  //get product id with url
  const { id } = useParams();

  //get products with product useContext
  const products = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.products.find((item) => {
    return item.id === parseInt(id);
  });

  //product destructure
  const { title, price, description, image } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen overflow-auto ">
      <div className="container mx-auto flex flex-col items-center lg:flex-row p-2 ">
        {/* image */}
        <div className="max-w-[220px] lg:max-w-sm">
          <img src={image} alt="" />
        </div>

        {/* title & description */}
        <div className="p-4 flex flex-col justify-between items-baseline">
          <p className="font-semibold mb-10">{title}</p>
          <p className="text-justify mb-10">{description}</p>

          {/* price and add to cart */}
          <div className="flex justify-between items-center gap-60">
            <p className="font-semibold">$ {price}</p>
            <Button
              onClick={() => addToCart(product)}
              color="error"
              variant="contained"
            >
              add to cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
