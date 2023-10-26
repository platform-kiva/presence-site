import styled from "styled-components";
import { motion } from "framer-motion";
import cursorIconFilled from '../../../assets/icons/cursor_filled.png'

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 200vh;
    min-width: 100vw;
    position: absolute;
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
`
export const ProductImgContainer = styled(motion.img)`
    cursor: url(${cursorIconFilled}) 15 15, auto;
    height: 300px;
`
export const ProductShadow = styled.div`
    background-color: rgba(0,0,0,0.15);
    border-radius: 50%;
    filter: blur(7px);
    height: 30px;
    width: 225px;
`
export const ProductContainerBotFold = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 100vw;
`
export const BotFoldCol = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 100vh;
    justify-content: center;
    width: 50vw;
`
export const ProductImgCarousel = styled.div`
    height: 500px;
    width: 500px;
`
export const ProductCarouselImgContainer = styled.img`
    height: 100%;
    position: relative;
    width: 100%;
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
        `3px 3px 1px rgba(${props.accentCol}, 0.67)`
    };
`
export const ActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const SizesContainer = styled.div`
    display: flex;
    gap: 20px;
`
export const DescriptionContainer = styled.div`
    color: #FFFFFF;
    font-size: 18px;
    width: 300px;
`