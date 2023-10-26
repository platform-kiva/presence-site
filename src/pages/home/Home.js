import { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'

// styles
import { HomeContainer, OutletContainer, GradientBG } from './Home.styles.js'

// context
import { ProductsContext } from '../../contexts/products-context/ProductsContext'

export default function Home() {
  const { products } = useContext(ProductsContext)
  const [productInd, setProductInd] = useState(0)

  return (
    <>
      {products.length !== 0 && 
      <>
        <HomeContainer>
          <OutletContainer>
            <Outlet context={[productInd, setProductInd]} />
          </OutletContainer>
          <GradientBG 
            style=
              {{background: `linear-gradient(45deg,
                rgba(
                  ${products[productInd].botGradient[0]},
                  ${products[productInd].botGradient[1]},
                  ${products[productInd].botGradient[2]}, 0.8) 0%,
                rgba(
                  ${products[productInd].topGradient[0]},
                  ${products[productInd].topGradient[1]},
                  ${products[productInd].topGradient[2]}, 0.8) 88%)`
              }}
          />
        </HomeContainer>
      </>
    }
    </>
  )
}