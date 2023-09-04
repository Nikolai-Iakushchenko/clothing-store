import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  CategoriesContext,
  Product,
} from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card";

const CaterogyPreview = () => {
  const location = useLocation();
  const { categoriesMap } = useContext(CategoriesContext);

  const title = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1,
  );

  return (
    <>
      <h2>{title}</h2>
      <div className="products-container">
        {categoriesMap[title].map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default CaterogyPreview;
