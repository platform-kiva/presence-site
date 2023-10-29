import styled from "styled-components";

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 200vh;
    width: 100vw;
`
export const CarouselBtnsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    z-index: 500;
`
export const CarouselBtnContainer = styled.div`
    padding: 0px 108px;
`
export const ProductViewContainer = styled.div`
    display: flex;
    overflow-x: hidden;
`
export const NavBtnContainer = styled.div`
    bottom: ${props =>
        props.$isScrolled ? "-102.5px" : "50px"
    };
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    transition: 0.6s ease-in-out;
`