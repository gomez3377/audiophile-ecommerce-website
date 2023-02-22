import { createContext } from "react";


import PRODUCT_DATA from "../data.json";


const createCategories = () => {
  const categoryArray = [...new Map(PRODUCT_DATA.map((product) => [product.category, product])).values()];

  return categoryArray;
};

export const ProductContext = createContext({
  categories: [],
});

export const ProductProvider = ({ children }) => {
  const categories = createCategories();
  console.log(categories);

  const value = {
    categories,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
