import styled from "styled-components";
import { motion } from "framer-motion";

export const ShirtImgDisplayContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 20px;
    position: relative;
`
export const GradientBox = styled(motion.div)`
    height: 8.75%;
    position: absolute;
    top: 25%;
    width: 26%;
    z-index: 99;

    img {
        height: 40%;
        left: 50%;
        position: relative;
        transform: translate(-50%, -50%);
        top: 55%;
    }
`
export const ShirtMockupContainer = styled.div`
    height: 100%;
    width: 100%;
`