import styled from "styled-components";
import { device } from "../../media-breakpoints";

export const CartProductsViewContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;

    h2 {
        padding-top: 50px;
    }
`
export const CartItemsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-flow: wrap;
    gap: 20px;
    justify-content: center;
    margin: 50px 0px;

    @media ${device.mobileL} {
        gap: 100px;
        padding: 50px;
    }
`
export const ProductHolder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
`
export const CartItemDetails = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
`
export const CartItemContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 10px;
    position: relative;
`