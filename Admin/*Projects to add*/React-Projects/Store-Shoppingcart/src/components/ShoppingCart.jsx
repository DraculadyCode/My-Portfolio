import React from "react";
import { useReducer, useContext, createContext } from "react";
import { useCart } from "../contexts/CartContext";
import "./App.css";

function ShoppingCart() {
  const { cart, dispatch } = useCart();

  function removeFromCart(product) {
    dispatch({ type: "Remove_Product", product });
  }
  function increaseQantity(product) {
    dispatch({ type: "Add_Product", product });
  }
  function decreaseQuantity(product) {
    dispatch({ type: "Decrease_Quantity", product });
  }
  function convertedPrice(priceString) {
    return parseFloat(priceString.replace(/[^\d.]/g, ""));
  }

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cart
    .reduce(
      (acc, item) =>
        acc + (item.quantity || 0) * (convertedPrice(item.price) || 0),
      0
    )
    .toFixed(2);

  return (
    <div className="ShoppingCart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.productName} - {item.quantity} * {item.price}
              <button onClick={() => removeFromCart(item)}>Remove</button>
              <button onClick={() => increaseQantity(item)}>+</button>
              <button onClick={() => decreaseQuantity(item)}>-</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total Items: {totalItems}</h3>
      <h3>Total Amount: £{totalAmount} </h3>
    </div>
  );
}

export default ShoppingCart;
