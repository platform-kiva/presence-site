// styles
import {
  GridProductsViewContainer,
  GridItemsContainer,
  ProductHolder
} from './GridProductsView.styles.js'

// components
import ProductDisplay from '../product-display/ProductDisplay'

export default function GridProductsView({ items, indSetter, gridViewSetter }) {

  return (
    <GridProductsViewContainer>
      <GridItemsContainer>
        {items && items.map(item => (
          <ProductHolder
            key={item.id}
          >
            <ProductDisplay
              key={item.id}
              product={item}
              indSetter={indSetter}
              gridViewSetter={gridViewSetter}
            />
          </ProductHolder>
        ))}
      </GridItemsContainer>
    </GridProductsViewContainer>
  )
}
