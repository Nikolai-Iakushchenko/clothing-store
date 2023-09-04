import React, { useContext } from "react";
import {
  CartContext,
  CartItemObj,
} from "../../contexts/cart.context";
import "./checkout-item.scss";

interface CheckoutItemProps {
  cartItem: CartItemObj;
}

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <img
        className="image-container"
        src={imageUrl}
        alt={name}
      />
      <span className="name">{name}</span>
      <span onClick={() => removeItemFromCart(cartItem)}>
        {"<"}
      </span>
      <span className="quantity">{quantity}</span>
      <span onClick={() => addItemToCart(cartItem)}>
        {">"}
      </span>
      <span className="price">{price}</span>
      <div onClick={() => removeItemFromCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
