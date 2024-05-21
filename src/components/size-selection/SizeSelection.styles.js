import styled from "styled-components";
import { device } from "../../media-breakpoints.js";
import cursorLightFilled from '../../assets/icons/cursors/cursor-filled-light.png';

export const ActionContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 14.4px;

    @media ${device.tablet} {
        gap: 20px;
    }
`;
export const SizesContainer = styled.div`
    display: flex;
    gap: 14.4px;
    justify-content: center;
    width: 100%;

    @media ${device.tablet} {
        gap: 20px;
    }
`;
export const ProductInfoButtons = styled.div`
    display: flex;
    gap: 16px;
    padding-top: 10px;
    justify-content: space-evenly;
    width: 100%;

    h3 {
        cursor: url(${cursorLightFilled}) 15 15, auto;
        font-size: 14px;
        text-decoration: underline;
    }
`;
export const SizeGuideContainer = styled.div`
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: fit-content;
    width: 100%;

    .size-chart {
        font-family: 'Roboto Condensed';
        font-size: 12px;
        border-collapse: collapse;
        margin: 0 auto; /* Center the table */
        width: 100%; /* Adjust width to fit content */
    }

    .size-chart th, .size-chart td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    .note {
        font-family: 'Roboto Condensed';
        font-size: 14px;
        text-align: center;
    }
`;
export const SizeGuideTableContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;
export const BulletText = styled.ul`
    color: #FFFFFF;

    li {
        padding: 5px 0px;
    }
`;

export const ProductInfoContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
`;
