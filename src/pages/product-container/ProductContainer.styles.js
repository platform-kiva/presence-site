import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from '../../media-breakpoints'
  
export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`
export const HeaderContainer = styled(motion.div)`
    position: relative;
`
export const CarouselBtnsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 500;
    
    @media ${device.laptopL} {
        max-width: 1440px;
    }
    
`
export const CarouselBtnContainer = styled(motion.div)`

    @media ${device.mobileS} {
        padding: 0px 30px;
    }

    @media ${device.tablet} {
        padding: 0px 50px;
    }

    @media ${device.laptop} {
        padding: 0px 100px;
    }
`
export const NavBtnContainer = styled.div`
    bottom: ${props =>
        props.$isScrolled ? "-102.5px" : "50px"
    };
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    transition: 0.6s ease-in-out;
`