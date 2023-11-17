// styles
import './GridProductsView.styles.scss'

// components
import ProductDisplay from '../product-display/ProductDisplay'

export default function GridProductsView({ items, indSetter, gridViewSetter }) {

  return (
    <div className='grid-products-view-container'>
      <div className='grid-items-container'>
        {items && items.map(item => (
          <ProductDisplay key={item.id} product={item} indSetter={indSetter} gridViewSetter={gridViewSetter} />
        ))}
      </div>
    </div>
  )
}
