// styles
import './CartProductsView.styles.scss'

// components
import CartItem from '../../pages/cart/cart-item/CartItem';

export default function CartProductsView({ items }) {

  return (
    <div className='cart-products-view-container'>
      <h1>CART OVERVIEW</h1>
      <div className='cart-items-container'>
        {items && items.map(item => (
          <div key={item.sizeID} className='cart-item-container'>
            <CartItem key={item.sizeID} cartItem={item} />
            <div className='cart-item-details'>
              <h3>SIZE: {item.sizeID}</h3>
              <h4>QUANTITY: {item.quantity}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
