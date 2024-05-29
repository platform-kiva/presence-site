import styled from "styled-components";
import cursorLight from '../../../assets/icons/cursors/cursor-light.png';
import cursorLightFilled from '../../../assets/icons/cursors/cursor-filled-light.png';

export const CircleBtnContainer = styled.div`
    align-items: center;
    background: ${props => props.$bg ? "rgba(255,255,255,0.2)" : "" };
    border: 2px solid #FFFFFF;
    border-radius: 50px;
    cursor: ${props => props.$isActive ? `url(${cursorLightFilled}) 15 15, auto` : `url(${cursorLight}) 15 15, auto`};
    display: flex;
    height: 100%;
    justify-content: center;
    transition: 0.2s ease-in-out;
    width: 100%;

    img {
        height: 50%;
        width: 50%;
    }

    &:hover {
        background: ${props => props.$isActive ? "rgba(255,255,255,0.2)" : "" };
        transform: scale(${props => props.$isActive ? '1.1' : '1.0'});
        transition: transform 0.2s ease-in-out;
    };
`
export const BtnLabel = styled.h3`
    font-size: 20px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
`