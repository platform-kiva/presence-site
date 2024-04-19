import styled from "styled-components";
import { device } from "../../media-breakpoints";

export const CheckoutContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`
export const CheckoutHeaderContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 500;

    @media ${device.laptopL} {
        max-width: 1440px;
    }
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