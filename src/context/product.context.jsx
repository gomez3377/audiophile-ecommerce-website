import { createContext } from "react";


import PRODUCT_DATA from "../data.json";

const getfilteredProducts = (categoryName) => {
  const filteredArray = []
  PRODUCT_DATA.forEach(a => {
    if(a.category === categoryName)
    {
      filteredArray.push(a)
    }
  })

  
  return filteredArray
}

const getProductDetails = (productName) => {
 return PRODUCT_DATA.find(product => product.slug === productName)
  
}

const createCategories = () => {
  const categoryArray = [...new Map(PRODUCT_DATA.map((product) => [product.category, product])).values()];

  return categoryArray;
};

export const ProductContext = createContext({
  categories: [],
  getfilteredProducts: () => {},
  getProductDetails: () => {}
});

export const ProductProvider = ({ children }) => {
  const categories = createCategories();
  

  
  const value = {
    categories,
    getfilteredProducts,
    getProductDetails

  };


  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
