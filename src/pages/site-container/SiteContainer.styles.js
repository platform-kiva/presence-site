import styled from "styled-components";
import cursorLight from '../../assets/icons/cursors/cursor-light.png';

export const MainContainer = styled.div`
    cursor: url(${cursorLight}) 15 15, auto;
`
export const OutletContainer = styled.div`
    height: 100%;
    position: absolute;
    width: 100%;
`
export const MainGradientBGContainer = styled.div`
    height: 100vh;
    position: fixed;
    width: 100vw;
    z-index: -500;
`