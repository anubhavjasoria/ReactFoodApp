import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatter";

export default function CartItem({item}) {
    const cartCtx = useContext(CartContext)


    function handleAddItem() {
        cartCtx.addItem(item)
    }

    function handleRemoveItem() {
        cartCtx.removeItem(item.id)
    }

    return <li className="cart-item">
        <p>
            {item.name} - {item.price} X {currencyFormatter.format(item.quantity)}
        </p>
        <p className="cart-item-actions">
        <button onClick={handleRemoveItem}>-</button>
        <button>
        {item.quantity}
        </button >
        <button onClick={handleAddItem}>+</button>
        </p>
    </li>
}