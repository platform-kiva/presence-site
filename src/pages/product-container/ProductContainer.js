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

    const handleIndChange = (val) => {
        let currInd = productInd;
        if (currInd === products.length - 1 && val === 1) {
            currInd = 0;
        } else if (currInd === 0 && val === -1) {
            currInd = products.length - 1;
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
                <NavBtnContainer onClick={() => handleScroll()}>
                    <NavBtn direction={"down"} btnIcon={"down"}/>
                </NavBtnContainer>
            }
        </ProductsContainer>
    );
};

// export async function getStaticProps() {
//     const { data } = await storefront(productsQuery)
//     return {
//         props: {
//             shopifyProducts: data.products

//         }
//     }
// }

// const productsQuery = `
//     query Products {
//         products(first:3) {
//             edges {
//                 node {
//                     title
//                     handle
//                     tags
//                     priceRange {
//                         minVariantPrice {
//                             amount
//                         }
//                     }
//                     images(first:1) {
//                         edges {
//                             node {
//                                 url(transform:{preferredContentType: PNG})
//                                 altText
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `