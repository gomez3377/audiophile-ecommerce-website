import { xx59HeadphoneDesktop } from "../../assets/product-xx59-headphones/product-xx59-headphones.images";
import { xx99MarkOneHeadphoneDesktop } from "../../assets/product-xx99-mark-one-headphones/product-xx99-mark-one-headphones.images";
import { xx99MarkTwoHeadphoneDesktop } from "../../assets/product-xx99-mark-two-headphones/product-xx99-mark-two-headphones.images";
import { yx1Desktop } from "../../assets/product-yx1-earphones/product-yx1-earphones.images";
import { zx7SpeakerDesktop } from "../../assets/product-zx7-speaker/product-zx7-speaker.images";
import { zx9SpeakerDesktop } from "../../assets/product-zx9-speaker/product-zx9-speaker.images";
import { DesktopImageContainer } from "./desktop-image.styled";


const DesktopImage = ({ name, image }) => {

  const productImageHandler = (image) => {
    let productImage;
    switch (image) {

// Speakers

// zx9 Speakers

case './assets/product-zx9-speaker/desktop/image-gallery-1.jpg':
    productImage = zx9SpeakerDesktop.DesktopGallery1;
    break;
case './assets/product-zx9-speaker/desktop/image-gallery-2.jpg':
    productImage = zx9SpeakerDesktop.DesktopGallery2;
    break;
case './assets/product-zx9-speaker/desktop/image-gallery-3.jpg':
    productImage = zx9SpeakerDesktop.DesktopGallery3;
    break;
case './assets/product-zx9-speaker/desktop/image-product.jpg':
case './assets/shared/desktop/image-zx9-speaker.jpg':
    productImage = zx9SpeakerDesktop.DesktopProductImage;
    break;


// zx7 Speakers

case './assets/product-zx7-speaker/desktop/image-gallery-1.jpg':
    productImage = zx7SpeakerDesktop.DesktopGallery1;
    break;
case './assets/product-zx7-speaker/desktop/image-gallery-2.jpg':
    productImage = zx7SpeakerDesktop.DesktopGallery2;
    break;
case './assets/product-zx7-speaker/desktop/image-gallery-3.jpg':
    productImage = zx7SpeakerDesktop.DesktopGallery3;
    break;
case './assets/product-zx7-speaker/desktop/image-product.jpg':
  case './assets/shared/desktop/image-zx7-speaker.jpg':
    productImage = zx7SpeakerDesktop.DesktopProductImage;
    break;




        // xx99 Mark One Headphones
        case './assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg':
            productImage = xx99MarkOneHeadphoneDesktop.DesktopGallery1;
            break;
        case './assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg':
            productImage = xx99MarkOneHeadphoneDesktop.DesktopGallery2;
            break;
        case './assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg':
            productImage = xx99MarkOneHeadphoneDesktop.DesktopGallery3;
            break;
        case './assets/product-xx99-mark-one-headphones/desktop/image-product.jpg':
        case './assets/shared/desktop/image-xx99-mark-one-headphones.jpg':
            productImage = xx99MarkOneHeadphoneDesktop.DesktopProductImage;
            break;
        
//    xx99 Mark Two Headphones
            case './assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg':
            productImage = xx99MarkTwoHeadphoneDesktop.DesktopGallery1;
            break;
        case './assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg':
            productImage = xx99MarkTwoHeadphoneDesktop.DesktopGallery2;
            break;
        case './assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg':
            productImage = xx99MarkTwoHeadphoneDesktop.DesktopGallery3;
            break;
        case './assets/product-xx99-mark-two-headphones/desktop/image-product.jpg':
          case './assets/shared/desktop/image-xx99-mark-two-headphones.jpg':
            productImage = xx99MarkTwoHeadphoneDesktop.DesktopProductImage;
            break;







        // xx59 Headphones
      case "./assets/product-xx59-headphones/desktop/image-gallery-1.jpg":
        productImage = xx59HeadphoneDesktop.DesktopGallery1;
        break;
      case "./assets/product-xx59-headphones/desktop/image-gallery-2.jpg":
        productImage = xx59HeadphoneDesktop.DesktopGallery2;
        break;
      case "./assets/product-xx59-headphones/desktop/image-gallery-3.jpg":
        productImage = xx59HeadphoneDesktop.DesktopGallery3;
        break;
      case './assets/product-xx59-headphones/desktop/image-product.jpg':
      case './assets/shared/desktop/image-xx59-headphones.jpg':
        productImage = xx59HeadphoneDesktop.DesktopProductImage;
        break;
        
        
        // Earphones
        
        // yx1 Earphones
        case "./assets/product-yx1-earphones/desktop/image-gallery-1.jpg":
          productImage = yx1Desktop.DesktopGallery1;
          break;
        case "./assets/product-yx1-earphones/desktop/image-gallery-2.jpg":
          productImage = yx1Desktop.DesktopGallery2;
          break;
        case "./assets/product-yx1-earphones/desktop/image-gallery-3.jpg":
          productImage = yx1Desktop.DesktopGallery3;
          break;
       default:
          productImage = yx1Desktop.DesktopProductImage;
          break;
        
        
    }
    return productImage;
  };
  return <DesktopImageContainer src={productImageHandler(image)} alt={name} />;
};

export default DesktopImage;
