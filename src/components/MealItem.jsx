// MealItem.jsx
import React, { useContext } from "react";
import Button from "../UI/Button";
import { currencyFormatter } from "../util/formatter";
import CartContext from "../store/CartContext";

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  function handleMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt="This is the image of the meal." />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-description">{meal.description}</p>
          <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleMealToCart}>Add To Cart</Button>
        </p>
      </article>
    </li>
  );
}
