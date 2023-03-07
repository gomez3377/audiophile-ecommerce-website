import {useContext} from 'react'
import { CartContext } from '../../context/cart.context'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CheckoutSummaryContainer } from './checkout-summary.styles'

const CheckoutSummary = () => {
    const {cartItems, totalValue} = useContext(CartContext)

  return (
    <CheckoutSummaryContainer>
        <h6>Summary</h6>
        {cartItems.map(item => <CartItem key={nanoid()} item={item}/>)}

        <div className="total-price">
            <p>Total</p>
            <h6>${totalValue}</h6>
            
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
    </CheckoutSummaryContainer>
  )
}

export default CheckoutSummary