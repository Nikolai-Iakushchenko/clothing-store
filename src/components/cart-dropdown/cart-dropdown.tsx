import React, { useContext } from "react";
import "./cart-dropdown.scss";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      {cartItems.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
