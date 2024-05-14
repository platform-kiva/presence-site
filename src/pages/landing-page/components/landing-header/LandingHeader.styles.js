import styled from "styled-components";
import cursorLight from '../../../../assets/icons/cursors/cursor-light.png';
import cursorLightFilled from '../../../../assets/icons/cursors/cursor-filled-light.png';

export const LandingHeaderContainer = styled.div`
    align-items: center;
    display: flex;
    height: 144px;
    justify-content: space-between;
    padding: 0px 50px;
    z-index: 100;
`
export const LogoContainer = styled.div`
    height: 56px;
    width: fit-content;

    h1 {
        color: ${props => props.$mode === "light" ? '#FFFFFF' : '#FFFFFF'};
        cursor: url(${props => props.$mode === "light" ? cursorLightFilled : cursorLightFilled}) 15 15, auto;
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
    }

    h3 {
        color: ${props => props.$mode === "light" ? '#FFFFFF' : '#FFFFFF'};
    }

    img {
        height: 24px;
        padding: 2px;
    }

    h3, img {
        &:hover {
            transform: scale(1.25);
            transition: 0.4s;
        }
    }
`
export const SystemModeContainer = styled.div`
    align-items: center;
    border: ${props => props.$mode === "light" ? "2px solid #FFFFFF" : "2px solid #FFFFFF"};
    border-radius: 32px;
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