import React, { useContext } from "react";
import {
  CartContext,
  CartItemObj,
} from "../../contexts/cart.context";

interface CheckoutItemProps {
  item: CartItemObj;
}

const CheckoutItem = ({ item }: CheckoutItemProps) => {
  const { imageUrl, name, quantity, price } = item;
  const {
    addItemToCart,
    decrementItemInTheCart,
    removeItemFromCart,
  } = useContext(CartContext);

  const decrement = () => {
    decrementItemInTheCart(item);
  };
  const increment = () => {
    addItemToCart(item);
  };

  const remove = () => {
    removeItemFromCart(item);
  };

  return (
    <div>
      <img src={imageUrl} alt={name} />
      <span>{name}</span>
      <span>
        <button onClick={decrement}>{"<"}</button>
        {quantity}
        <button onClick={increment}>{">"}</button>
        {price}
        <button onClick={remove}>x</button>
      </span>
    </div>
  );
};

export default CheckoutItem;
