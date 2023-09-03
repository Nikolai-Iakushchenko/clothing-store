import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const Checkout = () => {
  const { cartItems, addItemToCart } =
    useContext(CartContext);

  const total = cartItems.reduce((sum, cartItem) => {
    return sum + cartItem.quantity * cartItem.price;
  }, 0);

  return (
    <div>
      <header>
        Product Description Quantity Price Remove
      </header>
      {cartItems.map((item) => (
        <CheckoutItem item={item} />
      ))}
      <footer>Total:{total}</footer>
    </div>
  );
};

export default Checkout;
