import styled from "styled-components";
import cursorIcon from '../../../assets/icons/cursor.png';
import cursorIconFilled from '../../../assets/icons/cursor_filled.png';

export const PrimaryBtnContainer = styled.button`
    align-items: center;
    background-color: ${props => props.$wasActivated ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.0)"};
    border: 2px solid #FFFFFF;
    border-radius: 50px;
    cursor: ${props => 
        props.$isActive && !props.$wasActivated ? `url(${cursorIconFilled}) 15 15, auto` : `url(${cursorIcon}) 15 15, auto`
    };
    display: flex;
    height: 50px;
    justify-content: center;
    opacity: ${props =>
        props.$isActive ? "1.0" : "0.5"
    };
    transition: 0.4s ease-in-out;
    width: 100%;

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            background-color: ${props => props.$isActive ? "rgba(255, 255, 255, 0.2)" : ""};
            transition: ${props =>
                props.$isActive ? "transition: 0.2s ease-in-out;" : ""
            };
        };
    }
`
export const BtnLabel = styled.h3`
    font-size: 16px;
    padding: 0px 10px;
    text-shadow: ${props => `2px 2px 1px rgba(${props.$accentCol}, 0.67)`};
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
`