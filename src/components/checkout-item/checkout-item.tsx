import React, { useContext } from "react";
import {
  CartContext,
  CartItemObj,
} from "../../contexts/cart.context";
import "./checkout-item.styles";
import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

interface CheckoutItemProps {
  cartItem: CartItemObj;
}

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const {
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
  } = useContext(CartContext);

  const clearItemHandler = () =>
    clearItemFromCart(cartItem);

  const addItemHandler = () => addItemToCart(cartItem);

  const removeItemHandler = () =>
    removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer src={imageUrl} alt={name} />
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
