import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from '../../../media-breakpoints';
import cursorIconFilled from '../../../assets/icons/cursor_filled.png';

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
`
export const ProductContainerTopFold = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 60px;
    height: 100vh;
    justify-content: center;
    position: relative;
    width: 100%;

    @media ${device.laptopL} {
        gap: 80px;
    }
`
export const ProductHolder = styled.div`

    @media ${device.mobileS} {
        height: 260px;
        width: 260px;
    }
    @media ${device.mobileL} {
        height: 270px;
        width: 270px;
    }
    @media ${device.tablet} {
        height: 280px;
        width: 280px;
    }
`
export const PriceAction = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const Price = styled.h1`
    font-family: 'Roboto Condensed', sans-serif;;
    font-size: 54px;
    text-shadow: ${props => 
        `3px 3px 1px rgba(${props.$accentCol}, 0.67)`
    };
    
    @media ${device.tablet} {
        font-size: 72px;
    }
    @media ${device.laptopL} {
        font-size: 81px;
    }
`
export const DescriptionContainer = styled.div`
    color: #FFFFFF;
    font-size: 24px;
    margin-bottom: 50px;
    max-width: 420px;
    width: 95%;

    ul {
        margin: 0;
    }

    @media ${device.mobileS} {
        li {
            margin-top: 5px;
            font-size: 16px;
        }
    }
    @media ${device.laptopL} {
        font-size: 80px;
    }
`
export const CustomGradientContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: 0.4s;
`
export const GradientBG = styled(motion.div)`
    background: ${(props) =>
        props.$startColor && props.$endColor 
        ? `linear-gradient(
            45deg,
            rgba(
                ${props.$startColor[0]},
                ${props.$startColor[1]},
                ${props.$startColor[2]},
                0.8) 0%,
            rgba(
                ${props.$endColor[0]},
                ${props.$endColor[1]},
                ${props.$endColor[2]},
                0.8) 100%)`
        : undefined};
    height: 100%;
    position: fixed;
    transition: background-color 1s ease;
    width: 100%;
    z-index: -99;
`
export const CustomControlsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    width: 100%;

    @media ${device.tablet} {
        margin-top: 182px;
    }
`
export const RgbDisplayContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;
    height: 50px;
    justify-content: center;

    @media ${device.mobileS} {
        flex-direction: column;
    }
    @media ${device.mobileL} {
        flex-direction: row;
    }
`
export const RgbDisplay = styled.div`
    display: flex;
    gap: 10px;
`
export const RgbSquare = styled.div`
    border: 1px solid #FFFFFF;
    height: 20px;
    width: 20px;
    background-color: ${props => props.$bgCol};
`
export const CustomizationLabel = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 50px 0px;
    width: 100%;

    h3 {
        text-align: center;
    }

    @media ${device.mobileS} {
        h3 {
            width: 90%;
        }    
    }
`
export const PriceActionCustomContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;
    width: 100%;

    .back-btn {
        cursor: url(${cursorIconFilled}) 15 15, auto;
    }
`
export const SizeSelectionContainer = styled.div`
    align-items: center;
    display: flex;
    height: 155px;
`
export const SizeBackBtnContainer = styled.div`
    width: 100%;
`
export const CustomizeBtnsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    margin-top: 20px;
    max-width: 404px;
    width: 80%;

    @media ${device.tablet} {
        flex-direction: row;
    }
`
export const CustomizeBtnContainer = styled.div`
    width: 100%;
`
export const PromptContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    padding: 0px 20px;
    width: calc(100% - 40px);
`
export const ShirtImgDisplayContainer = styled.div`
    height: 550px;
    width: 550px;

    @media (max-width: 668px) {
        height: 100%;
        width: 100%;
    }

    @media (min-width: 668px) {
        margin-bottom: 50px;
    }
`
