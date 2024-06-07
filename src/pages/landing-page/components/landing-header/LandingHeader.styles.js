import styled from "styled-components";
import cursorLight from '../../../../assets/icons/cursors/cursor-light.png';
import cursorLightFilled from '../../../../assets/icons/cursors/cursor-filled-light.png';
import { size } from "../../../../media-breakpoints";

export const LandingHeaderContainer = styled.div`   
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    z-index: 100;

    @media (max-width: 568px) {
        flex-direction: column;
        gap: 20px;
        justify-content: center;
    }

    @media (min-width: 568px) {
        padding: 30px 30px;
    }
    @media (min-width: 668px) and (max-width: 1168px) {
        padding: 50px 50px;
    }
    @media (min-width: 1168px) {
        padding: 50px 0px;
    }
`
export const LogoContainer = styled.div`
    width: fit-content;

    h1 {
        color: ${props => props.$mode === "light" ? '#FFFFFF' : '#FFFFFF'};
        cursor: url(${props => props.$mode === "light" ? cursorLightFilled : cursorLightFilled}) 15 15, auto;
        font-size: 36px;
        padding: 20px 0px;

        @media (min-width: ${size.mobileL}) and (max-width: ${size.tablet}) {
            font-size: 36px;
        }
        @media (min-width: 568px) {
            padding: 0;
        }
    }
    img {
        height: 100%;
    }
`
export const NavContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 30px;

    a {
        cursor: url(${props => props.$mode === "light" ? cursorLight : cursorLight}) 15 15, auto;
    }

    h3, img {
        cursor: url(${props => props.$mode === "light" ? cursorLightFilled : cursorLightFilled}) 15 15, auto;
        transition: 0.4s;

        &:hover {
            transform: scale(1.25);
            transition: 0.4s;
        }
    }
    
    h3 {
        color: ${props => props.$mode === "light" ? '#FFFFFF' : '#FFFFFF'};
        width: fit-content;
    }

    img {
        height: 24px;
        padding: 2px;
    }
    
    @media (max-width: 568px) {
        gap: 30px;
        flex-flow: column;
    }
    @media (min-width: 568px) {
        gap: 24px;
    }
`
export const SocialsContainer = styled.div`
    display: flex;
    gap: 30px;
`
export const SystemModeContainer = styled.div`
    align-items: center;
    border: ${props => props.$mode === "light" ? "2px solid #FFFFFF" : "2px solid #FFFFFF"};
    border-radius: 32px;
    box-sizing: border-box;
    display: flex;
    height: 32px;
    justify-content: space-evenly;
    position: relative;
    width: 100px;
`
export const BackgroundDiv = styled.div`
    background: ${props => props.$mode === "light" ? "#FFFFFF" : "#FFFFFF"};
    border-radius: 32px;
    height: 100%;
    left: 0;
    width: 50%;
    position: absolute;
    top: 0;
    transition: transform 0.3s ease;
    transform: ${props => props.$mode === "light" ? "translateX(100%)" : "translateX(0)"};
`;

export const MoonIcon = styled.img`
    cursor: pointer;
    filter: invert(${props => props.$mode === "light" ? "100%" : "0%"});
    z-index: 10;
    width: 16px;
    
`;
export const SunIcon = styled.img`
    cursor: pointer;
    filter: invert(${props => props.$mode === "light" ? "0%" : ""});
    z-index: 10;
    width: 16px;
`;