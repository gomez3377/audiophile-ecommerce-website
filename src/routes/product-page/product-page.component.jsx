import { nanoid } from "nanoid";
import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/button/button.component";
import DesktopImage from "../../components/desktop-image/desktop-image.component";
import { ProductContext } from "../../context/product.context";



const ProductPage = ({}) => {
  const { product } = useParams();
  const { getProductDetails } = useContext(ProductContext);
  const currentProduct = getProductDetails(product);
  const { name, description, price, features, includes, gallery, image } = currentProduct;




  console.log(currentProduct);
  console.log(image.desktop)


  return (
      <>
    <div className="product-container">
      <DesktopImage image={image.desktop} name={name} />
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
            <div className="image-gallery">
           {

            Object.entries(gallery).map(([key, val], i) => {
        const {desktop} = val
             return <DesktopImage key={i} image={desktop} name ={`${key} image`} />
            }
            )
          }
           
         
            </div>
      </>
  );
};

export default ProductPage;
