import styled from "styled-components"
import { device } from "../../media-breakpoints"

export const ActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14.4px;

    @media ${device.tablet} {
        gap: 20px;
    }
`
export const SizesContainer = styled.div`
    display: flex;
    gap: 14.4px;

    @media ${device.tablet} {
        gap: 20px;
    }
`