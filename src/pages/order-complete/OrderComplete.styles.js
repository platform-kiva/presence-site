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
export const GradientBG = styled.div`
    background:
        linear-gradient(45deg,
            rgba(
                219,
                120,
                212,
                0.8) 0%,
            rgba(
                32,
                172,
                232,
                0.8) 88%)
    ;
    height: 100%;
    position: fixed;
    width: 100%;
    z-index: -100;
`