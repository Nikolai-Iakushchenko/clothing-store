import { Link, Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { ROUTES } from "../types";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import "./navigation.scss";
import { UserContext } from "../../contexts/user.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log("currentUser", currentUser);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to={ROUTES.HOME}>
          <div>
            <CrwnLogo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={ROUTES.SHOP}>
            SHOP
          </Link>
          <Link className="nav-link" to={ROUTES.AUTH}>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
