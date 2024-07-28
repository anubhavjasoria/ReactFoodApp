// App.jsx
import React from "react";
import Header from "./components/Header";
import MealItems from "./components/MealItems";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from './store/UserProgress';
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <MealItems />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
