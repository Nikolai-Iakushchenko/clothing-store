import { Link, Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { ROUTES } from "../types";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../contexts/cart.context";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
  SignOut,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to={ROUTES.HOME}>
          <div>
            <CrwnLogo className="logo" />
          </div>
        </LogoContainer>
        <NavLinks>
          <NavLink to={ROUTES.SHOP}>SHOP</NavLink>
          {currentUser ? (
            <SignOut onClick={signOutUser}>
              SIGN OUT
            </SignOut>
          ) : (
            <NavLink to={ROUTES.AUTH}>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
