import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category";
import { fetchCategoriesAsync } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
