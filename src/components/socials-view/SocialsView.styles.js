import styled from "styled-components";
import { device } from '../../media-breakpoints';
import { Link } from 'react-router-dom';
import cursorIconFilled from '../../assets/icons/cursor_filled.png';

export const SocialsViewContainer = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;

    @media ${device.mobileS} {
        gap: 40px;
    }
    @media ${device.mobileM} {
        gap: 50px;
    }
    @media ${device.mobileL} {
        gap: 60px;
    }
`
export const SocialLink = styled(Link)`
    cursor: url(${cursorIconFilled}) 15 15, auto;
`
export const SocialIconImgContainer = styled.div`
    cursor: url(${cursorIconFilled}) 15 15, auto;
    transition: 0.5s ease-in-out;

    @media ${device.mobileS} {
        height: 40px;
        width: 40px;
    }
    @media ${device.mobileM} {
        height: 50px;
        width: 50px;
    }
    @media ${device.mobileL} {
        height: 60px;
        width: 60px;
    }

    &:hover {
        transform: scale(1.1);
        transition: 1s ease-in-out;
    }
`