import { useContext } from 'react'

// styles
import './Product.scss'

// assets
import cursorIconFilled from '../../../assets/icons/cursor_filled.png'
import matiProductImg from '../../../assets/clothing/mati_ALPHA.png'

// components
import SizeBtn from '../../../components/btns/size-btn/SizeBtn.js'

// context
import { ProductsContext } from '../../../contexts/products-context/ProductsContext'

export default function Product() {
  const { products } = useContext(ProductsContext)

  return (
    <div className='product-container' >
      <div id="productTopFold" className='product-container-top-fold'>
        <img className='product-img-container' src={matiProductImg} alt='product img' style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}} />
      </div>
      <div id="productBotFold" className='product-container-bot-fold'>
        <div className='product-container-bot-fold-col'>
          <div className='product-img-carousel'>
            <img className='product-carousel-img-container' src={matiProductImg} alt='product img enlarged'/>
          </div>
        </div>

        <div className='product-container-bot-fold-col'>
          <div className='product-container-price-action'>
            <h1 className='product-container-price'>$USD</h1>
            <div className='product-container-action'>
              <div className='product-container-action-sizes'>
                <SizeBtn size={"S"} />
                <SizeBtn size={"M"} />
                <SizeBtn size={"L"} />
              </div>
              <div className='product-add-to-cart-btn'>
                <h2>ADD TO CART</h2>
              </div>
              <div>
                {products.map(product => (
                  <h1>{product.name}</h1>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}