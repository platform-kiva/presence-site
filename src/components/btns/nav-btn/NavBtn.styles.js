import styled from "styled-components";
import cursorIconFilled from '../../../assets/icons/cursor_filled.png'

export const NavBtnContainer = styled.div`
    align-items: center;
    cursor: url(${cursorIconFilled}) 15 15, auto;
    display: flex;
    justify-content: space-between;
    transition: 0.8s ease-in-out;
    width: 324px;
    z-index: 500;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

    &:hover {
        width: 424px;
    }

    @media (max-width: 550px) {
        justify-content: center;
        gap: 24px;
    }
`
export const SideIcon1 = styled.img`
    opacity: 0.4;
    transition: 0.8s ease-in-out;
    width: 16px;
    &:hover {
        transition: 0.8s ease-in-out;
        opacity: 1.0;
    }
`
export const SideIcon2 = styled.img`
    display: none;
    opacity: 0.4;
    transition: 0.8s ease-in-out;
    width: 16px;
    &:hover {
        transition: 0.8s ease-in-out;
        opacity: 1.0;
    }

    @media (min-width: 360px) {
        display: block;
    }
`
export const SideIcon3 = styled.img`
    display: none;
    opacity: 0.4;
    transition: 0.8s ease-in-out;
    width: 16px;
    &:hover {
        transition: 0.8s ease-in-out;
        opacity: 1.0;
    }

    @media (min-width: 510px) {
        display: block;
    }
`