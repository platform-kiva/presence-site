import { useDispatch, useSelector } from 'react-redux';
import { selectGradientA, selectGradientB, selectDisplayedGradient, selectStatus } from '../../store/gradients/gradient.selector';
import { setStatus } from '../../store/gradients/gradient.action';

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

export default function GradientControls() {
    const dispatch = useDispatch()
    const status = useSelector(selectStatus);
    const displayedGradient = useSelector(selectDisplayedGradient);
    const gradientA = useSelector(selectGradientA);
    const gradientB = useSelector(selectGradientB);

    const handleClick = () => {
        dispatch(setStatus(status));
      }

    return (
        <GradientControlsContainer>
            {gradientA &&
                <CustomizationLabel>
                    {displayedGradient === 'A' && 
                        <RgbDisplayContainer>
                        <ElementWrapper delay={0.5}>
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
                        <RgbDisplayContainer>
                        <ElementWrapper delay={0.5}>
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
            <ButtonContainer onClick={handleClick}>
                <ElementWrapper>
                    <PrimaryBtn label={status ? "STOP" : "START"} />
                </ElementWrapper>
            </ButtonContainer>
        </GradientControlsContainer>
    )
}
