import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import { ROUTES } from "./routes/types";

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
