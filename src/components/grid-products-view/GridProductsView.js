// styles
import './GridProductsView.styles.scss'

// components
import CartItem from '../../pages/cart/cart-item/CartItem';

export default function GridProductsView({ items }) {

  return (
    <div className='grid-products-view-container'>
      <h1>CART OVERVIEW</h1>
      <div className='grid-items-container'>
        {items && items.map(item => (
          <div className='grid-item-container'>
            <CartItem key={item.sizeID} cartItem={item} />
            <div className='grid-item-details'>
              <h1>SIZE: {item.sizeID}</h1>
              <h2>QUANTITY: {item.quantity}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
