// styles
import './CartProductsView.styles.scss'

// components
import CartItem from '../../pages/cart/cart-item/CartItem';
import CustomShirtDisplay from '../custom-shirt-display/CustomShirtDisplay'

export default function CartProductsView({ items }) {

  return (
    <div className='cart-products-view-container'>
      <h1>OVERVIEW</h1>
      <div className='cart-items-container'>
        {items.map((item) => {
            if (item.imgURL === null) {
              return (
                <div className='product-holder' key={`${item.topGradient}, ${item.botGradient}`}>
                  <CustomShirtDisplay product={item} />
                  <div className='cart-item-details'>
                    <h2>SIZE: {item.quantity}</h2>
                    <h2>QUANTITY: {item.quantity}</h2>
                  </div>
                </div>
              );
            } else {
              return (
                <div className='product-holder' key={item.sizeID}>
                  <CartItem cartItem={item}/>
                  <div className='cart-item-details'>
                    <h2>SIZE: {item.quantity}</h2>
                    <h2>QUANTITY: {item.quantity}</h2>
                  </div>
                </div>
              );
            }
          }
        )}
      </div>
    </div>
  )
}
