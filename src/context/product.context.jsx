import { createContext } from "react";

const createCategories = () => {
  const categoryArray = [];

  PRODUCT_DATA.forEach((product) => {
    categoryArray.push({
      name: product.category,
      categoryImg: product.categoryImage,
    });

    const filteredArrayt


  });

  return categoryArray;
};

import PRODUCT_DATA from "../data.json";

console.log(PRODUCT_DATA);

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
