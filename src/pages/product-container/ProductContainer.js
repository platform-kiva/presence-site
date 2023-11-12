import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import { selectProducts } from '../../store/products/products.selector.js';

// styles
import {
    ProductsContainer,
    CarouselBtnsContainer,
    CarouselBtnContainer,
    NavBtnContainer
} from './ProductContainer.styles.js';

// components
import CarouselBtn from '../../components/btns/carousel-btn/CarouselBtn';
import Header from '../../components/header/Header';
import NavBtn from '../../components/btns/nav-btn/NavBtn';
import Product from './product/Product';
import GradientProduct from './product-customs/gradient-product/GradientProduct.js';

export default function ProductContainer() {
    const products = useSelector(selectProducts);
    const [isScrolled, setIsScrolled] = useState(false);
    const [productInd, setProductInd] = useOutletContext();

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

    const handleIndChange = (val) => {
        let currInd = productInd;
        if (currInd === 2 && val === 1) {
            currInd = 0;
        } else if (currInd === 0 && val === -1) {
            currInd = 2;
        } else {
            currInd += val;
        }
        setProductInd(currInd);
    };

    return (
        <ProductsContainer>
            <Header />
            <CarouselBtnsContainer>
                <CarouselBtnContainer onClick={() => handleIndChange(-1)}>
                    <CarouselBtn icon={"left"} filled={false} />
                </CarouselBtnContainer>
                <CarouselBtnContainer onClick={() => handleIndChange(1)}>
                    <CarouselBtn icon={"right"} filled={false} />
                </CarouselBtnContainer>
            </CarouselBtnsContainer>
            {productInd !== 0 &&
                <Product product={products[productInd]} />
            }
            {productInd === 0 &&
                <GradientProduct product={products[productInd]} />
            }
            <NavBtnContainer $isScrolled={isScrolled} onClick={() => handleScroll()}>
                <NavBtn direction={isScrolled ? "up" : "down"} btnIcon={isScrolled ? "up" : "down"}/>
            </NavBtnContainer>
        </ProductsContainer>
    );
};