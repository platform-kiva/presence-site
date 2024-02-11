import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from '../../media-breakpoints'
  
export const ProductsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
    width: 100%;
`
export const HeaderContainer = styled(motion.div)`
    position: fixed;
    width: 100%;
    z-index: 500;

    @media ${device.laptopL} {
        max-width: 1440px;
    }
`