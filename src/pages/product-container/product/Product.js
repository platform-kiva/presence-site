import { motion as m, useAnimation } from 'framer-motion'
import { useContext, useState } from 'react'

// styles
import {
  ProductContainer,
  ProductContainerTopFold,
  ProductImgContainer,
  ProductShadow,
  ProductContainerBotFold,
  BotFoldCol,
  ProductImgCarousel,
  ProductCarouselImgContainer,
  PriceAction,
  Price,
  ActionContainer,
  SizesContainer,
  DescriptionContainer
} from './Product.styles.js'


// components
import PrimaryBtn from '../../../components/btns/primary-btn/PrimaryBtn'
import SizeBtn from '../../../components/btns/size-btn/SizeBtn.js'

// context
import { CartContext } from '../../../contexts/cart-context/CartContext'

export default function Product({ product, productInd }) {
  const { addItemToCart } = useContext(CartContext)
  const addProductToCart = () => {
    try {
      if (timerRunning) {
        return;
      }
      if (activeSize !== null) {
        console.log("productInd before item added: " + productInd)
        addItemToCart(product, activeSize)
        console.log("productInd after item added: " + productInd)
        setPrimaryBtnLabel('ADDED TO CART!')
        setTimerRunning(true);
        setTimeout(() => {
          setPrimaryBtnLabel('ADD TO CART');
          setTimerRunning(false);
        }, 2000);

      }
    } catch (error) {
      console.log("Item was not added to cart.")
    }
  }

  const [activeSize, setActiveSize] = useState(null)
  const [primaryBtnLabel, setPrimaryBtnLabel] = useState('ADD TO CART')
  const [timerRunning, setTimerRunning] = useState(false);

  const controlDiv1 = useAnimation()
  const controlDiv2 = useAnimation()

  const handleSizeSelection = (size) => {
    setActiveSize(size)
  }

  const handleMouseEnter = () => {
    controlDiv1.start({ translateY: -10, scale: 1.05, transition: {duration: 0.8 } })
    controlDiv2.start({ scale: 1.05, transition: {duration: 0.8 } })
  }

  const handleMouseLeave = () => {
    controlDiv1.start({ translateY: 0, scale: 1.0, transition: {duration: 0.8 } })
    controlDiv2.start({ scale: 1.0, transition: {duration: 0.8 } })
  }

  return (
    <>
      {product.id === productInd &&
        <ProductContainer>
          <ProductContainerTopFold id="productTopFold">
            <ProductImgContainer
              animate={controlDiv1}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              src={product.imgURL}
              alt='product img'
            />
            <ProductShadow
              animate={controlDiv2}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </ProductContainerTopFold>
          <ProductContainerBotFold id="productBotFold">
            <BotFoldCol>  
              <ProductImgCarousel>
                <ProductCarouselImgContainer src={product.imgURL} alt='product img enlarged'/>
              </ProductImgCarousel>
            </BotFoldCol>
            
            <BotFoldCol>  
              <PriceAction>
                <Price accentCol={product.botGradient}>${product.price}</Price>
                <ActionContainer>
                  <SizesContainer>
                    {product.availSizes.map(size => (
                      <div key={size} onClick={() => handleSizeSelection(size)}>
                        <SizeBtn size={size} accentCol={product.botGradient} selectedSize={activeSize} />
                      </div>
                    ))}
                  </SizesContainer>
                  <div onClick={() => addProductToCart(product, activeSize)}>
                    <PrimaryBtn label={primaryBtnLabel} accentCol={product.botGradient} isActive={activeSize !== null}/>
                  </div>
                </ActionContainer>
              </PriceAction>
              <DescriptionContainer>
                <ul>
                  {product.description.map(description => (
                    <li key={description}>{description}</li>
                  ))}
                </ul>
              </DescriptionContainer>
            </BotFoldCol>
          </ProductContainerBotFold>
        </ProductContainer>
      }
    </>
  )
}