// Cart.jsx
import { useContext } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import CartContext from "../store/CartContext";
import React from "react";
import { currencyFormatter } from "../util/formatter";
import UserProgressContext from "../store/UserProgress";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const items = cartCtx.items;
  const cartTotal = cartCtx.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  function handleClose() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => <CartItem key={item.id} item={item}/>)}
      </ul>
    
      <p className="cart-total">
        {currencyFormatter.format(cartTotal)}
      </p>

      <p className="modal-actions">
        <Button textOnly onClick={handleClose}>Close</Button>
        {cartCtx.items.length>0 && <Button onClick={handleGoToCheckout}>Go to checkout</Button>}
      </p>
    </Modal>
  );
}
