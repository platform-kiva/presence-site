import styled from "styled-components";
import cursorIconFilled from '../../assets/icons/cursor_filled.png'

export const OrderCompleteContainer = styled.div`
    align-items: center;
    cursor: url(${cursorIconFilled}) 15 15, auto;
    display: flex;
    height: 100vh;
    justify-content: center;
    text-align: center;
    width: 100vw;
`
export const OrderCompleteContent = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const HeaderText = styled.h1`
    font-size: 36px
`
export const Instructions = styled.h2`
    font-size: 20px;
    font-weight: 400;
`