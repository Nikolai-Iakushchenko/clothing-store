import React from "react";
import { Product } from "../../contexts/categories.context";
import ProductCard from "../product-card/product-card";
import "./category-preview.scss";
import { Link } from "react-router-dom";

interface CaterogyPreviewProps {
  title: string;
  products: Product[];
}

const CaterogyPreview = ({
  title,
  products,
}: CaterogyPreviewProps) => (
  <div className="category-preview-container">
    <h2>
      <Link to={title} className="title">
        {title.toUpperCase()}
      </Link>
    </h2>
    <div className="preview">
      {products
        .filter((_, index) => index < 3)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);

export default CaterogyPreview;
