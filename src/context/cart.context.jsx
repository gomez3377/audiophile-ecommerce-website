import { useState, createContext } from "react";

const addCartItems = (cartItems, productAdded) => {
const existingCartItem = cartItems.find((item) => item.id === productAdded.id)





    return [...cartItems, {...productAdded, quantity: 1}]
}

const cartImageRender = () => {}

export const CartContext = createContext({
    cartItems: [],
    addCartItems: () => {},
    removeCartItems: () => {},
    deleteCartItem: () => {}

}

)


export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
 
 
    const addItemToCart = (product) => {
        setCartItems(addCartItems(cartItems, product))
    }
 
 
    const subtractAmountFromCart = (product) => {
        setCartItems(removeCartItems(cartItems, product))
    }
 
 
    const deleteItemFromCart = (product) => {
        setCartItems(deleteCartItem(cartItems, product))
    }
 
 
 
 
 
    const value = {
     cartItems,
     addItemToCart,
     subtractAmountFromCart,
     deleteItemFromCart
 }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}