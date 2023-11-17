import styled from "styled-components";

export const LoadingIconContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  background: linear-gradient(
    45deg,
      rgba(219, 120, 212, 0.8) 0%,
      rgba(32, 172, 232, 0.8) 100%)
  ;
  width: 100vw;
`;

export const Icon = styled.div`
  animation: spin 1s ease-in-out infinite;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  border-top-color: #FFFFFF;
  display: inline-block;
  height: 50px;
  width: 50px;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
