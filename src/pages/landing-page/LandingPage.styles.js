import styled from "styled-components";
import cursorDark from '../../assets/icons/cursors/cursor-dark.png';
import cursorLight from '../../assets/icons/cursors/cursor-light.png';

// APP LOGOS
export const App1LogoContainer = styled.div`
    align-items: center;
    background: linear-gradient(
        45deg,
        rgba(219,120,212,1.0) 0%,
        rgba(32,172,232,1.0) 100%
    );

    border: 4px solid rgba(255,255,255,0.5);
    box-sizing: border-box;
    display: flex;
    height: 100%;
    justify-content: center;
    position: absolute;
    transition: 0.5s;
    width: 100%;

    h1 {
        color: #FFFFFF;
        font-size: 36px;
    }

    .gradientBG {
        height: 100%;
        opacity: 0.0;
        position: absolute;
        transition: 0.8s;
        width: 100%;
    }

    .texts-container {
        position: relative;

        #top {
            opacity: 0.2;
            position: absolute;
            top: -8px;
            transition: 0.5s;
        }
        #mid {
            opacity: 0.8;
            position: relative;
        }
        #bot {
            opacity: 0.2;
            bottom: -8px;
            position: absolute;
            transition: 0.5s;
        }
    }
    &:hover {
        border: 12px solid rgba(255,255,255,0.25);
        transition: 0.5s;

        .gradientBG {
            background: linear-gradient(
                45deg,
                rgba(219,120,212,1.0) 0%,
                rgba(32,172,232,1.0) 100%
            );
            opacity: 1.0;
            transition: 0.8s;
        }

        .texts-container {
            #top {
                transition: 0.5s;
                top: 0px;
            }
            #bot {
                bottom: 0px;
                transition: 0.5s;
            }
        }
    }
`
export const LandingPageContainer = styled.div`
    background: ${props => props.$mode === "light" ? '#FFFFFF' : '#1E1E1E'};
    cursor: url(${props => props.$mode === "light" ? cursorDark : cursorLight}) 15 15, auto;
    height: 100vh;
    position: relative;
    width: 100vw;
`
export const AppsContainer = styled.div`
    display: flex;
    height: fit-content;
`


