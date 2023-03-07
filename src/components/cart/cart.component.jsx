import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import Button from '../button/button.component'

import CartItem from '../cart-item/cart-item.component'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
const Cart = () => {

    const {cartItems, totalValue} = useContext(CartContext)
   const navigate = useNavigate()



   const goToCheckoutPageHandler = () => {
     navigate('./checkout')
   }





  return (
    <div className='cart-container'>
    <h6>Cart</h6>
    {cartItems.map(item => <CartItem key={nanoid()} item={item}/>)}

    <div className="total-price">
        <p>Total</p>
        <h6>${totalValue}</h6>
        
    </div>
   
    <Button onClick={goToCheckoutPageHandler}>Checkout</Button>
</div>
  )
}

export default Cart