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

export default function SizeSelection({ product, purchasedDate }) {
    const dispatch = useDispatch();
    const [primaryBtnLabel, setPrimaryBtnLabel] = useState('ADD TO CART +$35');
    const [activeSize, setActiveSize] = useState(null);
    const [timerRunning, setTimerRunning] = useState(false);
    const cartItems = useSelector(selectCartItems)

    const handleSizeSelection = (size) => {
        setActiveSize(size);
    };

    const addProductToCart = () => {
        if (purchasedDate !== null) {
            return
        }
        try {
            if (timerRunning) {
                return;
            };
            if (activeSize !== null) {
                dispatch(addItemToCart(cartItems, product, activeSize));
                setPrimaryBtnLabel('ADDED TO CART!');
                setTimerRunning(true);
                setTimeout(() => {
                    setPrimaryBtnLabel('ADD TO CART +$35');
                    setTimerRunning(false);
                }, 2000);
            };
        } catch (error) {
            alert("Error: Item was not added to cart.");
        };
    };

    useEffect(() => {
        setActiveSize(null)
    }, [product])
    
    return (
        <ActionContainer>
            <SizesContainer>
                {product.availSizes.map(size => (
                    <div key={size} onClick={() => handleSizeSelection(size)}>
                        <SizeBtn isActive={purchasedDate === null} size={size} accentCol={product.botGradient} selectedSize={activeSize} />
                    </div>
                ))}
            </SizesContainer>
                <div onClick={() => addProductToCart(product, activeSize)}>
                    <PrimaryBtn label={primaryBtnLabel} accentCol={product.botGradient} isActive={activeSize !== null && purchasedDate === null} wasActivated={timerRunning}/>
                </div>
        </ActionContainer>
    )
}
