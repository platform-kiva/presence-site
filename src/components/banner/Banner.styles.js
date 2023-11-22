import styled from "styled-components";

export const BannerContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 14px;
    position: relative;
    width: 108px;

    @media (min-width: 650px) {
        gap: 21px;
        width: 162px;
    }
`
export const BannerStampContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    line-height: 24px;
    width: 108px;

    @media (min-width: 650px) {
        gap: 30px;
        line-height: 36px;
        width: 162px;
    }
    
`
export const StampSmallText = styled.h3`
    font-size: 16px;
    font-weight: 500;
    
    @media (min-width: 650px)  {
        font-size: 24px;
    }
`
export const StampLargeText = styled.h2`
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    
    @media (min-width: 650px)  {
        font-size: 36px;
        line-height: 36px;
    }
`
export const BannerDay = styled.h2`
    bottom: 0;
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    position: absolute;

    @media (min-width: 650px)  {
        font-size: 36px;
        line-height: 36px;
    }
`