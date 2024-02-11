import styled from "styled-components";
import cursorIconFilled from '../../../assets/icons/cursor_filled.png'
import { device } from "../../../media-breakpoints";

export const SizeBtnContainer = styled.div`
    align-items: center;
    background-color: ${props =>
        props.$selectedSize === props.$size ? "rgba(255,255,255,0.2)" : ""
    };
    border: 2px solid #FFFFFF;
    border-radius: 50px;
    cursor: url(${cursorIconFilled}) 15 15, auto;
    display: flex;
    height: 42px;
    justify-content: center;
    opacity: ${props =>
        props.$selectedSize === props.$size ? "1.0" : "0.5"
    };
    transition: 0.2s ease-in-out;
    width: 42px;

    &:hover {
        opacity: 1.0;
        transform: scale(1.1);
        transition: transform 0.2s ease-in-out;
    };

    @media ${device.tablet} {
        height: 50px;
        width: 50px;
    }
`
export const BtnLabel = styled.h3`
    font-size: 16.8px;
    text-shadow: ${props => `2px 2px 1px rgba(${props.$accentCol}, 0.67)`};
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

    @media ${device.tablet} {
        font-size: 20px;
    }
`