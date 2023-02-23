import {xx59HeadphoneDesktop} from '../../assets/product-xx59-headphones/product-xx59-headphones.images'
import {xx99MarkOneHeadphoneDesktop} from '../../assets/product-xx99-mark-one-headphones/product-xx99-mark-one-headphones.images'
import {xx99MarkTwoHeadphoneDesktop} from '../../assets/product-xx99-mark-two-headphones/product-xx99-mark-two-headphones.images'
import {yx1Desktop} from '../../assets/product-yx1-earphones/product-yx1-earphones.images'
import {zx7SpeakerDesktop} from '../../assets/product-zx7-speaker/product-zx7-speaker.images'
import {zx9SpeakerDesktop} from '../../assets/product-zx9-speaker/product-zx9-speaker.images'
import { ProductImage } from './product-card-desktop-image.styles'

const ProductCardDesktopImage = ({image, name}) => {
  const productImageHandler = (image) => {
    let productImage
    switch(image){
        case './assets/product-xx59-headphones/desktop/image-product.jpg':
        productImage = xx59HeadphoneDesktop.DesktopProductImage;
        break;
        case './assets/product-xx99-mark-one-headphones/desktop/image-product.jpg':
        productImage = xx99MarkOneHeadphoneDesktop.DesktopProductImage;
        break;
        case './assets/product-xx99-mark-two-headphones/desktop/image-product.jpg':
        productImage = xx99MarkTwoHeadphoneDesktop.DesktopProductImage;
        break;
        case './assets/product-yx1-earphones/desktop/image-product.jpg':
        productImage = yx1Desktop.DesktopProductImage;
        break;
        case './assets/product-zx7-speaker/desktop/image-product.jpg':
        productImage = zx7SpeakerDesktop.DesktopProductImage;
        break;
        default:
        productImage = zx9SpeakerDesktop.DesktopProductImage;
        break;
        
    }
    return productImage
}
  return (
   <ProductImage src={productImageHandler(image)} alt={name}/>
  )
}

export default ProductCardDesktopImage