import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js'
import { addItemToCart } from '../../store/cart/cart.action.js'
import { selectGradientA, selectGradientB } from '../../store/gradients/gradient.selector.js';
import { selectUserSize } from '../../store/system/system.selector.js';

// styles
import {
    ActionContainer,
    ProductInfoButtons,
    SizeGuideContainer,
    SizeGuideTableContainer,
    ProductInfoContainer,
    BulletText,
    StatusContainer,
    StatusDot,
    MultiLineStatusContainer,
    ClaimedDateContainer,
    SizeChart
} from'./SizeSelection.styles.js';

// components
import ElementWrapper from '../element-wrapper/ElementWrapper.js';
import PrimaryBtn from '../btns/primary-btn/PrimaryBtn.js';
import Counter from '../btns/counter/Counter.js';

export default function SizeSelection({ product, purchasedDate }) {
    const dispatch = useDispatch();
    const [primaryBtnLabel, setPrimaryBtnLabel] = useState('ADD TO CART +$35');
    const [sizeGuideIsActive, setSizeGuideIsActive] = useState(false);
    const [productInfoIsActive, setProductInfoIsActive] = useState(false);
    const [timerRunning, setTimerRunning] = useState(false);
    const cartItems = useSelector(selectCartItems)
    const gradientA = useSelector(selectGradientA);
    const gradientB = useSelector(selectGradientB);
    const userSize = useSelector(selectUserSize);
    const sizes = ['S','M','L','XL','2XL', '3XL', '4XL'];

    const addProductToCart = () => {
        
        if (purchasedDate !== null) {
            alert("not null")
            return;
        }
        try {
            if (timerRunning) {
                return;
            };
            dispatch(addItemToCart(cartItems, product, sizes[userSize]));
            setPrimaryBtnLabel('ADDED TO CART!');
            setTimerRunning(true);
            setTimeout(() => {
                setPrimaryBtnLabel('ADD TO CART +$35');
                setTimerRunning(false);
            }, 2000);
            
        } catch (error) {
            alert("Error adding to cart.");
        };
    };
    
    return (
        <ActionContainer>
            {!sizeGuideIsActive && !productInfoIsActive &&
                <>  
                    {purchasedDate === null &&
                        <>
                            <ElementWrapper>
                                <Counter />
                            </ElementWrapper>
                            <div onClick={() => addProductToCart(product)} style={{ width: "100%", maxWidth: '200px' }}>
                                <ElementWrapper>
                                    <PrimaryBtn label={primaryBtnLabel} isActive={purchasedDate === null} wasActivated={timerRunning}/>
                                </ElementWrapper>
                            </div>
                        </>
                    }
                    {purchasedDate === null &&
                        <ElementWrapper>
                            <ProductInfoButtons>
                                    <h3 onClick={() => setSizeGuideIsActive(true)}>SIZE GUIDE</h3>
                                    <h3 onClick={() => setProductInfoIsActive(true)}>PRODUCT INFO</h3>
                            </ProductInfoButtons>
                        </ElementWrapper>
                    }
                    <ElementWrapper>
                        {purchasedDate !== null &&
                            <ElementWrapper>
                                <MultiLineStatusContainer>
                                    <StatusContainer>
                                        <StatusDot $status={false}/>
                                        <h3 style={{ padding: "10px 0px", textAlign: "center", fontWeight: "100" }}>Color Unavailable</h3>
                                    </StatusContainer>
                                    <ClaimedDateContainer $bgA={gradientB} $bgB={gradientA}>
                                        <h3>Claimed on {purchasedDate}</h3>
                                    </ClaimedDateContainer>
                                    <h3 style={{ padding: "10px 0px", textAlign: "center", fontWeight: "100" }}>Press 'START' for more colors</h3>
                                </MultiLineStatusContainer>
                            </ElementWrapper>
                        }
                        {purchasedDate === null &&
                            <ElementWrapper>
                                <StatusContainer>
                                    <StatusDot $status={true}/>
                                    <h3 style={{ padding: "10px 0px", textAlign: "center", fontWeight: "100" }}>Color is available</h3>
                                </StatusContainer>
                            </ElementWrapper>
                        }
                    </ElementWrapper>
                </>
            }
            {sizeGuideIsActive &&
                <SizeGuideContainer>
                    <ElementWrapper>
                        <SizeGuideTableContainer>
                            <SizeChart $bgA={gradientA} $bgB={gradientB}>
                                <thead>
                                    <tr>
                                        <th>SIZE</th>
                                        <th>LENGTH</th>
                                        <th>WIDTH</th>
                                        <th>SLEEVE LENGTH</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>S</td>
                                        <td>26 ⅝"</td>
                                        <td>18 ¼"</td>
                                        <td>16 ¼"</td>
                                    </tr>
                                    <tr>
                                        <td>M</td>
                                        <td>28"</td>
                                        <td>20 ¼"</td>
                                        <td>17 ¾"</td>
                                    </tr>
                                    <tr>
                                        <td>L</td>
                                        <td>29 ⅜"</td>
                                        <td>22"</td>
                                        <td>19"</td>
                                    </tr>
                                    <tr>
                                        <td>XL</td>
                                        <td>30 ¾"</td>
                                        <td>24"</td>
                                        <td>20 ½"</td>
                                    </tr>
                                    <tr>
                                        <td>2XL</td>
                                        <td>31 ⅝"</td>
                                        <td>26"</td>
                                        <td>21 ¾"</td>
                                    </tr>
                                    <tr>
                                        <td>3XL</td>
                                        <td>32 ½"</td>
                                        <td>27 ¾"</td>
                                        <td>23 ¼"</td>
                                    </tr>
                                    <tr>
                                        <td>4XL</td>
                                        <td>33 ½"</td>
                                        <td>29 ¾"</td>
                                        <td>24 ⅝"</td>
                                    </tr>
                                </tbody>
                            </SizeChart>
                        </SizeGuideTableContainer>
                        <p class="note">(Product measurements may vary by up to 2")</p>
                    </ElementWrapper>
                    
                    <ElementWrapper delay={0.3}>
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
                            <h3 style={{ paddingBottom: '16px' }}>Printed on Comfort Colors 1717</h3>
                            <li>100% ring-spun cotton</li>
                            <li>Relaxed fit</li>
                            <li>7/8″ double-needle top-stitch collar</li>
                            <li>Thick but breathable material</li>
                            <li>It's a t-shirt</li>
                        </BulletText>
                    </ElementWrapper>
                    <ElementWrapper delay={0.3}>
                        <ProductInfoButtons>
                            <h3 onClick={() => setProductInfoIsActive(false)}>BACK</h3>
                        </ProductInfoButtons>
                    </ElementWrapper>
                </ProductInfoContainer>
            }
        </ActionContainer>
    )
}
