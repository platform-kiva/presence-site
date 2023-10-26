import styled from "styled-components";
import cursorIcon from '../../../assets/icons/cursor.png'
import cursorIconFilled from '../../../assets/icons/cursor_filled.png'

export const CarouselBtnContainer = styled.div`
    align-items: center;
    background-color: ${props =>
        props.filled ? "rgba(255,255,255,0.2)" : ""
    };
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 30px;
    cursor: ${props =>
        props.active ? `url(${cursorIconFilled}) 15 15, auto` : `url(${cursorIcon}) 15 15, auto`
    };
    display: flex;
    height: 50px;
    justify-content: center;
    opacity: ${props =>
        props.active ? "1.0" : "0.25"
    };
    transition: 0.8s;
    width: 50px;
    &:hover {
        background-color: rgba(255,255,255,0.2);
        transform: ${props =>
            props.active ? "scale(1.15)" : ""
        };
        transition: 0.8s ease-in-out;
      }
`
export const CarouselBtnIcon = styled.img`
    height: 20px;
    width: 20px;
`