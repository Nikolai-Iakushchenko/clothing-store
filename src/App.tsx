import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home";

enum ROUTES {
  HOME = "/",
  SHOP = "shop",
}

const Navigation = () => (
  <div>
    <div>
      <h1>Navigation Bar</h1>
      <Link to={ROUTES.HOME}>Home</Link>
      <Link to={ROUTES.SHOP}>Shop</Link>
    </div>
    <Outlet />
  </div>
);

const Shop = () => <div>Shop</div>;

const App = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.SHOP} element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
