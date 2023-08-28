import React from "react";
import CategoryItem from "../category-item/category-item";
import { Category } from "../../types";

import "./categories.styles.scss";

interface CategoriesProps {
  categories: Category[];
}

const Categories = ({ categories }: CategoriesProps) => {
  return (
    <>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </>
  );
};

export default Categories;
