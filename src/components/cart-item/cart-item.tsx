import React from "react";
import { CartItemObj } from "../../contexts/cart.context";
import "./cart-item.styles";
import {
  CartItemContainer,
  CartItemImg,
  CartItemName,
  ItemDetails,
} from "./cart-item.styles";

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
