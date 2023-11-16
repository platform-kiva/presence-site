import styled from "styled-components";
import cursorIconFilled from '../../assets/icons/cursor_filled.png'
import { motion } from "framer-motion";

export const HeaderContainer = styled.div`

    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    position: absolute;
    width: 100%;
    z-index: 1000;

    @media (max-width: 685px) {
        flex-direction: column;
        gap: 24px;
    }
`
export const HeaderBtnContainer = styled(motion.div)`
    cursor: url(${cursorIconFilled}) 15 15, auto;
    display: block;
    height: 20px;
    margin: 0px 120px;
    transform-origin: center;
    transition: 0.6s ease-out;
    width: 20px;
    &:hover {
        transform: scale(1.5);
        transition: 0.6s ease-out;
    }
`
export const LeftHeaderBtnWrapper = styled.div`
    @media (max-width: 685px) {
        order: 2;
    }
`
export const MiddleHeaderComponentWrapper = styled.div`
    @media (max-width: 685px) {
        order: 1;
    }
`
export const RightHeaderBtnWrapper = styled.div`
    @media (max-width: 685px) {
        order: 3;
    }
`