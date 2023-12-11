import { useState } from 'react';

// styles
import {
  GridProductsViewContainer,
  GridItemsContainer,
  ProductHolder,
  BackgroundHighlight
} from './GridProductsView.styles.js'

// components
import ProductDisplay from '../product-display/ProductDisplay'

export default function GridProductsView({ items, indSetter, gridViewSetter }) {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleMouseOver = (itemId) => {
    setHoveredItemId(itemId);
  };

  const handleMouseOut = () => {
    setHoveredItemId(null);
  };

  return (
    <GridProductsViewContainer>
      <GridItemsContainer>
        {items && items.map(item => (
          <ProductHolder
            key={item.id}
            onMouseOver={() => handleMouseOver(item.id)} 
            onMouseOut={handleMouseOut}
          >
            <ProductDisplay
              key={item.id}
              product={item}
              indSetter={indSetter}
              gridViewSetter={gridViewSetter}
            />
            {/* <BackgroundHighlight
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredItemId === item.id ? 1 : 0 }}
              transition={{ duration: 1.0 }}
            /> */}
          </ProductHolder>
        ))}
      </GridItemsContainer>
    </GridProductsViewContainer>
  )
}
