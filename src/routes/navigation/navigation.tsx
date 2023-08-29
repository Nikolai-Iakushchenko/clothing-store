import { Link, Outlet } from "react-router-dom";
import React from "react";
import { ROUTES } from "../types";

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

export default Navigation;
