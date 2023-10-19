import { useContext } from 'react'

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

  const addProductToCart = () => addItemToCart(product)

  return (
    <>
      {product.id === productInd &&
      
        <div className='product-container'>
          <div id="productTopFold" className='product-container-top-fold'>
            <img className='product-img-container' src={product.img} alt='product img' style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}} />
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
                      <SizeBtn size={size} hoverCol={product.botGradient}/>
                    ))}
                  </div>
                      <PrimaryBtn label={"ADD TO CART"} hoverCol={product.botGradient}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}