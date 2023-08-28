import React from "react";
import CategoryItem from "../category-item/category-item";
import { Category } from "../../types";

import "./directory.scss";

interface DirectoryProps {
  categories: Category[];
}

const Directory = ({ categories }: DirectoryProps) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
