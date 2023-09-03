import React from "react";
import "./cart-dropdown.scss";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";

const CartDropdown = () => {
  return (
    <div
      style={{ display: "hidden" }}
      className="cart-dropdown-container"
    >
      <div className="cart-items"></div>
      {[].map((item) => (
        <CartItem cartItem={item} />
      ))}
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
