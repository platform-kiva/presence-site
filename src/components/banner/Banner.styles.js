import styled from "styled-components";
import { device } from '../../media-breakpoints.js';
import { motion } from "framer-motion";
import cursorLight from '../../assets/icons/cursors/cursor-light.png';
import cursorLightFilled from '../../assets/icons/cursors/cursor-filled-light.png';

export const BannerContainer = styled.div`
    cursor: url(${props => props.$linkTo ? cursorLightFilled : cursorLight }) 15 15, auto;
    position: relative;
    width: fit-content;

    h1 {
        font-size: 30px;
        font-weight: 700;

        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;

        @media ${device.mobileM} {
            font-size: 36px;
        }

        @media ${device.mobileL} {
            font-size: 40px;
        }

        @media ${device.tablet} {
            font-size: 48px;
        }
    }
`
export const LogoTopText = styled(motion.h1)`
    color: rgba(255,255,255,0.2);
    position: absolute;
    top: 0;
    width: fit-content;
`
export const LogoMiddleText = styled(motion.h1)`
    color: rgba(255,255,255,0.8);
`
export const LogoBottomText = styled(motion.h1)`
    color: rgba(255,255,255,0.2);
    position: absolute;
    top: 0;
`