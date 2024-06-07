import styled from "styled-components";
import cursorLight from '../../assets/icons/cursors/cursor-light.png';
import cursorLightFilled from '../../assets/icons/cursors/cursor-filled-light.png';

export const AboutContainer = styled.div`
    align-items: center;
    cursor: url(${props => props.$mode === "light" ? cursorLight : cursorLight}) 15 15, auto;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
    width: 100vw;
`
export const LandingHeaderContainer = styled.div`
    max-width: 1080px;
    width: 100%;
`
export const AboutContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    max-width: 1080px;
    width: 100%;

    @media (max-width: 568px) {
        align-items: center;
        margin-top: 30px;
    }

    @media (max-width: 668px) {
        padding: 30px 30px;
    }
    @media (min-width: 668px) and (max-width: 1168px) {
        padding: 50px 50px;
    }
    @media (min-width: 1168px) {
        padding: 50px 0px;
    }
`
export const SocialsContainer = styled.div`
    display: flex;
    gap: 16px;
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

    @media (max-width: 668px) {
        max-width: 400px;
    }
`