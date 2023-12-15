import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectProducts } from '../../store/products/products.selector.js';

// styles
import { HomeContainer } from './Home.styles.js';

// components
import GradientBG from '../../components/gradient-bg/GradientBG.js';
import LoadingIcon from '../../components/loading-icon/LoadingIcon.js';

export default function Home() {
  const products = useSelector(selectProducts);
  const [productInd, setProductInd] = useState(0);
  const nextIndex = products.length > 0 ? (productInd + 1) % products.length : 0;

  const gradient = (ind) => {
    return `linear-gradient(45deg,
              rgba(
                ${products[ind].botGradient[0]},
                ${products[ind].botGradient[1]},
                ${products[ind].botGradient[2]}, 0.8) 0%,
              rgba(
                ${products[ind].topGradient[0]},
                ${products[ind].topGradient[1]},
                ${products[ind].topGradient[2]}, 0.8) 100%)`
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