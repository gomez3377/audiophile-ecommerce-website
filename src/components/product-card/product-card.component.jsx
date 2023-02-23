import React from "react";
import Button from "../button/button.component";
import ProductCardDesktopImage from "../product-card-desktop-image/product-card-desktop-image.component";
import { ProductCardContainer, ProductInfo, ProductImageContainer } from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, description, new: newProduct, image } = product;

  return (
    <ProductCardContainer>
        <ProductImageContainer>
      <ProductCardDesktopImage image={image.desktop} name={name} />

        </ProductImageContainer>
      <ProductInfo>
        {newProduct && <div>New Product</div>}
        <h2>{name}</h2>
        <p>{description}</p>
        <Button>See Product</Button>
      </ProductInfo>
    </ProductCardContainer>
  );
};

export default ProductCard;
