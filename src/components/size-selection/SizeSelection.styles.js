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

    .note {
        font-family: 'Roboto Condensed';
        font-size: 16px;
        text-align: center;
    }
`;
export const SizeChart = styled.table`
    font-family: 'Roboto Condensed';
    background: ${(props) => `linear-gradient(45deg, rgba(${props.$bgA[0][0]},${props.$bgA[0][1]},${props.$bgA[0][2]},0.2) 0%, rgba(${props.$bgB[1][0]},${props.$bgB[1][1]},${props.$bgB[1][2]},0.2) 100%)`};
    font-size: 16px;
    border-collapse: collapse;
    margin: 0 auto;
    width: 100%;

    th, td {
        border: 1px solid #dddddd;
        text-align: center;
        padding: 8px;
    }
`
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
export const StatusContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 8px;
    justify-content: center;
`
export const StatusDot = styled.div`
    border: 1px solid #FFFFFF;
    border-radius: 100px;
    background: ${props => props.$status ? "#3dc45c" : "#d63827"};
    height: 12px;
    width: 12px;
`
export const MultiLineStatusContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`
export const ClaimedDateContainer = styled.div`
    background: ${(props) => `linear-gradient(45deg, rgba(${props.$bgA[0][0]},${props.$bgA[0][1]},${props.$bgA[0][2]},0.2) 0%, rgba(${props.$bgB[1][0]},${props.$bgB[1][1]},${props.$bgB[1][2]},0.2) 100%)`};
    border: 1px solid #FFFFFF;
    border-radius: 4px;
    margin: 10px;
    
    h3 {
        padding: 10px 40px;
    }
`
