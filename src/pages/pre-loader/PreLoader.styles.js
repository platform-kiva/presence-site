import styled from "styled-components";
import { motion } from "framer-motion";
import cursorIconFilled from '../../assets/icons/cursor_filled.png';

export const PreLoaderContainer = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100%;
`
export const BannerContainer = styled(motion.div)`
    cursor: url(${cursorIconFilled}) 15 15, auto;
`
export const GradientBG = styled.div`
    background: linear-gradient(
        45deg,
        rgba(219,120,212,0.8) 0%,
        rgba(32,172,232,0.8) 100%
    );
    height: 100%;
    position: fixed;
    width: 100%;
    z-index: -100;
`