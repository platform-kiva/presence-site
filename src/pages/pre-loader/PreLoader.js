import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { selectProducts, selectProductsIsLoading } from '../../store/products/products.selector.js'
import { fetchProductsAsync } from '../../store/products/products.action.js'

// styles
import { GradientBG, PreLoaderContainer, PreLoaderBannerContainer } from './PreLoader.styles.js'

// components
import Banner from '../../components/banner/Banner'
import LoadingIcon from '../../components/loading-icon/LoadingIcon.js'

export default function PreLoader() {
    const navigate = useNavigate();
    const isLoading = useSelector(selectProductsIsLoading);
    const products = useSelector(selectProducts)

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchProductsAsync());
    }, []);

    return (
        <>
            {isLoading && !products ?
                <LoadingIcon />
                :
                <PreLoaderContainer onClick={() => navigate("/home")}>
                    <PreLoaderBannerContainer
                        initial={{ opacity: 0.0, translateX: -20 }}
                        animate={{ opacity: [0.0, 1.0], translateX: [-20, 0] }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            times: [0, 1]
                        }}
                        whileHover={{
                            scale: 1.08,
                            transition: { duration: 0.8 }
                        }}
                        className='pre-loader-banner-container'
                    >
                        <Banner />
                    </PreLoaderBannerContainer>
                    <GradientBG />
                </PreLoaderContainer>
            }
        </>
    )
}