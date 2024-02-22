import styled from "styled-components";
import cursorIconFilled from '../../../../assets/icons/cursor_filled.png';

export const PaymentInitializerContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const CheckoutBtnContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 40px;
    width: 200px;

    .back-btn {
        cursor: url(${cursorIconFilled}) 15 15, auto;
        text-decoration: underline;
    }
`