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
          <GradientBG $products={products} $productInd={productInd} />
        </HomeContainer>
      </>
    }
    </>
  )
}