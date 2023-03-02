

import {cartImageXx59Headphones, cartImageXx99MarkOneHeadphones, cartImageXx99MarkTwoHeadphones, cartImageYx1Earphones, cartImageZx7Speaker, cartImageZx9Speaker} from '../../assets/cart/cart.images'




const CartImage = ({name, id}) => {

    const cartImageHandler = (prodcutId) => {
       
        let cartImage

        switch (prodcutId) {
            case prodcutId === 1 :
                cartImage = cartImageYx1Earphones;
                break;
            case prodcutId === 2 :
                cartImage = cartImageXx59Headphones;
                break;
            case prodcutId === 3 :
                cartImage = cartImageXx99MarkOneHeadphones;
                break;
            case prodcutId === 4 :
                cartImage = cartImageXx99MarkTwoHeadphones;
                break;
            case prodcutId === 5 :
                cartImage = cartImageZx7Speaker;
                break;
                
                case prodcutId === 6:
                cartImage = cartImageZx9Speaker
                break;
        }


        return cartImage
    }



  return (
    <img src={cartImageHandler(id)} alt={name} />
  )
}

export default CartImage