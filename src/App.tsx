import React from "react";
import Directory from "./components/directory/directory";
import { Link, Route, Routes } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

enum ROUTES {
  HOME = "/",
  ANOTHER_PAGE = "another-page",
}

const App = () => {
  return (
    <>
      <header>
        Header
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.ANOTHER_PAGE}>Another page</Link>
      </header>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={<Directory categories={categories} />}
        />
        <Route path={ROUTES.ANOTHER_PAGE} element={"another page"} />
      </Routes>
    </>
  );
};

export default App;
