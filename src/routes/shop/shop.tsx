import React, { Fragment, useContext } from "react";
import {
  CategoriesContext,
  Product,
} from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card";
import "./shop.scss";
import { Link } from "react-router-dom";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>
            <Link to={`${title}`}>{title}</Link>
          </h2>
          <div className="products-container">
            {categoriesMap[title]
              .map((product: Product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))
              .slice(0, 3)}
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Shop;
