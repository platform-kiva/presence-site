import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from '../../media-breakpoints';

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
    flex-direction: column;
    gap: 24px;
    height: 100vh;
    justify-content: end;
    padding-bottom: 50px;
    width: 100vw;

    @media (min-width: 376px) {
        align-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding-bottom: 0px;
        padding-top: 60px;
    }

    @media (min-width: 900px) {
        gap: 50px;
    }
    
    @media (min-width: 1060px) {
        gap: 60px;
        padding: 0px 120px;
        padding-bottom: 0px;
        padding-top: 60px;
    }
`
export const ProductHolder = styled.div`
    padding: 5px;

    @media ${device.mobileS} {
        height: 160px;
        width: 160px;
    }
    @media (min-width: 510px) {
        height: 180px;
        width: 180px;
    }
    @media ${device.tablet} {
        height: 220px;
        padding: 0px;
        width: 220px;
    }
    @media ${device.laptop} {
        height: 230px;
        width: 230px;
    }
    @media (min-width: 1110px) {
        height: 250px;
        width: 250px;
    }
    @media (min-width: 1250px) {
        height: 280px;
        width: 280px;
    }
`
export const BackgroundHighlight = styled(motion.div)`
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.33) 50%, rgba(255,255,255,0) 100%);
    bottom: 100px;
    height: 1000px;
    position: absolute;
    width: 80%;
    z-index: -99;
`