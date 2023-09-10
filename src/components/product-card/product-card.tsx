import React from "react";
import "./product-card.styles";
import { BUTTON_TYPES_CLASSES } from "../button/button";
import { Product } from "../../store/categories/category.types";
import {
  ProductCardButton,
  ProductCardContainer,
  ProductCardFooter,
  ProductCardImg,
  ProductCardName,
  ProductCardPrice,
} from "./product-card.styles";
import { addItemToCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;

  const addProductToCart = () =>
    dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <ProductCardImg src={imageUrl} alt="name" />
      <ProductCardFooter>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardPrice>{price}</ProductCardPrice>
      </ProductCardFooter>
      <ProductCardButton
        onClick={addProductToCart}
        buttonType={BUTTON_TYPES_CLASSES.inverted}
      >
        Add to card
      </ProductCardButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
