import React, { useContext } from "react";
import "./product-card.scss";
import Button, {
  ButtonTypeClasses,
} from "../button/button";
import { Product } from "../../contexts/products.context";
import { CartContext } from "../../contexts/cart.context";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="name" />
      <footer className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </footer>
      <Button
        onClick={addProductToCart}
        buttonType={ButtonTypeClasses.inverted}
      >
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
