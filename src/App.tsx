import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home";

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
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ANOTHER_PAGE} element={"another page"} />
      </Routes>
    </>
  );
};

export default App;
