// App.jsx
import React from "react";
import Header from "./components/Header";
import MealItems from "./components/MealItems";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from './store/UserProgress';
import Cart from "./components/Cart";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <MealItems />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
