import { useContext, useState } from "react";

import { ProductContext } from "../../context/product.context";
import { useNavigate, useParams } from "react-router-dom";
import { nanoid } from "nanoid";

import CategoryNav from "../../components/category-nav/category-nav.component";

import OtherProductsNavBar from "../../components/other-products-nav-bar/other-products-nav-bar.components";


import { ImageGalleryContainer, InTheBoxContainer, MoreInfoContainer,  NavigateBackLink,  ProdcutFeaturesContainer,  ProductGalleryImage, ProductPageContainer,  } from "./product-page.styles";

import DetailedProductCard from "../../components/detailed-product-card/detailed-product-card.component";

const ProductPage = () => {
  const { product } = useParams();
  const { getProductDetails } = useContext(ProductContext);

  
  const navigateBack = useNavigate()
  const navigateBackHandler = () => navigateBack(-1)
  
  const currentProduct = getProductDetails(product)

 
  const { name, description, price, features, includes, gallery, image, others, new:newProduct } =
  currentProduct;
  
  


  




 
 
  
// image name newProduct description price
  return (
    <ProductPageContainer>
    <NavigateBackLink onClick={navigateBackHandler} >Go Back</NavigateBackLink>
    <DetailedProductCard currentProduct={currentProduct}/>
      <MoreInfoContainer>
        <ProdcutFeaturesContainer>
          <h3>Features</h3>
          <p>{features}</p>
        </ProdcutFeaturesContainer>
        <InTheBoxContainer>
          <h3>In the Box</h3>
          <ul>
            {includes.map((object) => {
              const { item, quantity } = object;
              return (
                <li key={nanoid()}>
                  <span>{quantity}x</span>
                  {item}
                </li>
              );
            })}
          </ul>
        </InTheBoxContainer>
      </MoreInfoContainer>
      <ImageGalleryContainer>
        {Object.entries(gallery).map(([key, val], i) => {
          const { desktop } = val;
          return <ProductGalleryImage key={i} image={desktop} name={`${key} image`} />;
        })}
      </ImageGalleryContainer>

        <h4>You May Also Like</h4>
        <OtherProductsNavBar otherProducts={others} />
        <CategoryNav/>
    </ProductPageContainer>
  );
};

export default ProductPage;
