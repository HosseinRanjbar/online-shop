import React, { createContext, useEffect, useState } from "react";

//create cart useContext
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  //cart state
  const [cart, setCart] = useState([]);
  //cart amount item
  const [cartAmount, setCartAmount] = useState(0);
  useEffect(() => {
    const cartAmount = cart.reduce((pvalue, cvalue) => {
      return pvalue + cvalue.amount;
    }, 0);
    setCartAmount(cartAmount);
  }, [cart]);

  //total price state
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total = cart.reduce((pvalue, cvalue) => {
      return pvalue + cvalue.price * cvalue.amount;
    }, 0);
    setTotal(total);
  });

  //add to cart fuunction
  const addToCart = (products) => {
    const newItem = { ...products, amount: 1 };

    //check th cart if the newItem is already in the cart
    const cartItem = cart.find((item) => {
      return item.id == products.id;
    });

    //if item exist
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id == products.id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  //remove item from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  //clear cart
  const clearCart = () => {
    setCart([]);
  };

  //increase amount of item
  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item);
  };
  //decrease amount of item
  const decreaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);

    if (item.amount > 1) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      removeFromCart(id);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        total,
        cartAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
