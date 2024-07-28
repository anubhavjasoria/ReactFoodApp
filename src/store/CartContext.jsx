import { createContext, useReducer } from "react";

// Create the context with default values
const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

// Cart reducer function to manage state changes
function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = [...state.items];
        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);

        if (existingItemIndex !== -1) {
            const existingItem = state.items[existingItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingItemIndex] = updatedItem;
        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        return { ...state, items: updatedItems };
    }

    if (action.type === 'REMOVE_ITEM') {
        const updatedItems = [...state.items];
        const existingItemIndex = state.items.findIndex((item) => item.id === action.id);

        if (existingItemIndex !== -1) {
            const itemToRemove = state.items[existingItemIndex];
            if (itemToRemove.quantity === 1) {
                updatedItems.splice(existingItemIndex, 1);
            } else {
                const updatedItem = {
                    ...itemToRemove,
                    quantity: itemToRemove.quantity - 1
                };
                updatedItems[existingItemIndex] = updatedItem;
            }
        }

        return { ...state, items: updatedItems };
    }

    return state;
}

// CartContextProvider component to provide context values
export function CartContextProvider({ children }) {
    const [cart, dispatchCartFunction] = useReducer(cartReducer, { items: [] });

    const cartContext = {
        items: cart.items,
        addItem: (item) => {
            dispatchCartFunction({
                type: 'ADD_ITEM',
                item: item
            });
        },
        removeItem: (id) => {
            dispatchCartFunction({
                type: 'REMOVE_ITEM',
                id: id
            });
        }
    };



    console.log(cartContext);
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
