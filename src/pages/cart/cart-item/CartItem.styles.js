import styled from "styled-components";
import { device } from '../../../media-breakpoints'

export const CartItemImg = styled.img`
    width: 250px; 

    @media ${device.laptopL} {
        width: 350px;
    }
`