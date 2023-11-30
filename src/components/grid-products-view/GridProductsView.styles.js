import styled from "styled-components";
import { motion } from "framer-motion";

export const GridProductsViewContainer = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    overflow: hidden;
    width: 100vw;
`
export const GridItemsContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 48px;
    justify-content: center;
    margin-top: 100px;

    @media (max-width: 935px) {
        flex-flow: wrap;
    }
`
export const ProductHolder = styled.div`
    justify-content: center;
    display: flex;
    position: relative;
`
export const BackgroundHighlight = styled(motion.div)`
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.33) 50%, rgba(255,255,255,0) 100%);
    bottom: 100px;
    height: 1000px;
    position: absolute;
    width: 80%;
    z-index: -99;
`