import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from '../../../media-breakpoints';
import cursorIconFilled from '../../../assets/icons/cursor_filled.png';

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 200vh;
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
export const ProductImgContainer = styled(motion.img)`
    cursor: url(${cursorIconFilled}) 15 15, auto;
    height: 300px;

    @media ${device.laptopL} {
        height: 400px;
    }
`
export const ProductShadow = styled(motion.div)`
    background-color: rgba(0,0,0,0.15);
    border-radius: 50%;
    filter: blur(7px);
    height: 30px;
    width: 225px;

    @media ${device.laptopL} {
        height: 40px;
        width: 300px;
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
        `3px 3px 1px rgba(${props.$accentCol}, 0.67)`
    };

    @media ${device.laptopL} {
        font-size: 108px;
    }
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

    @media ${device.laptopL} {
        font-size: 24px;
        width: 400px;
    }
`