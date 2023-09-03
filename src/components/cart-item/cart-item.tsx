import React from "react";
import "./cart-item.scss";

export interface CartItemObj {
  name: string;
  quantity: number;
}

interface CartItemProps {
  cartItem: CartItemObj;
}

const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, quantity } = cartItem;

  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
