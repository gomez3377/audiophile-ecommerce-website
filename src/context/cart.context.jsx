import { useState, createContext } from "react";

const addCartItems = (cartItems, productAdded) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productAdded.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === existingCartItem.id
        ? { ...item, quanitty: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productAdded, quantity: 1 }];
};


export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => {},
  removeCartItems: () => {},
  deleteCartItem: () => {},
 
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    setCartItems(addCartItems(cartItems, product));
  };

  const subtractAmountFromCart = (product) => {
    setCartItems(removeCartItems(cartItems, product));
  };

  const deleteItemFromCart = (product) => {
    setCartItems(deleteCartItem(cartItems, product));
  };
  
  
  const value = {
    cartItems,
    addItemToCart,
    subtractAmountFromCart,
    deleteItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
