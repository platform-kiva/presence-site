import styled from "styled-components";
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
    border-radius: 16px;
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
        width: 100%
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
export const AppsContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    gap: 16px;
    height: fit-content;
    max-width: 1080px;
    width: 100%;

    @media (max-width: 568px) {
        flex-direction: column;
        padding: 40px 10px;
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
export const AppContainer = styled.div`
    flex: 1;
    max-width: 33%;
    box-sizing: border-box;
    position: relative;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 568px) {
        max-width: 100%;
        width: 100%;
        /* flex: 0 0 100%; */
        flex-direction: column;
    }

    @media (min-width: 568px) and (max-width: 968px) {
        max-width: 50%;
        flex: 0 0 50%;
    }
`

