import styled from "styled-components";
import { device, size } from "../../media-breakpoints";

export const GradientControlsContainer = styled.div`
  align-items: center;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  left: 50%;
  position: absolute;
  transform: translate(-50%);

  @media ${device.laptopL} {
        bottom: 50px;
    }
`
export const CustomizationLabel = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;

    h3 {
        text-align: center;
        width: 90%;
    }

    @media (max-width: ${size.tablet}) {
        padding: 40px 0px;
    }
`
export const RgbDisplayContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: ${props => !props.$additionalCtrls ? 'column' : 'row'};
    gap: 10px;
    justify-content: center;
    height: ${props => !props.$additionalCtrls ? '55px' : '35px'};
    width: 100%;
`
export const RgbDisplay = styled.div`   
    display: flex;
    gap: 10px;
    justify-content: space-between;
    width: 180px;
`
export const RgbSquare = styled.div`
    border: 1px solid #FFFFFF;
    height: 20px;
    width: 20px;
    background-color: ${props => `rgba(${props.$bgCol[0]},${props.$bgCol[1]},${props.$bgCol[2]},0.8)`};
`
export const ButtonContainer = styled.div`
    display: flex;
    gap: 24px;
    width: ${props => props.$additionalCtrls ? '424px ' : '200px'};
`