import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`
export const OutletContainer = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
`
export const GradientBG = styled(motion.div)`
  background: linear-gradient(
    45deg,
    rgba(219,120,212,0.8) 0%,
    rgba(32,172,232,0.8) 100%
  );
  background: ${(props) =>
    props.$products && props.$products[props.$productInd] 
      ? `linear-gradient(45deg,
          rgba(
              ${props.$products[props.$productInd].botGradient[0]},
              ${props.$products[props.$productInd].botGradient[1]},
              ${props.$products[props.$productInd].botGradient[2]},
              0.8) 0%,
          rgba(
              ${props.$products[props.$productInd].topGradient[0]},
              ${props.$products[props.$productInd].topGradient[1]},
              ${props.$products[props.$productInd].topGradient[2]},
              0.8) 100%)`
      : undefined};
  height: 100%;
  position: fixed;
  transition: background-color 1s ease;
  width: 100%;
`