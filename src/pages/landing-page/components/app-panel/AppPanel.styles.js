import styled from "styled-components";
import { size } from '../../../../media-breakpoints.js';
import cursorLight from '../../../../assets/icons/cursors/cursor-light.png';
import cursorLightFilled from '../../../../assets/icons/cursors/cursor-filled-light.png';

export const AppPanelContainer = styled.div`
    align-items: center;
    background: ${props => props.$singleLine ? (props.$mode === "light" ? "rgba(251,251,251,0.2)" : "rgba(51,51,51,0.5)") : ""};
    border: ${props => props.$singleLine ? (props.$mode === "light" ?  "4px solid rgba(228,228,228,0.4)" : "4px solid rgba(87,87,87,0.4)") : ""};
    border-radius: 16px;
    box-sizing: border-box;
    cursor: ${props => {
        if (props.$singleLine) {
            return props.$mode === "light" ? `url(${cursorLight}) 15 15, auto` : `url(${cursorLight}) 15 15, auto`;
        } else {
            return props.$mode === "light" ? `url(${cursorLightFilled}) 15 15, auto` : `url(${cursorLightFilled}) 15 15, auto`;
        }
    }};
    display: flex;
    justify-content: center;
    position: relative;

    @media (max-width: 689px) {
        height: 50%;
        width: 50%;
    }
    @media (min-width: 689px) and (max-width: ${size.laptop}) {
        height: 280px;
        width: 280px;
    }
    @media (min-width: ${size.laptop}) {
        height: 350px;
        width: 350px;
    }
`
export const InfoContainer = styled.div`
    bottom: 44px;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    left: 50%;
    pointer-events: none;
    position: absolute;
    transform: translate(-50%);
    width: fit-content;
`
export const Title = styled.h3`
    font-size: 16px;
`
export const ReleaseDateContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 6px;
`
export const ReleaseDate = styled.h4`
    font-size: 12px;
    font-weight: 400;
`
export const Moon = styled.div`
    border: 2px solid #FFFFFF;
    height: 8px;
    width: 8px;
    border-radius: 12px;
`