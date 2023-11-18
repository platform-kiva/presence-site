import styled from "styled-components"
import { device } from "../../media-breakpoints"

export const CustomShirtContainer = styled.div`
    position: relative;
    margin-bottom: 200px;
    @media ${device.laptopL} {
        margin-bottom: 300px;
    }
`
export const DesignAlphaImgContainer = styled.div`
    // background-color: pink;
    position: absolute;
    left: 50%;
    top: 40px;
    transform: translateX(-50%);
    width: 80px;
    z-index: 200;
`
export const CustomGradient = styled.div`
    background: ${(props) =>
        props.$topGradient && props.$botGradient
        ? `linear-gradient(
            rgba(
                ${props.$topGradient[0]},
                ${props.$topGradient[1]},
                ${props.$topGradient[2]},
                0.5) 0%,
            rgba(
                ${props.$botGradient[0]},
                ${props.$botGradient[1]},
                ${props.$botGradient[2]},
                0.5) 100%)`
        : undefined};
    position: absolute;
    height: 20px;
    left: 50%;
    top: 70px;
    transform: translateX(-50%);
    width: 80px;
    z-index: 100;
`
export const CustomShirtImgContainer = styled.div`
    width: 250px; 

    @media ${device.laptopL} {
        width: 350px;
    }
`