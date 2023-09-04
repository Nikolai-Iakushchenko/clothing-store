import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import "./checkout.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((sum, cartItem) => {
    return sum + cartItem.quantity * cartItem.price;
  }, 0);

  return (
    <div className="checkout-container">
      <header className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </header>
      {cartItems.map((cartItem) => (
        <CheckoutItem
          key={cartItem.id}
          cartItem={cartItem}
        />
      ))}
      <span className="total">Total:{total}</span>
    </div>
  );
};

export default Checkout;
