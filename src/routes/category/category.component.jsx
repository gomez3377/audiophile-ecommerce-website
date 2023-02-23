import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CategoryNav from "../../components/category-nav/category-nav.component";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductContext } from "../../context/product.context";
import { CategoryContent, CategoryHeader } from "./category.styles";

const rearrangeArray = (array) => {
  const newProduct = array.find((a) => a.new);
  const filteredArray = array.filter((a) => a !== newProduct);
  filteredArray.unshift(newProduct);

  return filteredArray;
};

const Category = () => {
  const { category } = useParams();
  const { categories, getfilteredProducts } = useContext(ProductContext);
  const productArray = rearrangeArray(getfilteredProducts(category));

  return (
    <div className="category-container">
      <CategoryHeader>
        <h2>{category}</h2>
        </CategoryHeader>
      <CategoryContent>
        {productArray.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <CategoryNav />
      </CategoryContent>
    </div>
  );
};

export default Category;
