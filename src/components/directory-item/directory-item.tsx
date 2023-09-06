import React from "react";
import { Category } from "../../types";

import "./directory-item.styles";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

interface CategoryItemProps {
  category: Category;
}

const DirectoryItem = ({ category }: CategoryItemProps) => {
  const { imageUrl, title } = category;

  return (
    <DirectoryItemContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
