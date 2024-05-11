import styled from "styled-components";

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
    height: 100vh;
    position: relative;
    width: 100vw;
`
export const HeaderContainer = styled.div`
    align-items: center;
    display: flex;
    height: 144px;
    justify-content: space-between;
    padding: 0px 50px;
`
export const LogoContainer = styled.div`
    height: 56px;
    width: fit-content;

    h1 {
        color: #1e1e1e;
    }

    img {
        height: 100%;
    }
`
export const NavContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 30px;

    h3 {
        color: #1e1e1e;
    }

    img {
        height: 24px;
    }
`
export const SystemModeContainer = styled.div`
    align-items: center;
    background: #FFFFFF;
    border: 2px solid #1e1e1e;
    border-radius: 32px;
    display: flex;
    height: 32px;
    justify-content: space-evenly;
    width: 100px;

    img {
        height: 16px;
    }

    .active {
        img {
            filter: invert(100%);
        }
    }
    #moon {
        filter: ${props => props.$mode === "dark" ? "100%" : ""}
    }
    #sun {
        filter: ${props => props.$mode === "light" ? "100%" : ""}

    }
`
export const AppsContainer = styled.div`
    display: flex;
    height: fit-content;
`