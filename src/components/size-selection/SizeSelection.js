import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js'
import { addItemToCart } from '../../store/cart/cart.action.js'

// styles
import {
    ActionContainer,
    SizesContainer,
    ProductInfoButtons,
    SizeGuideContainer,
    SizeGuideTableContainer,
    ProductInfoContainer,
    BulletText
} from'./SizeSelection.styles.js';

// components
import ElementWrapper from '../element-wrapper/ElementWrapper.js';
import PrimaryBtn from '../btns/primary-btn/PrimaryBtn.js';
import SizeBtn from '../btns/size-btn/SizeBtn.js'

export default function SizeSelection({ product, purchasedDate }) {
    const dispatch = useDispatch();
    const [primaryBtnLabel, setPrimaryBtnLabel] = useState('ADD TO CART +$35');
    const [sizeGuideIsActive, setSizeGuideIsActive] = useState(false);
    const [productInfoIsActive, setProductInfoIsActive] = useState(false);
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
            {!sizeGuideIsActive && !productInfoIsActive &&
                <>  
                    <ElementWrapper>
                        <SizesContainer>
                            {product.availSizes.map(size => (
                                <div key={size} onClick={() => handleSizeSelection(size)}>
                                    <SizeBtn isActive={purchasedDate === null} size={size} accentCol={product.botGradient} selectedSize={activeSize} />
                                </div>
                            ))}
                        </SizesContainer>
                    </ElementWrapper>

                    
                    <div onClick={() => addProductToCart(product, activeSize)} style={{ width: "100%", maxWidth: '200px' }}>
                        <ElementWrapper>
                            <PrimaryBtn label={primaryBtnLabel} accentCol={product.botGradient} isActive={activeSize !== null && purchasedDate === null} wasActivated={timerRunning}/>
                        </ElementWrapper>
                    </div>

                    <ElementWrapper>
                        <ProductInfoButtons>
                            <>
                                <h3 onClick={() => setSizeGuideIsActive(true)}>SIZE GUIDE</h3>
                                <h3 onClick={() => setProductInfoIsActive(true)}>PRODUCT INFO</h3>
                            </>  
                        </ProductInfoButtons>
                    </ElementWrapper>

                    {/* <ElementWrapper>
                        {purchasedDate !== null &&
                            <ElementWrapper>
                            <h3 style={{ padding: "10px 0px", textAlign: "center", fontWeight: "100" }}>This color combination was claimed on {purchasedDate}</h3>
                            </ElementWrapper>
                        }
                        {purchasedDate === null &&
                            <ElementWrapper>
                            <h3 style={{ padding: "10px 0px", textAlign: "center", fontWeight: "100" }}>This color combination is available for purchase.</h3>
                            </ElementWrapper>
                        }
                    </ElementWrapper> */}
                </>
            }
            {sizeGuideIsActive &&
                <SizeGuideContainer>
                    <ElementWrapper>
                        <SizeGuideTableContainer>
                            <table class="size-chart">
                                <thead>
                                    <tr>
                                        <th>SIZE</th>
                                        <th>LENGTH</th>
                                        <th>CHEST</th>
                                        <th>SLEEVE LENGTH</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>S</td>
                                        <td>26 ⅝"</td>
                                        <td>38 - 41"</td>
                                        <td>16 ¼"</td>
                                    </tr>
                                    <tr>
                                        <td>M</td>
                                        <td>28"</td>
                                        <td>42 - 45"</td>
                                        <td>17 ¾"</td>
                                    </tr>
                                    <tr>
                                        <td>L</td>
                                        <td>29 ⅜"</td>
                                        <td>46 - 49"</td>
                                        <td>19"</td>
                                    </tr>
                                    <tr>
                                        <td>XL</td>
                                        <td>30 ¾"</td>
                                        <td>50 - 53"</td>
                                        <td>20 ½"</td>
                                    </tr>
                                    <tr>
                                        <td>XXL</td>
                                        <td>31 ⅝"</td>
                                        <td>54 - 56"</td>
                                        <td>21 ¾"</td>
                                    </tr>
                                </tbody>
                            </table>
                        </SizeGuideTableContainer>
                        <p class="note">(Product measurements may vary by up to 2")</p>
                    </ElementWrapper>
                    
                    <ElementWrapper>
                        <ProductInfoButtons>
                            <h3 onClick={() => setSizeGuideIsActive(false)}>BACK</h3>
                        </ProductInfoButtons>
                    </ElementWrapper>
                </SizeGuideContainer>
            }
            {productInfoIsActive &&
                <ProductInfoContainer>
                    <ElementWrapper>
                        <BulletText>
                            <li>100% ring-spun cotton</li>
                            <li>Relaxed fit</li>
                            <li>7/8″ double-needle top-stitch collar</li>
                            <li>Thick but breathable material</li>
                            <li>Product made to order</li>
                        </BulletText>
                    </ElementWrapper>
                    <ElementWrapper delay={0.4}>
                        <ProductInfoButtons>
                            <h3 onClick={() => setProductInfoIsActive(false)}>BACK</h3>
                        </ProductInfoButtons>
                    </ElementWrapper>
                </ProductInfoContainer>
            }
        </ActionContainer>
    )
}
