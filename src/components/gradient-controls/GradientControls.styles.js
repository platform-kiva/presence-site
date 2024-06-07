import styled from "styled-components";

export const GradientControlsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    z-index: 1000;
`
export const CustomizationLabel = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 10px 0px;

    h3 {
        text-align: center;
        width: 90%;
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

    @media (max-width: 468px) {
        flex-direction: column;
    }
`
export const RgbDisplay = styled.div`   
    display: flex;
    gap: 0px;
    justify-content: space-between;
    width: 200px;
`
export const ColorValContainer = styled.div`
    align-items: baseline;
    display: flex;
    gap: 2px;
    width: 25%;

    h4 {
        color: rgba(255,255,255,0.5);
    }

    h3 {
        font-size: 20px;
        width: fit-content;
    }

    h4 {
        font-size: 15px;
    }
`
export const RgbSquare = styled.div`
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 2px;
    height: 20px;
    width: 20px;
    background-color: ${props => `rgba(${props.$bgCol[0]},${props.$bgCol[1]},${props.$bgCol[2]},0.8)`};
`
export const ButtonContainer = styled.div`
    display: flex;
    gap: 12px;
    width: ${props => props.$additionalCtrls ? '100% ' : '320px'};

    @media (max-width: 468px) {
        flex-direction: column;

    }
`
export const WelcomeMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 24px;

    h3 {
        max-width: 320px;
        text-align: center;
        font-weight: "400";
    }
`