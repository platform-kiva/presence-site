import { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'

// styles
import './Home.scss'

// context
import { ProductsContext } from '../../contexts/products-context/ProductsContext'
import Cart from '../cart/Cart'

export default function Home() {
  const { products } = useContext(ProductsContext)
  const [productInd, setProductInd] = useState(0)

  return (
    <div className='home-container'>
      <div className='cart-component-container'>
        <Cart />
      </div>

      <div className='outlet-container'>
        <Outlet context={[productInd, setProductInd]} />
      </div>
      <div
        className='article-gradient-bg'
        style=
          {{
            background: `linear-gradient(45deg, rgba(${products[productInd].botGradient[0]}, ${products[productInd].botGradient[1]}, ${products[productInd].botGradient[2]}, 0.8) 0%, rgba(${products[productInd].topGradient[0]}, ${products[productInd].topGradient[1]}, ${products[productInd].topGradient[2]}, 0.8) 88%)`
          }}
      />
    </div>
  )
}