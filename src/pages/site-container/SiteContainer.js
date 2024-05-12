import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { setDisplayedGradient, setGradient } from "../../store/gradients/gradient.action.js";
import { selectDisplayedGradient, selectGradientA, selectGradientB, selectStatus } from "../../store/gradients/gradient.selector.js";

// styles
import {
    MainContainer,
    OutletContainer,
    MainGradientBGContainer
} from "./SiteContainer.styles.js";

// components
import GradientBG from '../../components/gradient-bg/GradientBG.js';

export default function SiteContainer() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const status = useSelector(selectStatus);
    const displayedGradient = useSelector(selectDisplayedGradient);
    const gradientA = useSelector(selectGradientA);
    const gradientB = useSelector(selectGradientB);
    
    useEffect(() => {
        if (!gradientA || !gradientB || !displayedGradient || status === null) {
            navigate("/");
        }
        }, [status, displayedGradient, gradientA, gradientB, navigate]);

    useEffect(() => {
        if (status === true) { 
            const interval = setInterval(() => {
                if (displayedGradient === 'A') {
                    dispatch(setGradient('B'));
                    dispatch(setDisplayedGradient('B'));
                } else {
                    dispatch(setGradient('A'));
                    dispatch(setDisplayedGradient('A'));
                }
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [dispatch, status, displayedGradient]);

    return (
        <MainContainer>
            <OutletContainer>
                <Outlet />
            </OutletContainer>
            <MainGradientBGContainer>
                <GradientBG />
            </MainGradientBGContainer>
        </MainContainer>
    )
}
