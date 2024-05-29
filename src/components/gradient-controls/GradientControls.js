import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
    RgbSquare,
    ButtonContainer
} from './GradientControls.styles.js';

// components
import ElementWrapper from '../element-wrapper/ElementWrapper.js';
import PrimaryBtn from '../btns/primary-btn/PrimaryBtn.js';

export default function GradientControls({ additionalCtrls = false, readOnly=false }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const status = useSelector(selectStatus);
    const addToCartStatus = useSelector(selectAddToCartStatus);
    const displayedGradient = useSelector(selectDisplayedGradient);
    const gradientA = useSelector(selectGradientA);
    const gradientB = useSelector(selectGradientB);
    const experienceWasStarted = useSelector(selectExperienceWasStarted);

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
            {!experienceWasStarted && !additionalCtrls &&
                <ElementWrapper>
                    <h3 style={{ padding: '10px', maxWidth: '360px', textAlign: 'center', fontWeight: '500'}}>welcome.</h3>
                </ElementWrapper>  
            }
            {gradientA && (experienceWasStarted || additionalCtrls) &&
                <CustomizationLabel>
                    {displayedGradient === 'A' && 
                        <RgbDisplayContainer $additionalCtrls={additionalCtrls}>
                            <ElementWrapper delay={additionalCtrls ? 0.3: 0.5}>
                                <RgbDisplay>
                                <h3>rgb({gradientA[0][0]}, {gradientA[0][1]}, {gradientA[0][2]})</h3>
                                <RgbSquare $bgCol={gradientA[0]}/>
                                </RgbDisplay>
                            </ElementWrapper>
                            <ElementWrapper delay={0.4}>
                                <RgbDisplay>
                                <h3>rgb({gradientA[1][0]}, {gradientA[1][1]}, {gradientA[1][2]})</h3>
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
                                <h3>rgb({gradientB[0][0]}, {gradientB[0][1]}, {gradientB[0][2]})</h3>
                                <RgbSquare $bgCol={gradientB[0]}/>
                                </RgbDisplay>
                            </ElementWrapper>
                            <ElementWrapper delay={0.4}>
                                <RgbDisplay>
                                <h3>rgb({gradientB[1][0]}, {gradientB[1][1]}, {gradientB[1][2]})</h3>
                                <RgbSquare $bgCol={gradientB[1]}/>
                                </RgbDisplay>
                            </ElementWrapper>
                        </RgbDisplayContainer>
                    </ElementWrapper>
                    }
                </CustomizationLabel>
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
