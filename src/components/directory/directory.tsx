import React from "react";
import DirectoryItem from "../directory-item/directory-item";
import { Category } from "../../types";
import { DirectoryContainer } from "./directory.styles";

interface DirectoryProps {
  categories: Category[];
}

const Directory = ({ categories }: DirectoryProps) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem
          key={category.id}
          category={category}
        />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
