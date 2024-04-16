import styled from "styled-components";
import { motion } from "framer-motion";

export const PreLoaderContainer = styled.div`
    align-items: center;
    background: linear-gradient(
        45deg,
        rgba(219,120,212,1.0) 0%,
        rgba(32,172,232,1.0) 100%
    );
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100%;
`
export const BannerContainer = styled(motion.div)`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
`