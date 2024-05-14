import styled from "styled-components";
import night from '../../assets/night.png';
import day from '../../assets/day.png';

export const ModeBGContainer = styled.div`
    background-image: ${props => props.$mode === "light" ? `url(${day})` : `url(${night})`};
    opacity: ${(props) => props.$shirtDisplay ? '0.67' : '1.0'};
    top: 0;
    height: 100vh;
    position: fixed;
    width: 100vw;
    z-index: -500;
`
export const DynamicBGDiv = styled.div`
    background-image: ${props => props.$mode === "light" ? `url(${day})` : `url(${night})`};
    width: 100%;
    height: 100%;
    left: 0;
    opacity: ${(props) => props.$shirtDisplay ? '0.67' : '1.0'};
    top: 0;
`;