import styled from "styled-components";
import { motion } from "framer-motion";
import cursorIconFilled from '../../assets/icons/cursor_filled.png';

export const PreLoaderContainer = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`
export const PreLoaderBannerContainer = styled(motion.div)`
    cursor: url(${cursorIconFilled}) 15 15, auto;
`