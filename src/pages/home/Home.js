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

  const gradient = () => {
    return `linear-gradient(45deg,
              rgba(
                ${products[0].botGradient[0]},
                ${products[0].botGradient[1]},
                ${products[0].botGradient[2]}, 0.8) 0%,
              rgba(
                ${products[0].topGradient[0]},
                ${products[0].topGradient[1]},
                ${products[0].topGradient[2]}, 0.8) 100%)`
  } 

  return (
    <>
      {products.length !== 0 ? 
          <HomeContainer>
            <Outlet />
            <GradientBG gradient={gradient(0)} />
          </HomeContainer>
          :
          <>
            <LoadingIcon />
          </>      
      }
    </>
  );
};