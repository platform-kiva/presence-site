import styled from "styled-components";
import { device } from '../../media-breakpoints'

export const BannerContainer = styled.div`
    position: relative;
`
export const LogoTopText = styled.h1`
    color: rgba(255,255,255,0.2);
    font-weight: 500;
    position: absolute;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

    @media ${device.mobileS} {
        font-size: 30px;
        top: -8px;
    }

    @media ${device.mobileM} {
        font-size: 36px;
        top: -9.5px;
    }

    @media ${device.mobileL} {
        font-size: 40px;
        top: -10.5px;
    }

    @media ${device.tablet} {
        font-size: 48px;
        top: -13px;
    }
`
export const LogoMiddleText = styled.h1`
    color: rgba(255,255,255,0.8);
    font-weight: 500;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

    @media ${device.mobileS} {
        font-size: 30px;
    }
    @media ${device.mobileM} {
        font-size: 36px;
    }
    @media ${device.mobileL} {
        font-size: 40px;
    }
    @media ${device.tablet} {
        font-size: 48px;
    }
`
export const LogoBottomText = styled.h1`
    color: rgba(255,255,255,0.2);
    font-weight: 500;
    position: absolute;
    
    -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

    @media ${device.mobileS} {
        font-size: 30px;
        top: 8px;
    }
    @media ${device.mobileM} {
        font-size: 36px;
        top: 9.5px;
    }
    @media ${device.mobileL} {
        font-size: 40px;
        top: 10.5px;
    }
    @media ${device.tablet} {
        font-size: 48px;
        top: 13px;
    }
`