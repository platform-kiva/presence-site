import styled from "styled-components";
import cursorLight from '../../assets/icons/cursors/cursor-light.png';

import night from './assets/night2.png';
import day from './assets/day2.png';

export const AboutContainer = styled.div`
    /* background: ${props => props.$mode === "light" ? '#FFFFFF' : '#1E1E1E'}; */
    background-image: ${props => props.$mode === "light" ? `url(${day})` : `url(${night})`};
    cursor: url(${props => props.$mode === "light" ? cursorLight : cursorLight}) 15 15, auto;
    height: 100vh;
    position: relative;
    width: 100vw;
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
`