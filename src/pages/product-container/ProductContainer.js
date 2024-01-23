import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../store/products/products.selector.js';

// styles
import { HeaderContainer, ProductsContainer } from './ProductContainer.styles.js';

// components
import Cart from '../cart/Cart.js';
import Header from '../../components/header/Header';
import Product from './product/Product';
import SocialsView from '../../components/socials-view/SocialsView.js';

export default function ProductContainer() {
    const products = useSelector(selectProducts);
    const [cartViewIsDisplayed, setCartViewIsDisplayed] = useState(false);
    const [socialsViewIsDisplayed,setSocialsViewIsDisplayed] = useState(false);

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
                <Header
                    cartViewSetter={setCartViewIsDisplayed}
                    cartViewStatus={cartViewIsDisplayed}
                    socialsViewSetter={setSocialsViewIsDisplayed}
                    socialsViewStatus={socialsViewIsDisplayed}
                />
            </HeaderContainer>
            {socialsViewIsDisplayed &&
                <SocialsView />
            }
            {cartViewIsDisplayed &&
                <Cart />
            }
            {!cartViewIsDisplayed && !socialsViewIsDisplayed &&
                <Product product={products[0]} />
            }
        </ProductsContainer>
    );
};