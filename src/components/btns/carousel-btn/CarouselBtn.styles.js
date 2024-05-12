import styled, { css } from "styled-components";
import cursorLight from '../../../assets/icons/cursors/cursor-light.png';
import cursorLightFilled from '../../../assets/icons/cursors/cursor-filled-light.png';
import { size } from "../../../media-breakpoints.js";

export const CarouselBtnContainer = styled.div`
    align-items: center;
    background-color: ${props =>
        props.$filled ? "rgba(255,255,255,0.2)" : ""
    };
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 50px;
    cursor: ${props =>
        props.$active ? `url(${cursorLightFilled}) 15 15, auto` : `url(${cursorLight}) 15 15, auto`
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

    @media (max-width: ${size.mobileS}) {
        height: 36px;
        width: 36px;
    }
    @media (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
        height: 42px;
        width: 42px;
    }
    @media (min-width: ${size.tablet}) {
        height: 50px;
        width: 50px;
    }
`
export const CarouselBtnIcon = styled.img`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

    @media (max-width: ${size.mobileS}) {
        height: 14.4px;
        width: 14.4px;
    }
    @media (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
        height: 16.8px;
        width: 16.8px;
    }
    @media (min-width: ${size.tablet}) {
        height: 20px;
        width: 20px;
    }
`