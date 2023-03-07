import { useState, createContext, useEffect } from "react";

const addCartItems = (cartItems, productAdded, count) => {
  console.log(count);
  const existingCartItem = cartItems.find(
    (item) => item.id === productAdded.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === existingCartItem.id
        ? { ...item, quantity: item.quantity + count }
        : item
    );
  }

  return [...cartItems, { ...productAdded, quantity: 0 + count }];
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  removeCartItems: () => {},
  deleteCartItem: () => {},
  totalValue: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const newTotalValue = cartItems.reduce(
      (total, cartItems) => total + cartItems.price * cartItems.quantity,
      0
    );

    setTotalValue(newTotalValue);
  }, [cartItems]);

  const addItemToCart = (product, count) => {
    setCartItems(addCartItems(cartItems, product, count));
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
    totalValue,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
