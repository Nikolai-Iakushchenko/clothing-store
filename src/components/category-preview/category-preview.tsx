import React from "react";
import ProductCard from "../product-card/product-card";
import {
  CategoryPreviewContainer,
  Preview,
  TitleLink,
} from "./category-preview.styles";
import { Product } from "../../store/categories/category.types";

interface CaterogyPreviewProps {
  title: string;
  products: Product[];
}

const CategoryPreview = ({
  title,
  products,
}: CaterogyPreviewProps) => (
  <CategoryPreviewContainer>
    <h2>
      <TitleLink to={title}>
        {title.toUpperCase()}
      </TitleLink>
    </h2>
    <Preview>
      {products
        .filter((_, index) => index < 3)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Preview>
  </CategoryPreviewContainer>
);

export default CategoryPreview;
