import styled from "styled-components";
import cursorLight from '../../../../assets/icons/cursors/cursor-light.png';
import cursorLightFilled from '../../../../assets/icons/cursors/cursor-filled-light.png';
import { device, size } from "../../../../media-breakpoints.js";

export const HeaderContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    position: relative;
    width: 100%;
    z-index: 1000;

    @media (max-width: ${size.tablet}) {
        padding-top: 30px;
    }
`
export const HeaderBtnImgContainer = styled.div`
    align-items: center;
    cursor: ${props =>
        props.$isVisible ? `url(${cursorLightFilled}) 15 15, auto` : `url(${cursorLight}) 15 15, auto`
    };
    display: flex;
    height: 20px;
    justify-content: center;
    opacity: ${props => props.$isVisible ? "1.0" : "0.0"};
    position: relative;
    transition: 0.2s ease-out;

    img {
        width: 20px;
    }
`
export const HeaderBtnContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0px 30px;

    @media (min-width: 550px) {
        padding: 0px 50px;
    }

    @media ${device.tablet} {
        padding: 0px 66.5px;
    }

    @media ${device.laptop} {
        padding: 0px 120px;
    }
`