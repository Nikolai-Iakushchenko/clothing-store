import { Link, Outlet } from "react-router-dom";
import React from "react";
import { ROUTES } from "../types";

const Navigation = () => (
  <>
    <div className="navigation">
      <Link className="logo-container" to={ROUTES.HOME}>
        <div>Logo</div>
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to={ROUTES.HOME}>
          HOME
        </Link>
        <Link className="nav-link" to={ROUTES.SHOP}>
          SHOP
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);

export default Navigation;
