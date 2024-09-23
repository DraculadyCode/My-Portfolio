import { useReducer, useContext, createContext } from "react";
import React from "react";

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "Add_Product":
      const existingProduct = state.find(
        (item) => item.id === action.product.id
      );
      if (existingProduct) {
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.product, quantity: 1 }];
    case "Decrease_Quantity":
      return state
        .map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 }
            : item
        )
        .filter((item) => item.quantity > 0);

    case "Remove_Product":
      return state.filter((item) => item.id !== action.product.id);

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
