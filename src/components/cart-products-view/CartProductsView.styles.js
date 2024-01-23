import styled from "styled-components";

export const CartProductsViewContainer = styled.div`
    height: fit-content;
    text-align: center;
    width: 100vw;

    h2 {
        padding-top: 50px;
    }
`
export const CartItemsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-flow: wrap;
    gap: 100px;
    justify-content: center;
    padding: 50px 0px;
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