import styled from "styled-components";
import { motion } from "framer-motion";
import { device, size } from '../../../media-breakpoints';
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
    margin-top: 180px;
    width: 100%;

    @media (max-width: ${size.mobileM}) {
        margin-top: 95px;
    }
    @media (min-width: ${size.mobileM}) and (max-width: ${size.mobileL}) {
        margin-top: 110px;
    }
    @media (min-width: ${size.mobileL}) and (max-width: ${size.tablet}) {
        margin-top: 120px;
    }
`
export const RgbDisplayContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    height: 55px;
    width: 100%;

`
export const RgbDisplay = styled.div`   
    display: flex;
    gap: 10px;
    justify-content: space-between;
    max-width: 180px;
    width: 100%;
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
        width: 90%;
    }

    @media (max-width: ${size.tablet}) {
        padding: 40px 0px;
    }
`
export const PriceActionCustomContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 205px;
    justify-content: start;
    width: 100%;

    @media (max-width: ${size.mobileL}) {
        height: 259px;
        justify-content: center;
    }
    @media (min-width: ${size.mobileL}) and (max-width: 500px) {
        height: 259px;
        justify-content: center;
    }
    @media (min-width: 500px) and (max-width: ${size.tablet}) {
        height: 185px;
    }

    .back-btn {
        cursor: url(${cursorIconFilled}) 15 15, auto;
        margin-top: 20px;
        text-decoration: underline;
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
    flex-direction: row;
    gap: 24px;
    justify-content: center;
    max-width: 404px;
    width: 80%;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`
export const CustomizeBtnContainer = styled.div`
    width: 100%;
`
export const PromptContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 17px;
    justify-content: center;
    padding: 0px 20px;
    width: calc(100% - 40px);
`
export const ShirtImgDisplayContainer = styled.div`
    height: 550px;
    width: 550px;

    @media (max-width: 600px) {
        height: 100%;
        padding-bottom: 50px;
        width: 100%;
    }
`
