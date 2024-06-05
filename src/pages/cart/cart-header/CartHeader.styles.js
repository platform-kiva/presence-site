import styled from "styled-components";
import { device, size } from "../../../media-breakpoints.js";

export const CartHeaderContainer = styled.div`
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