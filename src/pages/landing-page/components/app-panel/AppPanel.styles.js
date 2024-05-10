import styled from "styled-components";

export const AppPanelContainer = styled.div`
    align-items: center;
    background: ${props => props.$singleLine ? "#FBFBFB" : ""};
    border: ${props => props.$singleLine ? "4px solid #E4E4E4" : ""};
    box-sizing: border-box;
    display: flex;
    height: 350px;
    justify-content: center;
    position: relative;
    width: 350px;
`
export const InfoContainer = styled.div`
    bottom: 44px;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    left: 50%;
    position: absolute;
    transform: translate(-50%);
    width: fit-content;
`
export const Title = styled.h3`
    font-size: 16px;
`
export const ReleaseDateContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 6px;
`
export const ReleaseDate = styled.h4`
    font-size: 12px;
    font-weight: 400;;
`
export const Moon = styled.div`
    border: 2px solid #FFFFFF;
    height: 12px;
    width: 12px;
    border-radius: 12px;
`