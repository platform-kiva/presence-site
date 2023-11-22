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
    cursor: url(${cursorIconFilled}) 15 15, auto;
    height: 280px;
    width: 280px;
`
export const ProductShadow = styled(motion.div)`
    background-color: rgba(0,0,0,0.15);
    border-radius: 50%;
    filter: blur(7px);
    height: 27px;
    width: 210px;
`