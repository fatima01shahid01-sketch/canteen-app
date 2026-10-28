import { createContext, useContext, useState } from "react";

// The shared "tray": every screen reads the same cart.
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((c) => c.id === item.id);
      if (found) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, qty: c.qty + 1 } : c
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((c) => (c.id === id ? { ...c, qty: c.qty - 1 } : c))
        .filter((c) => c.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  const clearCart = () => setCart([]);

  const count = cart.reduce((sum, c) => sum + c.qty, 0);
  const total = cart.reduce((sum, c) => sum + c.qty * c.price, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, decreaseQty, removeFromCart, clearCart, count, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
