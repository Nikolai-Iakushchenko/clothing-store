import React, { useContext } from "react";
import {
  CartContext,
  CartItemObj,
} from "../../contexts/cart.context";

interface CheckoutItemProps {
  cartItem: CartItemObj;
}

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <span onClick={() => removeItemFromCart(cartItem)}>
        {"<"}
      </span>
      <span>{quantity}</span>
      <span onClick={() => addItemToCart(cartItem)}>
        {">"}
      </span>
      {price}
      <button onClick={() => removeItemFromCart(cartItem)}>
        x
      </button>
    </div>
  );
};

export default CheckoutItem;
