import styled, { css } from "styled-components";
import cursorIcon from '../../../assets/icons/cursor.png'
import cursorIconFilled from '../../../assets/icons/cursor_filled.png'
import { device } from "../../../media-breakpoints";

export const CarouselBtnContainer = styled.div`
    align-items: center;
    background-color: ${props =>
        props.$filled ? "rgba(255,255,255,0.2)" : ""
    };
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 50px;
    cursor: ${props =>
        props.$active ? `url(${cursorIconFilled}) 15 15, auto` : `url(${cursorIcon}) 15 15, auto`
    };
    display: flex;
    height: 50px;
    justify-content: center;
    opacity: ${props =>
        props.$active ? "1.0" : "0.25"
    };
    transition: 0.8s;
    width: 50px;
    &:hover {
        background-color: rgba(255,255,255,0.2);
        transform: ${props =>
            props.$active ? "scale(1.15)" : ""
        };
        transition: 0.8s ease-in-out;
    }

    ${({ $isParentHovered }) => $isParentHovered && css`
        background-color: rgba(255,255,255,0.2);
        transform: ${props =>
            props.$active ? "scale(1.15)" : ""
        };
        transition: 0.8s ease-in-out;
    `}

    @media ${device.mobileS} {
        height: 36px;
        width: 36px;
    }
    @media ${device.mobileL} {
        height: 42px;
        width: 42px;
    }
    @media ${device.tablet} {
        height: 50px;
        width: 50px;
    }
`
export const CarouselBtnIcon = styled.img`
    height: 20px;
    width: 20px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

    @media ${device.mobileS} {
        height: 14.4px;
        width: 14.4px;
    }
    @media ${device.mobileL} {
        height: 16.8px;
        width: 16.8px;
    }
    @media ${device.tablet} {
        height: 20px;
        width: 20px;
    }
`