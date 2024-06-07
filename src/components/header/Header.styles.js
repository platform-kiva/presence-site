import styled from "styled-components";
import { motion } from "framer-motion";
import { device, size } from "../../media-breakpoints.js";

export const HeaderContainer = styled.div`
    /* background-color: red; */
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    position: relative;
    width: 100%;
    z-index: 1000;

    @media (max-width: ${size.tablet}) {
        margin-top: 30px;
    }
`
export const HeaderBtnContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;

    @media (max-width: 769px) {
        padding: 20px 50px;
    }

    @media ${device.tablet} {
        padding: 20px 66.5px;
    }

    @media ${device.laptop} {
        padding: 20px 120px;
    }
`
export const CartBtnContainer = styled(motion.div)`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0px 30px;
    position: absolute;
    right: -3px;
    top: 64px;

    @media (max-width: 769px) {
        padding: 20px 50px;
    }

    @media ${device.tablet} {
        padding: 20px 66.5px;
    }

    @media ${device.laptop} {
        padding: 20px 120px;
    }
`