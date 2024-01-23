import styled from "styled-components";
import cursorIcon from '../../../assets/icons/cursor.png'
import cursorIconFilled from '../../../assets/icons/cursor_filled.png'
import { device } from "../../../media-breakpoints";

export const PrimaryBtnContainer = styled.button`
    align-items: center;
    background-color: transparent;
    border: 2px solid #FFFFFF;
    border-radius: 50px;
    cursor: ${props =>
        props.$isActive ? `url(${cursorIconFilled}) 15 15, auto` : `url(${cursorIcon}) 15 15, auto`
    };
    display: flex;
    height: 50px;
    justify-content: center;
    opacity: ${props =>
        props.$isActive ? "1.0" : "0.5"
    };
    transition: 0.4s ease-in-out;
    width: 100%;
    &:hover {
        background-color: ${props =>
            props.$isActive ? "rgba(255,255,255,0.2)" : ""
        };
        transition: ${props =>
            props.$isActive ? "transition: 0.2s ease-in-out;" : ""
        };
    };

    @media ${device.mobileS} {
        height: 36px;
    }
    @media ${device.mobileL} {
        height: 42px;
    }
    @media ${device.tablet} {
        height: 50px;
    }
`
export const BtnLabel = styled.h3`
    font-size: 16px;
    text-shadow: ${props => `2px 2px 1px rgba(${props.$accentCol}, 0.67)`};
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    
    @media ${device.mobileS} {
        font-size: 11.52px;
    }
    @media ${device.mobileL} {
        font-size: 13.44px;
    }
    @media ${device.tablet} {
        font-size: 16px;
    }
`