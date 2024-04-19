import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectGradientA, selectGradientB, selectDisplayedGradient, selectStatus, selectAddToCartStatus } from '../../store/gradients/gradient.selector';
import { setStatus, setAddToCartStatus } from '../../store/gradients/gradient.action';
import { useEffect } from 'react';

import {
    GradientControlsContainer,
    CustomizationLabel,
    RgbDisplayContainer,
    RgbDisplay,
    RgbSquare,
    ButtonContainer
} from './GradientControls.styles';

// components
import ElementWrapper from '../element-wrapper/ElementWrapper';
import PrimaryBtn from '../btns/primary-btn/PrimaryBtn';

export default function GradientControls({ additionalCtrls = false, readOnly=false }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const status = useSelector(selectStatus);
    const addToCartStatus = useSelector(selectAddToCartStatus);
    const displayedGradient = useSelector(selectDisplayedGradient);
    const gradientA = useSelector(selectGradientA);
    const gradientB = useSelector(selectGradientB);

    useEffect(() => {
        if (status) {
            dispatch(setAddToCartStatus(false));
        }
    }, [dispatch, status])

    const handleClick = () => {
        dispatch(setStatus(status));
      }

    const handleAdd = () => {
        dispatch(setAddToCartStatus(addToCartStatus));
    }

    return (
        <GradientControlsContainer>
            {gradientA &&
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
                        <div onClick={() => navigate("/checkout")}>
                            <PrimaryBtn label={"GO TO CHECKOUT"} />
                        </div>
                    </ElementWrapper>
                </ButtonContainer>
            }
        </GradientControlsContainer>
    )
}
