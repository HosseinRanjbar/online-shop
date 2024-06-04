import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductProvider";
import Product from "../Components/Product";
const Home = () => {
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter((item) => {
    return item.category === "women's clothing";
  });

  return (
    <div>
      <section className="z-1">
        <div className="container mx-auto flex flex-col items-center pt-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm md:max-w-none md:mx">
            {products.map((products) => (
              <div className="w-full " key={products.id}>
                {<Product products={products} />}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
