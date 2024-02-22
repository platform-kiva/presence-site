import styled from "styled-components";
import { size } from "../../media-breakpoints";

export const CartProductsViewContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;

    h2 {
        padding: 0px 30px;
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
    padding: 20px;

    @media (max-width: ${size.mobileL}) {
        padding: 0px;
    }
`
export const ProductHolder = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`
export const ShirtImgContainer = styled.div`
    align-items: center;
    display: flex;
    height: 300px;
    justify-content: center;
    width: 300px;

    @media (max-width: 300px) {
        width: 100%;
    }
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