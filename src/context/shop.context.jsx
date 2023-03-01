import { createContext } from "react";



export const ShopContext = createContext(

) 


export const ShopProvider = ({children}) => {
const value = ""

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}