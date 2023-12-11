import styled from "styled-components";
import { motion } from "framer-motion";
import cursorIconFilled from '../../assets/icons/cursor_filled.png';

export const ProductDisplayContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 60px;
    justify-content: center;
    position: relative;
`
export const ProductImgContainer = styled(motion.div)`
    align-items: center;
    cursor: url(${cursorIconFilled}) 15 15, auto;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
`
export const ProductShadow = styled(motion.div)`
    background-color: rgba(0,0,0,0.12);
    border-radius: 50%;
    filter: blur(7px);
    height: 27px;
    width: 210px;
    display: ${props =>
        props.$isVisible ? "block" : "none"
    };
`