import React, { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductProvider";
import Product from "../Components/Product";
const Home = () => {
  const [filter, setFilter] = useState("all");
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter((item) => {
    if (filter === "men's clothing") {
      return item.category === "men's clothing";
    }
    if (filter === "women's clothing") {
      return item.category === "women's clothing";
    }
    if (filter === "electronics") {
      return item.category === "electronics";
    }
    if (filter === "jewelery") {
      return item.category === "jewelery";
    } else {
      return products;
    }
  });
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <section className="z-1 mb-10">
        <div className="container mx-auto flex flex-col items-center pt-56 ">
          <div className="left-48 absolute top-40">
            <select
              className="border rounded"
              defaultValue={"all"}
              name="filter"
              id="filter"
              onChange={handleChange}
            >
              <option className="capitalize" value="all">
                All
              </option>
              <option className="capitalize" value="men's clothing">
                Men's clothing
              </option>
              <option className="capitalize" value="jewelery">
                Jewelery
              </option>
              <option className="capitalize" value="electronics">
                Electronics
              </option>
              <option className="capitalize" value="women's clothing">
                Women's clothing
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm md:max-w-none md:mx min-h-screen">
            {filteredProducts.map((products) => (
              <div
                className="w-full shadow-lg p-2 h-fit border rounded-sm"
                key={products.id}
              >
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
