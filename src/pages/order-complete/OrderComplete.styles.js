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
export const GradientBG = styled.div`
    background: // add state gradient
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
                0.8) 100%)
    ;
    height: 100%;
    position: fixed;
    width: 100%;
    z-index: -100;
`