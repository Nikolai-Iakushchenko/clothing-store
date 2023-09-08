import React, { useContext } from "react";
import "./product-card.styles";
import { BUTTON_TYPES_CLASSES } from "../button/button";
import { Product } from "../../store/categories/category.types";
import { CartContext } from "../../contexts/cart.context";
import {
  ProductCardButton,
  ProductCardContainer,
  ProductCardFooter,
  ProductCardImg,
  ProductCardName,
  ProductCardPrice,
} from "./product-card.styles";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

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
