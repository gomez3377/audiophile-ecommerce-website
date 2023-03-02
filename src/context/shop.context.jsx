import { createContext, useState } from "react";



export const ShopContext = createContext({
    cartSelected: false,
    setCartSelected: () => {}
}
) 


export const ShopProvider = ({children}) => {

const [cartSelected, setCartSelected] = useState(false)
const value = {cartSelected, setCartSelected}

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}