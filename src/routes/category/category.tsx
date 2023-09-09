import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../store/categories/category.types";
import ProductCard from "../../components/product-card/product-card";
import {
  CategoryContainer,
  CategoryTitle,
} from "./category.styles";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState<Product[]>([
    categoriesMap[category],
  ]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>
        {category?.toUpperCase()}
      </CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => {
            if (!product) return null;

            return (
              <ProductCard
                key={product.id}
                product={product}
              />
            );
          })}
      </CategoryContainer>
    </>
  );
};

export default Category;
