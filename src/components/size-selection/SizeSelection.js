import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js'
import { addItemToCart } from '../../store/cart/cart.action.js'

// styles
import {
    ActionContainer,
    SizesContainer
} from'./SizeSelection.styles.js';

// components
import PrimaryBtn from '../btns/primary-btn/PrimaryBtn.js';
import SizeBtn from '../btns/size-btn/SizeBtn.js'

export default function SizeSelection({ product, custom=false, scrollToElement=null }) {
    const dispatch = useDispatch();
    const [primaryBtnLabel, setPrimaryBtnLabel] = useState('ADD TO CART');
    const [activeSize, setActiveSize] = useState(null);
    const [timerRunning, setTimerRunning] = useState(false);
    const cartItems = useSelector(selectCartItems)

    const handleSizeSelection = (size) => {
        setActiveSize(size);
    };

    const addProductToCart = () => {
        try {
            if (timerRunning) {
            return;
            };
            if (activeSize !== null) {
                dispatch(addItemToCart(cartItems, product, activeSize));
                setPrimaryBtnLabel('ADDED TO CART!');
                setTimerRunning(true);
                setTimeout(() => {
                    setPrimaryBtnLabel('ADD TO CART');
                    setTimerRunning(false);
                }, 2000);
            };
        } catch (error) {
            alert("Error: Item was not added to cart.");
        };
    };

    const handleScroll = () => {
        if (scrollToElement) {
            scrollToElement('custom')
        }
        return;
    };

    useEffect(() => {
        setActiveSize(null)
    }, [product])
    
    return (
        <ActionContainer>
            <SizesContainer>
                {product.availSizes.map(size => (
                    <div key={size} onClick={() => handleSizeSelection(size)}>
                        <SizeBtn size={size} accentCol={product.botGradient} selectedSize={activeSize} />
                    </div>
                ))}
            </SizesContainer>
                <div onClick={() => addProductToCart(product, activeSize)}>
                    <PrimaryBtn label={primaryBtnLabel} accentCol={product.botGradient} isActive={activeSize !== null}/>
                </div>
                {custom === true &&
                    <div onClick={() => handleScroll()}>
                        <PrimaryBtn label={"CREATE CUSTOM"} accentCol={product.botGradient} />
                    </div>
                }
        </ActionContainer>
    )
}
