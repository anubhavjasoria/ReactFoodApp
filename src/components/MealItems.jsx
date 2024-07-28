// MealItems.jsx
import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import { fetchMealItems } from '../http';

export default function MealItems() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const meals = await fetchMealItems();
      setLoadedMeals(meals);
    }

    getMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => <MealItem meal={meal} key={meal.id} />)}
    </ul>
  );
}
