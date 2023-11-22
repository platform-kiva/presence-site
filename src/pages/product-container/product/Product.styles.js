import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from '../../../media-breakpoints';

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 100vw;
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
    padding-top: 100px;
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

    @media ${device.laptop} {
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
    justify-content: center;
    margin-top: 60px;
    width: 40vw;

    @media ${device.laptop} {
        height: 100vh;
    }

`
export const ProductImgCarousel = styled.div`
    height: 500px;
    width: 500px;

    @media ${device.laptopL} {
        height: 667px;
        width: 667px;
    }
`
export const PriceAction = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
`
export const Price = styled.h1`
    font-size: 81px;
    text-shadow: ${props => 
        `3px 3px 1px rgba(${props.$accentCol}, 0.67)`
    };

    @media ${device.laptopL} {
        font-size: 108px;
    }
`
export const DescriptionContainer = styled.div`
    color: #FFFFFF;
    font-size: 18px;
    width: 300px;

    @media ${device.laptopL} {
        font-size: 24px;
        width: 400px;
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
    gap: 48px;
    margin-top: 200px;
`
export const RgbDisplayContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;
`
export const RgbSquare = styled.div`
    height: 20px;
    width: 20px;
    background-color: red;
`
export const CustomizeBtnsContainer = styled.div`
    display: flex;
    gap: 24px;
    justify-content: center;
    width: 404px;
`
export const CustomizeBtnContainer = styled.div`
    width: 190px;
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