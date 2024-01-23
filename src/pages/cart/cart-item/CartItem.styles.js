import styled from "styled-components";
import { device } from '../../../media-breakpoints'

export const CartItemImgContainer = styled.div`
    width: 250px; 

    @media ${device.laptopL} {
        width: 350px;
    }
`