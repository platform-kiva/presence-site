import styled from "styled-components";
import cursorIconFilled from '../../assets/icons/cursor_filled.png';

export const OrderCompleteContainer = styled.div`
    align-items: center;
    cursor: url(${cursorIconFilled}) 15 15, auto;
    display: flex;
    height: 100vh;
    justify-content: center;
    text-align: center;
    width: 100%;
`
export const OrderCompleteContent = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: fit-content;
`
export const Message = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`
export const BtnContainer = styled.div`
    max-width: 500px;
    width: 90%;
`