import { motion as m, useAnimation } from 'framer-motion'
import { useContext, useState } from 'react'

// styles
import './Product.scss'

// assets
import cursorIconFilled from '../../../assets/icons/cursor_filled.png'

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
        addItemToCart(product, activeSize)
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
        <div className='product-container'>
          <div id="productTopFold" className='product-container-top-fold'>
            <m.img
              animate={controlDiv1}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className='product-img-container'
              src={product.img}
              alt='product img'
              style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}}
            />
            <m.div
              animate={controlDiv2}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className='product-shadow'
            />
          </div>
          <div id="productBotFold" className='product-container-bot-fold'>
            <div className='product-container-bot-fold-col'>  
              <div className='product-img-carousel'>
                <img className='product-carousel-img-container' src={product.img} alt='product img enlarged'/>
              </div>
            </div>
            
            <div className='product-container-bot-fold-col'>  
              <div className='product-container-price-action'>
                <h1 className='product-container-price' style={{ textShadow: `3px 3px 1px rgba(${product.botGradient}, 0.67)` }}>${product.price}</h1>
                <div className='product-container-action'>
                  <div className='product-container-action-sizes'>
                    {product.availSizes.map(size => (
                      <div key={size} onClick={() => handleSizeSelection(size)}>
                        <SizeBtn size={size} hoverCol={product.botGradient} selectedSize={activeSize} />
                      </div>
                    ))}
                  </div>
                  <div onClick={() => addProductToCart(product, activeSize)}>
                    <PrimaryBtn label={primaryBtnLabel} hoverCol={product.botGradient} isActive={activeSize !== null}/>
                  </div>
                </div>
              </div>
              <div className='product-container-description'>
                <ul>
                  {product.description.map(description => (
                    <li className='product-container-description-text' key={description}>{description}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}