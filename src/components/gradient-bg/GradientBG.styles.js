import styled from "styled-components";

export const GradientBGContainer = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: -500;
`
export const DynamicGradientDiv = styled.div`
  background: ${(props) => props.$gradient};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
`;