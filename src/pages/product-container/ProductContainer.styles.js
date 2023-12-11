import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from '../../media-breakpoints'
  
export const ProductsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
    width: 100vw;
`
export const HeaderContainer = styled(motion.div)`
    position: fixed;
    width: 100%;
    z-index: 500;

    @media ${device.laptopL} {
        max-width: 1440px;
    }
`
export const CarouselBtnsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    left: 50%;
    position: absolute;
    top: 50vh;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 500;
    
    @media ${device.laptopL} {
        max-width: 1440px;
    }
    
`
export const CarouselBtnContainer = styled(motion.div)`

    @media ${device.mobileS} {
        padding: 0px 21px;
    }

    @media (min-width: 550px) {
        padding: 0px 38px;
    }

    @media ${device.tablet} {
        padding: 0px 50px;
    }

    @media ${device.laptop} {
        padding: 0px 104px;
    }
`
export const NavBtnContainer = styled.div`
    bottom: 50px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    transition: 0.6s ease-in-out;
`