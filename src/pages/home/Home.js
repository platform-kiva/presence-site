import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { selectProducts } from '../../store/products/products.selector.js';

// styles
import { GradientBG, HomeContainer } from './Home.styles.js';

// components
import LoadingIcon from '../../components/loading-icon/LoadingIcon.js';

export default function Home() {
  const navigate = useNavigate();
  const products = useSelector(selectProducts);
  const [productInd, setProductInd] = useState(0);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const [themeColor, setThemeColor] = useState(null);

  useEffect(() => {
    // Find the existing meta tag or create a new one
    let metaThemeColor = document.querySelector('meta[name=theme-color]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.getElementsByTagName('head')[0].appendChild(metaThemeColor);
    }

    // Set the content of the meta tag to the current theme color
    metaThemeColor.setAttribute('content', themeColor);
  }, [themeColor]); // Only re-run the effect if themeColor changes

  useEffect(() => {
    setInitialLoadComplete(true);
  }, []);

  useEffect(() => {
    if (products.length === 0) {
      navigate("/")
    }
    setThemeColor(products[productInd].topGradient)
  }, [navigate, products, productInd])

  return (
    <>
      {products.length !== 0 ? 
          <HomeContainer>
            <Outlet context={[productInd, setProductInd]} />
            <AnimatePresence>
              <GradientBG
                key={productInd}
                $products={products}
                $productInd={productInd}
                initial={initialLoadComplete ? { opacity: 0 } : { opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
          </HomeContainer>
          :
          <>
            <LoadingIcon />
          </>      
      }
    </>
  );
};