import { useContext } from 'react'
import  {ReactComponent as CartIcon} from '../../assets/shared/desktop/icon-cart.svg'
import { ShopContext } from '../../context/shop.context'

const CartIconContainer = () => {
    const {cartSelected, setCartSelected} = useContext(ShopContext)

    const toggleCart = () => setCartSelected(!cartSelected)
    

  return (
    <div className='cart-icon-container' onClick={toggleCart}>
        <CartIcon />
    </div>
  )
}

export default CartIconContainer