import styled from "styled-components";
import cursorIconFilled from '../../assets/icons/cursor_filled.png';

export const CartContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`
export const TopNavBtnContainer = styled.div`
    position: absolute;
    top: 50px;
    z-index: 500;
`
export const CartItemDisplayContainer = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    overflow-x: hidden;
    position: absolute;
    width: 100vw;
`
export const CarouselBtnContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 300px;
    right: 36px;
    top: 120px;
    width: 300px;
    z-index: 500;
`
export const CartItemLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const CartItemDetailsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`
export const DetailsLabel = styled.h2`
    cursor: url(${cursorIconFilled}) 15 15, auto;
    font-size: 18px;
`
export const CartItemIncDecContainer = styled.div`
    display: flex;
    gap: 20px;
    z-index: 500;
`
export const IndDecLabel = styled.h3`
    cursor: url(${cursorIconFilled}) 15 15, auto;
    font-size: 16px;
    margin-top: 10px;
    text-decoration: underline;
`
export const CartQuantity = styled.h1`
    color: rgba(0,0,0,0.1);
    font-size: 48px;
    margin-top: 20px;
    margin-bottom: 6px;
`
export const CartItemShadow = styled.div`
    background-color: rgba(0,0,0,0.15);
    border-radius: 50%;
    filter: blur(7px);
    height: 30px;
    width: 250px;
`
export const BotNavBtnContainer = styled.div`
    position: absolute;
    bottom: 50px;
`