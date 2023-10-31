import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../store/products/products.selector.js'

// styles
import { HomeContainer, OutletContainer, GradientBG } from './Home.styles.js'

export default function Home() {
  const products = useSelector(selectProducts);
  const [productInd, setProductInd] = useState(0)

  return (
    <>
      {products.length !== 0 && 
      <>
        <HomeContainer>
          <OutletContainer>
            <Outlet context={[productInd, setProductInd]} />
          </OutletContainer>
          <GradientBG $products={products} $productInd={productInd} />
        </HomeContainer>
      </>
    }
    </>
  )
}