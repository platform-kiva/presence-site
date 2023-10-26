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
    &:hover {
        width: 424px;
    }
`

export const SideIcons = styled.img`
    opacity: 0.4;
    transition: 0.8s ease-in-out;
    width: 16px;
    &:hover {
        transition: 0.8s ease-in-out;
        opacity: 1.0;
    }
`