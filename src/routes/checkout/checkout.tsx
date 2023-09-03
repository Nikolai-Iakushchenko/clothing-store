import React, { useContext } from "react";
import {
  CartContext,
} from "../../contexts/cart.context";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <header>
        Product Description Quantity Price Remove
      </header>
      {cartItems.map((item) => (
        <CheckoutItem item={item} />
      ))}
    </div>
  );
};

export default Checkout;
