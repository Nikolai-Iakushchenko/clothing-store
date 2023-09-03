import React from "react";
import { CartItemObj } from "../../contexts/cart.context";

interface CheckoutItemProps {
  item: CartItemObj;
}

const CheckoutItem = ({ item }: CheckoutItemProps) => {
  const { imageUrl, name, quantity, price } = item;

  return (
    <div>
      <img src={imageUrl} alt={name} />
      <span>{name}</span>
      <span>
        <button>{"<"}</button>
        {quantity}
        <button>{">"}</button>
        {price}
        <button>x</button>
      </span>
    </div>
  );
};

export default CheckoutItem;
