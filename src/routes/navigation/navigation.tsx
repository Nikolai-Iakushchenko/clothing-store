import { Link, Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { ROUTES } from "../types";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

const Navigation = () => {
  const { currentUser, setCurrentUser } =
    useContext(UserContext);

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
          {currentUser ? (
            <span
              onClick={signOutUser}
              className="nav-link"
            >
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to={ROUTES.AUTH}>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
