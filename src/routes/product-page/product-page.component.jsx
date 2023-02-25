import { nanoid } from "nanoid";
import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/button/button.component";
import { ProductContext } from "../../context/product.context";


const ProductPage = ({}) => {
  const { product } = useParams();
  const { getProductDetails } = useContext(ProductContext);
  const currentProduct = getProductDetails(product);
  const { name, description, price, features, includes } = currentProduct;

  console.log(currentProduct);

  return (
      <>
    <div className="product-container">
      <div className="product-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <h6>${price}</h6>
        <div className="count">
          <div>-</div>
          <h6>1</h6>
          <div>+</div>
        </div>
        <Button>Add to Cart</Button>
      </div>
    </div>
    <div className="more-info">

    <div className="product-features">
        <h3>Features</h3>
        <p>{features}</p>
    </div>
    <div className="in-the-box">
        <h3>In the Box</h3>
        <ul>
            {includes.map((object) => {
            const {item, quantity} = object
           return <li key={nanoid()}><span>{quantity}x</span>{item}</li>
            })}
        </ul>
    </div>
    </div>

      </>
  );
};

export default ProductPage;
