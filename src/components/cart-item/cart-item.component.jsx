import CartImage from '../cart-image/cart-image.component'

const CartItem = ({item}) => {
    const {name, id , price, quantity} = item
  return (
    <div className="cart-item-container">
    <CartImage name={name} id={id} />
    <div className='cart-item-details'>
        <p>{name}</p>
        <p className='overline'>${price}</p>
    </div>
    <p className='quantity'>x{quantity}</p>

    </div>
  )
}

export default CartItem