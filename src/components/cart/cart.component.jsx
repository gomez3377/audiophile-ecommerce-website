import React from 'react'
import Button from '../button/button.component'

const CartComponent = () => {
  return (
    <div className='cart-container'>
        <h6>Summary</h6>
        <div className="cart-item-container">
        <img src='' alt="cart-pic" />
        <div className='cart-item-details'>
            <p>XX99</p>
            <p className='overline'>$1,299</p>
        </div>
        <p className='quantity'>x2</p>

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

export default CartComponent