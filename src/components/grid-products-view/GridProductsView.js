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
              <h3>SIZE: {item.sizeID}</h3>
              <h4>QUANTITY: {item.quantity}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
