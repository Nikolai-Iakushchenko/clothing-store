import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import { ROUTES } from "./routes/types";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.SHOP} element={<Shop />} />
          <Route path={ROUTES.AUTH} element={<Authentication />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
