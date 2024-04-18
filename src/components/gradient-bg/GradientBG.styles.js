import styled from "styled-components";

export const GradientBGContainer = styled.div`
  background: ${(props) => `linear-gradient(45deg, rgba(${props.$bg[0][0]},${props.$bg[0][1]},${props.$bg[0][2]},1.0) 0%, rgba(${props.$bg[1][0]},${props.$bg[1][1]},${props.$bg[1][2]},1.0) 100%)`};
  height: 100%;
  position: relative;
  width: 100%;
`
export const DynamicGradientDiv = styled.div`
  background: ${(props) => `linear-gradient(45deg, rgba(${props.$gradient[0][0]},${props.$gradient[0][1]},${props.$gradient[0][2]},1.0) 0%, rgba(${props.$gradient[1][0]},${props.$gradient[1][1]},${props.$gradient[1][2]},1.0) 100%)`};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;