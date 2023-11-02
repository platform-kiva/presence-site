import styled from "styled-components";

export const CheckoutContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
`
export const BotNavBtnContainer = styled.div`
    position: fixed;
    bottom: 50px;
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