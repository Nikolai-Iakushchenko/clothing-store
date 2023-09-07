import React from "react";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";
import { useNavigate } from "react-router-dom";

export interface Category {
  id: number;
  imageUrl: string;
  title: string;
  route: string;
}

interface CategoryItemProps {
  category: Category;
}

const DirectoryItem = ({ category }: CategoryItemProps) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHanlder = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHanlder}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
