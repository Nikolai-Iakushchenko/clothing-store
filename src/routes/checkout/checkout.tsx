import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import "./checkout.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((sum, cartItem) => {
    return sum + cartItem.quantity * cartItem.price;
  }, 0);

  return (
    <div>
      <h1>checkout page</h1>
      <div>
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} cartItem={item} />
        ))}
      </div>
      <footer>Total:{total}</footer>
    </div>
  );
};

export default Checkout;
