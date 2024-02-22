import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const CartOverviewContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`
export const CostContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
`
export const CostRowContainer = styled.div`
    display: flex;
    gap: 100px;
    justify-content: space-between;
`
export const GradientBG = styled.div`
    background: ${props =>
        `linear-gradient(45deg,
            rgba(
                ${props.$cartItems[props.$cartInd].botGradient[0]},
                ${props.$cartItems[props.$cartInd].botGradient[1]},
                ${props.$cartItems[props.$cartInd].botGradient[2]},
                0.8) 0%,
            rgba(
                ${props.$cartItems[props.$cartInd].topGradient[0]},
                ${props.$cartItems[props.$cartInd].topGradient[1]},
                ${props.$cartItems[props.$cartInd].topGradient[2]},
                0.8) 88%)`
    };
    height: 100%;
    position: fixed;
    width: 100%;
    z-index: -100;
`