import {useContext, useState}from 'react'
import { DetailedProductCardContainer, QuantityContainer, CountContainer, ProductDetails } from './detailed-product-card.styles'
import DesktopImage from '../desktop-image/desktop-image.component'
import Button from '../button/button.component'
import { CartContext } from '../../context/cart.context'


const DetailedProductCard = ({currentProduct}) => {
    const {addItemToCart} = useContext(CartContext)


    const [count, setCount] = useState(1)
    const addItemQuantity = () => setCount(count + 1)
    const subtractItemQuantity = () => setCount(count > 1 ? count - 1 : count)
    const {image, name, newProduct, description, price} = currentProduct
    return (
    <DetailedProductCardContainer>
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
          <Button onClick = {() => addItemToCart(currentProduct, count)}>Add to Cart</Button>
          </QuantityContainer>
        </ProductDetails>
      </DetailedProductCardContainer>
  )
}

export default DetailedProductCard