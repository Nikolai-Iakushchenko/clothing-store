import React, { useContext } from "react";
import "./cart-dropdown.scss";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/types";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } =
    useContext(CartContext);
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate(ROUTES.CHECKOUT);
    setIsCartOpen(false);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={navigateToCheckout}>
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
