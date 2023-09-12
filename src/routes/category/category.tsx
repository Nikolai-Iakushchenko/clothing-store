import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../store/categories/category.types";
import ProductCard from "../../components/product-card/product-card";
import {
  CategoryContainer,
  Title,
} from "./category.styles";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState<Product[]>([
    // @ts-ignore
    categoriesMap[category],
  ]);

  useEffect(() => {
    // @ts-ignore
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category?.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
};

export default Category;
