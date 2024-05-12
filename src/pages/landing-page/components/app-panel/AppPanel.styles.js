import styled from "styled-components";
import cursorDark from '../../../../assets/icons/cursors/cursor-dark.png';
import cursorDarkFilled from '../../../../assets/icons/cursors/cursor-filled-dark.png';
import cursorLight from '../../../../assets/icons/cursors/cursor-light.png';
import cursorLightFilled from '../../../../assets/icons/cursors/cursor-filled-light.png';

export const AppPanelContainer = styled.div`
    align-items: center;
    background: ${props => props.$singleLine ? (props.$mode === "light" ? "#FBFBFB" : "#333333") : ""};
    border: ${props => props.$singleLine ? (props.$mode === "light" ?  "4px solid #E4E4E4" : "4px solid #575757") : ""};
    box-sizing: border-box;
    cursor: ${props => {
        if (props.$singleLine) {
        return props.$mode === "light" ? `url(${cursorDark}) 15 15, auto` : `url(${cursorLight}) 15 15, auto`;
        } else {
        return props.$mode === "light" ? `url(${cursorDarkFilled}) 15 15, auto` : `url(${cursorLightFilled}) 15 15, auto`;
        }
    }};
    display: flex;
    height: 350px;
    justify-content: center;
    position: relative;
    width: 350px;

    
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