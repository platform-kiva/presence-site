import styled from "styled-components";
import cursorLightFilled from '../../../assets/icons/cursors/cursor-filled-light.png';

export const SizeBtnContainer = styled.div`
    align-items: center;
    background-color: ${props =>
        props.$selectedSize === props.$size ? "rgba(255,255,255,0.2)" : ""
    };
    border: 2px solid #FFFFFF;
    border-radius: 50px;
    cursor: url(${cursorLightFilled}) 15 15, auto;
    display: flex;
    height: 50px;
    justify-content: center;
    opacity: ${props =>
        props.$selectedSize === props.$size ? "1.0" : "0.5"
    };
    transition: 0.2s ease-in-out;
    width: 50px;

    &:hover {
        opacity: 1.0;
        transform: scale(1.1);
        transition: transform 0.2s ease-in-out;
    };
`
export const BtnLabel = styled.h3`
    font-size: 20px;
    text-shadow: ${props => `2px 2px 1px rgba(${props.$accentCol}, 0.67)`};
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
`