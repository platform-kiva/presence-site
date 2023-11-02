import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectProducts } from '../../store/products/products.selector.js';

// styles
import {
  HomeContainer,
  OutletContainer,
  GradientBG
} from './Home.styles.js';

export default function Home() {
  const products = useSelector(selectProducts);
  const [productInd, setProductInd] = useState(0);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  useEffect(() => {
    setInitialLoadComplete(true);
  }, []);

  return (
    <>
      {products.length !== 0 && 
          <HomeContainer>
            <OutletContainer>
              <Outlet context={[productInd, setProductInd]} />
            </OutletContainer>
            <AnimatePresence>
              <GradientBG
                $products={products}
                $productInd={productInd}
                initial={initialLoadComplete ? { opacity: 0 } : { opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.0 }}
              />
            </AnimatePresence>
          </HomeContainer>
      };
    </>
  );
};