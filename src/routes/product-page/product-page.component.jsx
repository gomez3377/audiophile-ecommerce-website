import { nanoid } from "nanoid";

import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/button/button.component";
import CategoryNav from "../../components/category-nav/category-nav.component";
import DesktopImage from "../../components/desktop-image/desktop-image.component";
import OtherProductsNavBar from "../../components/other-products-nav-bar/other-products-nav-bar.components";
import { ProductContext } from "../../context/product.context";
import { CountContainer, ImageGalleryContainer, InTheBoxContainer, MoreInfoContainer, ProdcutContainer, ProdcutFeaturesContainer, ProductDetails, ProductGalleryImage, QuantityContainer } from "./product-page.styles";

const ProductPage = ({}) => {
  const { product } = useParams();
  const [count, setCount] = useState(1)




  const { getProductDetails } = useContext(ProductContext);
  const currentProduct = getProductDetails(product);
  const { name, description, price, features, includes, gallery, image, others, new:newProduct } =
    currentProduct;

 const addItemQuantity = () => setCount(count + 1)
 const subtractItemQuantity = () => setCount(count > 1 ? count - 1 : count)

 
  

  return (
    <>
    <p>Go Back</p>
      <ProdcutContainer>
        <DesktopImage image={image.desktop} name={name} />
        <ProductDetails>
          {newProduct && (<div className="overline">New Product</div>)}
          <h2>{name}</h2>
          <p>{description}</p>
          <h6>${price}</h6>

          <QuantityContainer>
            <CountContainer>

            <div className="subtitle" onClick={subtractItemQuantity}>-</div>
            <h6>{count}</h6>
            <div  className="subtitle"onClick={addItemQuantity}>+</div>
            </CountContainer>
          <Button>Add to Cart</Button>
          </QuantityContainer>
        </ProductDetails>
      </ProdcutContainer>
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
    </>
  );
};

export default ProductPage;
