import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getProductsAndDocuments } from '../../utils/firebase/FirebaseUtils.js'
import { setProductsArray } from '../../store/products/products.action.js'
import { selectProducts } from '../../store/products/products.selector.js'

// styles
import { HomeContainer, OutletContainer, GradientBG } from './Home.styles.js'

export default function Home() {
  const products = useSelector(selectProducts);
  const [productInd, setProductInd] = useState(0)

  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
        const products = await getProductsAndDocuments();
        dispatch(setProductsArray(products));
    }
    getProducts()
}, []);

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