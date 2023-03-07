import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import ProductCardDesktopImage from "../product-card-desktop-image/product-card-desktop-image.component";
import { ProductCardContainer, ProductInfo, ProductImageContainer } from "./product-card.styles";

const ProductCard = ({ product}) => {
  const { name, description, new: newProduct, image, slug } = product;
  const navigate = useNavigate()
  
  
  const navigationHandler = () =>  navigate(slug)
  

  return (
    <ProductCardContainer>
        <ProductImageContainer>
      <ProductCardDesktopImage image={image.desktop} name={name} />

        </ProductImageContainer>
      <ProductInfo>
        {newProduct && <div className="overline">New Product</div>}
        <h2>{name}</h2>
        <p>{description}</p>
        
        <Button onClick={navigationHandler}>See Product</Button>
        
      </ProductInfo>
    </ProductCardContainer>
  );
};

export default ProductCard;
