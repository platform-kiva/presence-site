import { useSelector } from 'react-redux'
import { selectCartItems } from '../../../../store/cart/cart.selector';

// styles
import './CheckoutProductsView.styles.scss'

// components
import CartItem from '../../../cart/cart-item/CartItem';

export default function CheckoutProductsView() {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className='checkout-products-view-container'>
      <h1>CART OVERVIEW</h1>
      <div className='checkout-cart-items-container'>
        {cartItems && cartItems.map(cartItem => (
          <div className='checkout-cart-item-container'>
            <CartItem key={cartItem.sizeID} cartItem={cartItem} />
            <div className='checkout-cart-item-details'>
              <h1>SIZE: {cartItem.sizeID}</h1>
              <h2>QUANTITY: {cartItem.quantity}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
