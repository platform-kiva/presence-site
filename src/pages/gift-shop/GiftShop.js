import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectGradientA, selectGradientB, selectAddToCartStatus, selectCurrGradient } from '../../store/gradients/gradient.selector.js';

// styles
import {
  CartContainer,
  EmptyCartContent,
  PriceActionCustomContainer,
  PriceAction,
} from './GiftShop.styles.js';

// components
import ElementWrapper from '../../components/element-wrapper/ElementWrapper.js';
import ShirtDisplay from '../../components/shirt-display/ShirtDisplay.js';
import GradientControls from '../../components/gradient-controls/GradientControls.js';
import ProductBox from '../../components/product-box/ProductBox.js';
import SizeSelection from '../../components/size-selection/SizeSelection.js';

export default function GiftShop() {
  const gradientA = useSelector(selectGradientA);
  const gradientB = useSelector(selectGradientB);
  const currGradient = useSelector(selectCurrGradient);
  const addToCartStatus = useSelector(selectAddToCartStatus);
  const [customProduct, setCustomProduct] = useState(null)


  useEffect(() => {
    if (!gradientA || !gradientB) {
      return;
    }
    setCustomProduct(
      {
        availSizes: ['S', 'M', 'L'],
        id: currGradient[0] + ' - ' + currGradient[1],
        gradient: [currGradient[0], currGradient[1]],
        price: 35,
        quantity: 1,
      }
    )
  }, [gradientA, gradientB, currGradient])

  return (
    <CartContainer>
      <EmptyCartContent>
        <ProductBox>
          {addToCartStatus ?
            <ShirtDisplay bobs={true} />
            :
            <ElementWrapper>
              <PriceActionCustomContainer>
                <>
                  <PriceAction>
                    <SizeSelection product={customProduct} />
                  </PriceAction>
                </>
                <div>
                <ElementWrapper delay={0.4}>
                  <h3 style={{ padding: "10px 0px", textAlign: "center", fontWeight: "100" }}>This color combination has been purchased 0 times.</h3>
                </ElementWrapper>
                </div>
              </PriceActionCustomContainer>
              
            </ElementWrapper>
          }
        </ProductBox>
      </EmptyCartContent>
      <GradientControls additionalCtrls={true} />

    </CartContainer>
  )
}