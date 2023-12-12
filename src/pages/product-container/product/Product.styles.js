import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from '../../../media-breakpoints';

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
    width: 100vw;

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
export const ProductContainerBotFold = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    position: relative;
    width: 100vw;

    @media ${device.mobileS} {
        flex-direction: column;
    }

    @media ${device.tablet} {
        flex-direction: row;
    }

    @media ${device.laptopL} {
        left: 50%;
        max-width: 1440px;
        transform: translateX(-50%);
    }
`
export const BotFoldCol = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 50%;
    justify-content: center;
    position: relative;
    width: 100%;

    @media ${device.laptop} {
        height: 100%;
    }
`
export const ProductImgCarousel = styled.div`
    bottom: 20px;
    position: absolute;
    width: 240px;

    @media ${device.tablet} {
        bottom: unset;
        height: auto;
        margin-top: 80px;
        right: 20px;
        width: 80%;
    }

    @media ${device.laptop} {
        height: auto;
        max-width: 420px;
        width: 80%;
    }
`
export const PriceAction = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: absolute;
    top: 20px;

    @media ${device.tablet} {
        top: unset;
        height: auto;
        left: 20px;
        margin-top: 80px;
        width: 80%;
    }
`
export const Price = styled.h1`
    font-family: 'Roboto Condensed', sans-serif;;
    font-size: 81px;
    text-shadow: ${props => 
        `3px 3px 1px rgba(${props.$accentCol}, 0.67)`
    };

    @media ${device.mobileS} {
        font-size: 54px;
    }
    @media ${device.tablet} {
        font-size: 72px;
    }
    @media ${device.laptopL} {
        font-size: 108px;
    }
`
export const DescriptionContainer = styled.div`
    color: #FFFFFF;
    font-size: 24px;
    margin-top: 5px;
    width: 300px;

    ul {
        margin: 0;
    }

    @media ${device.mobileS} {
        li {
            font-size: 14px;
        }
    }
    @media ${device.laptopL} {
        font-size: 24px;
    }
`
export const CustomGradientContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 100vh;
    overflow: hidden;
    position: relative;
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
    position: absolute;
    transition: background-color 1s ease;
    width: 100%;
    z-index: -99;
`
export const CustomControlsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 132px;
    width: 100vw;

    @media ${device.mobileS} {
        margin-top: 80px;
    }
    @media ${device.mobileM} {
        margin-top: 96px;
    }
    @media ${device.tablet} {
        margin-top: 132px;
    }
`
export const RgbDisplayContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;

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
    padding-bottom: 24px;
    padding-top: 36px;
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
export const SizeSelectionContainer = styled.div`
    align-items: center;
    display: flex;
    height: 155px;
`
export const SizeBackBtnContainer = styled.div`
    width:100%;
`
export const CustomizeBtnsContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 24px;
    justify-content: center;
    margin-top: 20px;
    width: 404px;

    @media ${device.mobileS} {
        flex-direction: column;
    }
`
export const CustomizeBtnContainer = styled.div`
    @media ${device.mobileS} {
        width: 180px;
    }
    @media ${device.mobileL} {
        width: 210px;
    }
    @media ${device.tablet} {
        width: 250px;
    }
`
export const CustomMockupContainer = styled.div`
    overflow: hidden;
    position: relative;
`
export const DesignOverlayContainer = styled.div`
    height: 210px;
    left: 50%;
    position: absolute;
    transform: translate(-50%);
    top: 99px;
    z-index: 100;
`
export const GradientBox = styled(motion.div)`
    background-color: orange;
    height: 60px;
    left: 50%;
    position: absolute;
    transform: translate(-50%);
    top: 170px;
    width: 220px;
    z-index: 99;
`
export const ShirtMockupContainer = styled(motion.div)`
    height: 675px;
    width: 675px;
`