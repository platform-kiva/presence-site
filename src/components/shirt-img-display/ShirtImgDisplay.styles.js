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
    background: ${(props) => `linear-gradient(45deg, rgba(${props.$gradient[0][0]},${props.$gradient[0][1]},${props.$gradient[0][2]},0.8) 0%, rgba(${props.$gradient[1][0]},${props.$gradient[1][1]},${props.$gradient[1][2]},0.8) 100%)`};
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