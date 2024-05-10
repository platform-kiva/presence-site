import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setDisplayedGradient, setDefaultGradient, setStatus } from '../../store/gradients/gradient.action.js';
import { fetchProductsAsync } from '../../store/products/products.action.js';
import { selectProductsIsLoading } from '../../store/products/products.selector.js';

// styles
import {
    BannerContainer,
    PreLoaderContainer
} from './PreLoader.styles.js';

// components
import Banner from '../../components/banner/Banner.js';
import LoadingIcon from '../../components/loading-icon/LoadingIcon.js';

export default function PreLoader() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoading = useSelector(selectProductsIsLoading);
    const [loadingIsDisplayed, setLoadingIsDisplayed] = useState(true);
    const [animateOut, setAnimateOut] = useState(false);
    
    useEffect(() => {
        dispatch(setStatus(true));
        dispatch(setDisplayedGradient('A'));
        dispatch(setDefaultGradient([[219,120,212], [32,172,232]]));
        dispatch(fetchProductsAsync());
    }, [dispatch]);

    useEffect(() => {
        let timer1, timer2;
        if (!isLoading) {
            timer1 = setTimeout(() => {
                setLoadingIsDisplayed(false);
            }, 1200);
            timer2 = setTimeout(() => {
                setAnimateOut(true);
            }, 3200);
        };
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [isLoading, navigate]);

    useEffect(() => {
        let timer;
        if (animateOut) {
            timer = setTimeout(() => {
                navigate('home');
            }, 1000);
        };
        return () => {
            clearTimeout(timer);
        };
    }, [animateOut, navigate]);

    return (
        <PreLoaderContainer>
            {loadingIsDisplayed ?
                <LoadingIcon />
                :
                <BannerContainer
                    initial={{ opacity: 0.0 }}
                    animate={animateOut ? { opacity: 0 } : { opacity: [0.0, 1.0] }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        times: [0, 1]
                    }}
                >
                    <Banner label={"presence"}/>
                </BannerContainer>
            }
        </PreLoaderContainer>
    )
}