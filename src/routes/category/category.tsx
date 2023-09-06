import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import {
  CategoriesContext,
  Product,
} from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card";
import {
  CategoryContainer,
  CategoryTitle,
} from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

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
      <CategoryTitle>
        {category?.toUpperCase()}
      </CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => {
            console.log("product", product);
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
