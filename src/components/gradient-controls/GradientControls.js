import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectGradientA, selectGradientB, selectDisplayedGradient, selectStatus, selectAddToCartStatus } from '../../store/gradients/gradient.selector.js';
import { selectExperienceWasStarted } from '../../store/system/system.selector.js';
import { setStatus, setAddToCartStatus } from '../../store/gradients/gradient.action.js';
import { setExperienceWasStarted } from '../../store/system/system.action.js';
import { useEffect } from 'react';

import {
    GradientControlsContainer,
    CustomizationLabel,
    RgbDisplayContainer,
    RgbDisplay,
    ColorValContainer,
    RgbSquare,
    ButtonContainer,
    WelcomeMessageContainer
} from './GradientControls.styles.js';

// components
import ElementWrapper from '../element-wrapper/ElementWrapper.js';
import PrimaryBtn from '../btns/primary-btn/PrimaryBtn.js';

export default function GradientControls({ additionalCtrls = false, readOnly=false }) {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const status = useSelector(selectStatus);
    const addToCartStatus = useSelector(selectAddToCartStatus);
    const displayedGradient = useSelector(selectDisplayedGradient);
    const gradientA = useSelector(selectGradientA);
    const gradientB = useSelector(selectGradientB);
    const experienceWasStarted = useSelector(selectExperienceWasStarted);
    const isCartPage = location.pathname.endsWith('/cart');

    useEffect(() => {
        if (status) {
            dispatch(setAddToCartStatus(false));
        }
    }, [dispatch, status])

    const handleClick = () => {
        if (!experienceWasStarted) {
            dispatch(setExperienceWasStarted());
        }
        dispatch(setStatus(status));
    }

    const handleAdd = () => {
        dispatch(setAddToCartStatus(addToCartStatus));
    }

    return (
        <GradientControlsContainer>
            {gradientA && (experienceWasStarted || additionalCtrls || isCartPage) &&
                <CustomizationLabel>
                    {displayedGradient === 'A' && 
                        <RgbDisplayContainer $additionalCtrls={additionalCtrls}>
                            <ElementWrapper delay={additionalCtrls ? 0.3: 0.5}>
                                <RgbDisplay>
                                    <ColorValContainer>
                                        <h4>R</h4>
                                        <h3>{gradientA[0][0]}</h3>
                                    </ColorValContainer>
                                    <ColorValContainer>
                                        <h4>G</h4>
                                        <h3>{gradientA[0][1]}</h3>
                                    </ColorValContainer>
                                    <ColorValContainer>
                                        <h4>B</h4>
                                        <h3>{gradientA[0][2]}</h3>
                                    </ColorValContainer>
                                    <RgbSquare $bgCol={gradientA[0]}/>
                                </RgbDisplay>
                            </ElementWrapper>
                            <ElementWrapper delay={0.4}>
                                <RgbDisplay>
                                    <ColorValContainer>
                                        <h4>R</h4>
                                        <h3>{gradientA[1][0]}</h3>
                                    </ColorValContainer>
                                    <ColorValContainer>
                                        <h4>G</h4>
                                        <h3>{gradientA[1][1]}</h3>
                                    </ColorValContainer>
                                    <ColorValContainer>
                                        <h4>B</h4>
                                        <h3>{gradientA[1][2]}</h3>
                                    </ColorValContainer>
                                    <RgbSquare $bgCol={gradientA[1]}/>
                                </RgbDisplay>
                            </ElementWrapper>
                        </RgbDisplayContainer>
                    }
                    {displayedGradient === 'B' && 
                    <ElementWrapper>
                        <RgbDisplayContainer $additionalCtrls={additionalCtrls}>
                            <ElementWrapper delay={additionalCtrls ? 0.3: 0.5}>
                                <RgbDisplay>
                                    <ColorValContainer>
                                        <h4>R</h4>
                                        <h3>{gradientB[0][0]}</h3>
                                    </ColorValContainer>
                                    <ColorValContainer>
                                        <h4>G</h4>
                                        <h3>{gradientB[0][1]}</h3>
                                    </ColorValContainer>
                                    <ColorValContainer>
                                        <h4>B</h4>
                                        <h3>{gradientB[0][2]}</h3>
                                    </ColorValContainer>
                                <RgbSquare $bgCol={gradientB[0]}/>
                                </RgbDisplay>
                            </ElementWrapper>
                            <ElementWrapper delay={0.4}>
                                <RgbDisplay>
                                    <ColorValContainer>
                                        <h4>R</h4>
                                        <h3>{gradientB[1][0]}</h3>
                                    </ColorValContainer>
                                    <ColorValContainer>
                                        <h4>G</h4>
                                        <h3>{gradientB[1][1]}</h3>
                                    </ColorValContainer>
                                    <ColorValContainer>
                                        <h4>B</h4>
                                        <h3>{gradientB[1][2]}</h3>
                                    </ColorValContainer>
                                    <RgbSquare $bgCol={gradientB[1]}/>
                                </RgbDisplay>
                            </ElementWrapper>
                        </RgbDisplayContainer>
                    </ElementWrapper>
                    }
                </CustomizationLabel>
            }
            {!experienceWasStarted &&
                <WelcomeMessageContainer>
                    <ElementWrapper delay={0.5}>
                        <h3>RGB values are randomly generated, producing a sequence of 281,474,976,710,656 color combinations.</h3>
                    </ElementWrapper>
                    <ElementWrapper delay={0.4}>
                        <h3>Color combinations can be bought in the gift shop, after which they are made unavailable for purchase.</h3>
                    </ElementWrapper>
                    <ElementWrapper delay={0.3}>
                        <h3>Proceeds are reinvested into the growth and development of <em>presence design LLC</em></h3>
                    </ElementWrapper>
                </WelcomeMessageContainer>
            }
            {!readOnly ?
                <ButtonContainer $additionalCtrls={additionalCtrls}>
                    <ElementWrapper>
                        <div onClick={handleClick}>
                            <PrimaryBtn label={status ? "STOP" : "START"} />
                        </div>
                    </ElementWrapper>
                    {additionalCtrls &&
                        <ElementWrapper>
                            <div onClick={!status ? handleAdd : null }>
                                <PrimaryBtn label={!addToCartStatus ? "BACK" : "ADD TO CART"} isActive={!status ? true : false}/>
                            </div>
                        </ElementWrapper>
                    }
                </ButtonContainer>
                :
                <ButtonContainer>
                    <ElementWrapper>
                        <div onClick={() => navigate("../checkout")}>
                            <PrimaryBtn label={"GO TO CHECKOUT"} />
                        </div>
                    </ElementWrapper>
                </ButtonContainer>
            }
        </GradientControlsContainer>
    )
}
