import React from "react";
import "./cart-item.styles";
import {
  CartItemContainer,
  CartItemImg,
  CartItemName,
  ItemDetails,
} from "./cart-item.styles";
import { CartItemObj } from "../../store/cart/cart.types";

interface CartItemProps {
  cartItem: CartItemObj;
}

const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt="name" />
      <ItemDetails>
        <CartItemName>{name}</CartItemName>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
