import { useState } from "react";
import { CartContext } from "./cartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
