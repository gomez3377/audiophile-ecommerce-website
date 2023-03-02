import {useContext} from 'react'
import { CartContext } from '../../context/cart.context'
import Button from '../button/button.component'
import CartImage from '../cart-image/cart-image.component'

const CheckoutSummary = () => {
    const {cartItems} = useContext(CartContext)

    const {name, id, price, quantity} = cartItems
  return (
    <div className='cart-container'>
        <h6>Summary</h6>
        <div className="cart-item-container">
        <CartImage name={name} id={id} />
        <div className='cart-item-details'>
            <p>{name}</p>
            <p className='overline'>${price}</p>
        </div>
        <p className='quantity'>x{quantity}</p>

        </div>

        <div className="total-price">
            <p>Total</p>
            <h6>$1,299</h6>
            
        </div>
        <div className="shipping">
            <p>Shipping</p>
            <h6>$50</h6>

        </div>
        <div className="vat">
            <p>Vat(Included)</p>
            <h6>$1,000</h6>

        </div>
        <div className='grand-total'>
            <p>Grand Total</p>
            <h6>$2,349</h6>
        </div>
        <Button>Continue & Pay</Button>
    </div>
  )
}

export default CheckoutSummary