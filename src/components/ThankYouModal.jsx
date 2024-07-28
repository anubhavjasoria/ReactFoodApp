import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { currencyFormatter } from "../util/formatter";

export default function ThankYouModal({ open, onClose }) {
  const cartCtx = useContext(CartContext);

  const items = cartCtx.items;
  const cartTotal = cartCtx.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  return (
    <Modal open={open}>
      <h2>Thank You for Ordering</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x {currencyFormatter.format(item.price)}
          </li>
        ))}
      </ul>
      <p className="cart-total">Total: {currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button onClick={onClose}>Close</Button>
      </p>
    </Modal>
  );
}
