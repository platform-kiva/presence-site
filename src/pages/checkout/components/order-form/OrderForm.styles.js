import styled from "styled-components";
import cursorIconFilled from '../../../../assets/icons/cursor_filled.png';

export const OrderFormContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-bottom: 150px;
    margin-top: 50px;
    max-width: 800px;
    padding-top: 50px;
    width: 100%;
`
export const FormContainer = styled.div`
    align-items: center;
    background-color: #FFF;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
`
export const StripeHeader = styled.div`
    align-items: center;
    display: flex;
    gap: 3px;
    margin-top: 30px;

    h3 {
        color: #b8b8b8;
    }

    img {
        height: 40px;
    }
`
export const EmailInputContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const EmailLabel = styled.label`
    color: #30313d;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 0.93rem;
    font-weight: 400;
    margin-bottom: 0.25rem;
`
export const EmailInput = styled.input`
    background-color: #FFFFFF;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02);
    color: rgb(48, 49, 61);
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    padding: 0.75rem;
    transition: 0.15s ease, border 0.15s ease, box-shadow 0.15s ease, color 0.15s ease;
    width: calc(100% - 1.6rem);

    &:focus {
    outline-width: 0;
}
`
export const OrderFormForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 50px 0px;
    width: 100%;
`
export const CheckoutBtn = styled.button`
    background-color: transparent;
    border: 2px solid #B4B4B4;
    border-radius: 5px;
    color: #454545;
    cursor: url(${cursorIconFilled}) 15 15, auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
    font-size: 14px;
    height: 44px;
    width: 100%;
`