import styled from "styled-components";

export const GradientControlsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    z-index: 500;
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

    @media (max-width: 450px) {
        flex-direction: column;
    }
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
    gap: 12px;
    width: ${props => props.$additionalCtrls ? '424px ' : '200px'};

    @media (max-width: 450px) {
        flex-direction: column;
        width: 80%;
    }
`