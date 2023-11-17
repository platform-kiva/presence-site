import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import { selectProducts } from '../../store/products/products.selector.js';

// styles
import {
    CarouselBtnContainer,
    CarouselBtnsContainer,
    HeaderContainer,
    NavBtnContainer,
    ProductsContainer
} from './ProductContainer.styles.js';

// components
import CarouselBtn from '../../components/btns/carousel-btn/CarouselBtn';
import GridItemsView from '../../components/grid-products-view/GridProductsView.js';
import Header from '../../components/header/Header';
import NavBtn from '../../components/btns/nav-btn/NavBtn';
import Product from './product/Product';
import { useEffect } from 'react';

export default function ProductContainer() {
    const products = useSelector(selectProducts);
    const [isScrolled, setIsScrolled] = useState(false);
    const [productInd, setProductInd] = useOutletContext();
    const [gridViewIsDisplayed, setGridViewIsDisplayed] = useState(false)

    const handleScroll = () => {
        if (!isScrolled) {
            const botElement = document.getElementById("productBotFold");
            botElement.scrollIntoView({ behavior: "smooth" });
        } else if (isScrolled) {
            const topElement = document.getElementById("productTopFold");
            topElement.scrollIntoView({ behavior: "smooth" });
        };
        setIsScrolled(!isScrolled);
    };

    useEffect(() => {
        console.log(gridViewIsDisplayed)
    }, [gridViewIsDisplayed])

    const handleIndChange = (val) => {
        let currInd = productInd;
        if (currInd === 3 && val === 1) {
            currInd = 0;
        } else if (currInd === 0 && val === -1) {
            currInd = 3;
        } else {
            currInd += val;
        }
        setProductInd(currInd);
    };

    return (
        <ProductsContainer>
            <HeaderContainer
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                    times: [0, 1]
                }}
            >
                <Header gridViewSetter={setGridViewIsDisplayed} gridViewStatus={gridViewIsDisplayed}/>
            </HeaderContainer>
            {gridViewIsDisplayed ?
                <GridItemsView items={products} indSetter={setProductInd} gridViewSetter={setGridViewIsDisplayed} />
                :
                <>
                    <CarouselBtnsContainer>
                        <CarouselBtnContainer onClick={() => handleIndChange(-1)}>
                            <CarouselBtn icon={"left"} filled={false} />
                        </CarouselBtnContainer>
                        <CarouselBtnContainer onClick={() => handleIndChange(1)}>
                            <CarouselBtn icon={"right"} filled={false} />
                        </CarouselBtnContainer>
                    </CarouselBtnsContainer>
                    <Product product={products[productInd]} />
                </>
            }
            {!gridViewIsDisplayed &&
                <NavBtnContainer $isScrolled={isScrolled} onClick={() => handleScroll()}>
                    <NavBtn direction={isScrolled ? "up" : "down"} btnIcon={isScrolled ? "up" : "down"}/>
                </NavBtnContainer>
            }

        </ProductsContainer>
    );
};