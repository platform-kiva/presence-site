import styled from "styled-components";
import cursorLight from '../../assets/icons/cursors/cursor-light.png';
import cursorLightFilled from '../../assets/icons/cursors/cursor-filled-light.png';

export const AboutContainer = styled.div`
    cursor: url(${props => props.$mode === "light" ? cursorLight : cursorLight}) 15 15, auto;
    height: 100vh;
    position: relative;
    width: 100vw;
`
export const SocialsContainer = styled.div`
    display: flex;
    gap: 16px;
    padding: 0px 48px;
    padding-bottom: 24px;
    width: fit-content;
    
    a {
        cursor: url(${props => props.$mode === "light" ? cursorLight : cursorLight}) 15 15, auto;
    }

    img {
        cursor: url(${props => props.$mode === "light" ? cursorLightFilled : cursorLightFilled}) 15 15, auto;
        height: 32px;
        padding: 2px;
        transition: 0.4s;
    }

    img {
        &:hover {
            transform: scale(1.25);
            transition: 0.4s;
        }
    }
`
export const AboutDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0px 50px;
`
export const AboutText = styled.h3`
    color: ${props => props.$mode === "light" ? '#FFFFFF' : '#FFFFFF'};
    
    font-weight: 300;
    font-size: 16px;
    max-width: 300px;

    a {
        color: #FFFFFF;
        cursor: url(${props => props.$mode === "light" ? cursorLightFilled : cursorLightFilled}) 15 15, auto;
    }
`