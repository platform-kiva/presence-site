import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const BotNavBtnContainer = styled.div`
    backdrop-filter: blur(10px);
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.25) 100% );
    bottom: 0;
    display: flex;
    height: 150px;
    justify-content: center;
    position: fixed;
    width: 100vw;
`
export const CartOverviewContainer = styled.div`
`
export const GradientBG = styled.div`
    background: ${props =>
        `linear-gradient(45deg,
            rgba(
                ${props.$products[props.$productInd].botGradient[0]},
                ${props.$products[props.$productInd].botGradient[1]},
                ${props.$products[props.$productInd].botGradient[2]},
                0.8) 0%,
            rgba(
                ${props.$products[props.$productInd].topGradient[0]},
                ${props.$products[props.$productInd].topGradient[1]},
                ${props.$products[props.$productInd].topGradient[2]},
                0.8) 88%)`
    };
    height: 100%;
    position: fixed;
    width: 100%;
    z-index: -100;
`