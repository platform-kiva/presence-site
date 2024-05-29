import styled from "styled-components";
import { device } from "../../../media-breakpoints";

export const CounterContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 14.4px;
    justify-content: center;
    width: 100%;

    @media ${device.tablet} {
        gap: 20px;
    }
`