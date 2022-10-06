import React from "react";
import "./navigation.style.scss";
import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen }=useContext(CartContext);
  console.log(currentUser);


  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <CrwnLogo className="" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>Sign out</span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sing In
            </Link>
          )}
          <CartIcon/>
          </div>
          {isCartOpen && <CartDropdown/>}
          </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
