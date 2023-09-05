import React from "react";
import DirectoryItem from "../directory-item/directory-item";
import { Category } from "../../types";

import "./directory.scss";

interface DirectoryProps {
  categories: Category[];
}

const Directory = ({ categories }: DirectoryProps) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem
          key={category.id}
          category={category}
        />
      ))}
    </div>
  );
};

export default Directory;
