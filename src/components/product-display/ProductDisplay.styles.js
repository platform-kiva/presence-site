import styled from "styled-components";
import { motion } from "framer-motion";
import cursorIcon from '../../assets/icons/cursor.png';

export const ProductDisplayContainer = styled.div`
    background-color: pink;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 60px;
    justify-content: center;
    position: relative;
    z-index: 10;
`
export const ProductImgContainer = styled(motion.div)`
    background-color: red;
    align-items: center;
    cursor: url(${cursorIcon}) 15 15, auto;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
`
export const ProductShadow = styled(motion.div)`
    background-color: rgba(0,0,0,0.175);
    border-radius: 50%;
    display: ${props => props.$isVisible ? "block" : "none"};
    filter: blur(7px);
    height: 27px;
    width: 210px;
`