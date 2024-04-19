import styled from "styled-components";
import { motion } from "framer-motion";

export const ShirtDisplayContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: relative;
    padding-bottom: 50px;
`
export const ShirtImgDisplayContainer = styled(motion.div)`
    height: 300px;
    width: 300px;
`
export const ProductShadow = styled(motion.div)`
    background-color: rgba(0,0,0,0.175);
    border-radius: 50%;
    bottom: 0px;
    display: ${props => props.$isVisible ? "block" : "none"};
    filter: blur(7px);
    height: 6%;
    position: absolute;
    width: 58.33%;
`