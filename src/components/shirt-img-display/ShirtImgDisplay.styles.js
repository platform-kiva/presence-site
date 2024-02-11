import styled from "styled-components";
import { motion } from "framer-motion";

export const ShirtImgDisplayContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    margin-bottom: 50px;
    position: relative;

    @media (max-width: 668px) {
        margin: 20px;
        margin-bottom: 50px;
    }
`
export const GradientBox = styled(motion.div)`
    height: 8.89%;
    position: absolute;
    top: 25%;
    width: 29.93%;
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