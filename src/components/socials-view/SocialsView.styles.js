import styled from "styled-components";
import { device } from '../../media-breakpoints.js';
import { Link } from 'react-router-dom';
import cursorLightFilled from '../../assets/icons/cursors/cursor-filled-light.png';

export const SocialsViewContainer = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    flex-direction: column;
    gap: 80px;
    justify-content: center;
    width: 100%;

    @media ${device.mobileM} {
        flex-direction: row;
        gap: 60px;
    }
`
export const SocialLink = styled(Link)`
    cursor: url(${cursorLightFilled}) 15 15, auto;
`
export const SocialIconImgContainer = styled.div`
    cursor: url(${cursorLightFilled}) 15 15, auto;
    height: 60px;
    transition: 0.5s ease-in-out;
    width: 60px;

    &:hover {
        transform: scale(1.1);
        transition: 1s ease-in-out;
    }
`