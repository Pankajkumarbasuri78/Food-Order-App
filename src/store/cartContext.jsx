import React from "react";

//provides better auto completion
export const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
});
