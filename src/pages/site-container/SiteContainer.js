import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { setDisplayedGradient, setGradient } from "../../store/gradients/gradient.action";

import { OutletContainer } from "./SiteContainer.styles";

// components
import GradientBG from '../../components/gradient-bg/GradientBG';
import { selectDisplayedGradient, selectGradientA, selectGradientB, selectStatus } from "../../store/gradients/gradient.selector";

export default function SiteContainer() {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);
    const displayedGradient = useSelector(selectDisplayedGradient);
    const gradientA = useSelector(selectGradientA);
    const gradientB = useSelector(selectGradientB);
    const navigate = useNavigate();

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
        <>
            <OutletContainer>
                <Outlet />
            </OutletContainer>
            
            <GradientBG />
        </>
    )
}
