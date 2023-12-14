import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectProducts } from '../../store/products/products.selector.js';
import GradientBG from '../../components/gradient-bg/GradientBG.js';

// styles
import { HomeContainer } from './Home.styles.js';

// components
import LoadingIcon from '../../components/loading-icon/LoadingIcon.js';

export default function Home() {
  const products = useSelector(selectProducts);
  const [productInd, setProductInd] = useState(0);
  const nextIndex = products.length > 0 ? (productInd + 1) % products.length : 0;

  const gradient = (ind) => {
    return `linear-gradient(45deg,
              rgba(
                ${products[productInd].botGradient[0]},
                ${products[productInd].botGradient[1]},
                ${products[productInd].botGradient[2]}, 0.8) 0%,
              rgba(
                ${products[productInd].topGradient[0]},
                ${products[productInd].topGradient[1]},
                ${products[productInd].topGradient[2]}, 0.8) 100%)`
  } 


  return (
    <>
      {products.length !== 0 ? 
          <HomeContainer>
            <Outlet context={[productInd, setProductInd]}/>
            <GradientBG currentGradient={gradient(productInd)} nextGradient={gradient(nextIndex)}/>
          </HomeContainer>
          :
          <>
            <LoadingIcon />
          </>      
      }
    </>
  );
};