// Header.jsx
import React, { useContext } from "react";
import LogoImg from '../assets/logo.jpg';
import Button from "../UI/Button";
import CartContext from '../store/CartContext';
import UserProgressContext from "../store/UserProgress";

function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  const totalItems = cartCtx.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div id="main-header">
      <div id="title">
        <img src={LogoImg} alt="This is the logo image" />
        <h1>REACTFOOD</h1>
      </div>
      <Button onClick={handleShowCart} textOnly>
        Cart ({totalItems})
      </Button>
    </div>
  );
}

export default Header;
