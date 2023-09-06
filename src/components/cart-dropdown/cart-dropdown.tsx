import React, { useContext } from "react";
import "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/types";
import {
  CartDropdownContainer,
  CartItems,
  CheckoutButton,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } =
    useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate(ROUTES.CHECKOUT);
    setIsCartOpen(false);
  };

  if (!cartItems) {
    return <EmptyMessage>Your cart is empty!</EmptyMessage>;
  }

  return (
    <CartDropdownContainer className="cart-dropdown-container">
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <CheckoutButton onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </CheckoutButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
