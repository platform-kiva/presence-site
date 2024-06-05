import styled from 'styled-components';
import cursorLightFilled from '../../../../assets/icons/cursors/cursor-filled-light.png';

export const HeaderIconContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
`;
export const ImgContainer = styled.div`
    align-items: center;
    /* background-color: pink; */
    display: flex;
    height: ${props => props.$iconSize}px;
    justify-content: center;
    width: ${props => props.$iconSize}px;

    h4 {
        font-size: 11px;
        padding-top: 8px;
        position: absolute;
        transition: transform 0.4s ease-out;
    }

    img {
        height: 100%;
        width: 100%;
    }
`
export const BGDiv = styled.div`
    background-color: rgba(255, 255, 255, 0);
    border-radius: 100px;
    height: 100%;
    position: absolute;
    top: 0;
    transition: 0.4s ease-out;
    width: 100%;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        cursor: url(${cursorLightFilled}) 15 15, auto;
        transform: scale(2.25);
        transition: 0.4s ease-out;
    }
`