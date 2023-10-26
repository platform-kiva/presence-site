import styled from "styled-components"

export const BannerContainer = styled.div`
    @media only screen and (max-width: 400px) {
        gap: 14px;
        width: 108px;
    }
    @media only screen and (min-width: 401px) {
        gap: 21px;
        width: 162px;
    }
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
`
export const BannerStampContainer = styled.div`
    @media only screen and (max-width: 400px) {
        gap: 20px;
        line-height: 24px;
        width: 108px;
    }
    @media only screen and (min-width: 401px) {
        gap: 30px;
        line-height: 36px;
        width: 162px;
    }
    align-items: center;
    display: flex;
    justify-content: space-between;
`
export const StampSmallText = styled.h3`
    @media only screen and (max-width: 400px) {
        font-size: 16px;
    }
    @media only screen and (min-width: 401px) {
        font-size: 24px;
    }
    font-weight: 500;
`
export const StampLargeText = styled.h2`
    @media only screen and (max-width: 400px) {
        font-size: 24px;
        line-height: 24px;
    }
    @media only screen and (min-width: 401px) {
        font-size: 36px;
        line-height: 36px;
    }
    font-weight: 600;
`
export const BannerDay = styled.h2`
    @media only screen and (max-width: 400px) {
        font-size: 24px;
        line-height: 24px;
    }
    @media only screen and (min-width: 401px) {
        font-size: 36px;
        line-height: 36px;
    }
    font-weight: 600;
    bottom: 0;
    position: absolute;
`