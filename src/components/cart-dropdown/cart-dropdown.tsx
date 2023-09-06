import React, { useContext } from "react";
import "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item";
import {
  CartContext,
  CartItemObj,
} from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/types";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";
import Button from "../button/button";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } =
    useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate(ROUTES.CHECKOUT);
    setIsCartOpen(false);
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item: CartItemObj) => (
            <CartItem key={item.id} cartItem={item} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
