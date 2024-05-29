import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectGradientA, selectGradientB, selectAddToCartStatus, selectCurrGradient } from '../../store/gradients/gradient.selector.js';
import { getGradientPurchaseData } from '../../utils/firebase/firebase.utils.js';

// styles
import {
  CartContainer,
  EmptyCartContent,
  PriceActionCustomContainer,
  PriceAction,
  ControlsContainer
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
  const [customProduct, setCustomProduct] = useState(null);
  const [purchasedDate, setPurchasedDate] = useState(null);

  useEffect(() => {
    if (addToCartStatus) {
      return;
    } else {
      async function fetchPurchaseCount() {
        const purchaseDate = await getGradientPurchaseData(currGradient);
        setPurchasedDate(purchaseDate);
      }
      fetchPurchaseCount();
    }
  }, [addToCartStatus, currGradient]);
  
  useEffect(() => {
    if (!gradientA || !gradientB) {
      return;
    }
    setCustomProduct(
      {
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
                    <SizeSelection product={customProduct} purchasedDate={purchasedDate}/>
                  </PriceAction>
                </>

              </PriceActionCustomContainer>
            </ElementWrapper>
          }
        </ProductBox>
      </EmptyCartContent>

      <ControlsContainer>
        <GradientControls additionalCtrls={true} />
      </ControlsContainer>
      
    </CartContainer>
  )
}