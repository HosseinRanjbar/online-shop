import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { cart, clearCart, total, cartAmount } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      <div className="h-screen">
        {cart.map((item) => {
          console.log(item.title);
          return <div key={item.id}>{item.title}</div>;
        })}
        hei
      </div>
    </div>
  );
};

export default Cart;
