import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnimation } from 'framer-motion';

// styles
import {
    BannerContainer,
    LogoTopText,
    LogoMiddleText,
    LogoBottomText
} from './Banner.styles.js';

export default function Banner({ label, linkTo=null }) {
    const navigate = useNavigate();
    const controlsTop = useAnimation();
    const controlsMiddle = useAnimation();
    const controlsBottom = useAnimation();
    const [translateY, setTranslateY] = useState(getTranslateY());

    function getTranslateY() {
        const width = window.innerWidth;
        if (width < 376) {
            return -8;
        } else if (width <= 431) {
            return -9.5;
        } else if (width <= 769) {
            return -10.5;
        } else {
            return -13;
        };
    };

    useEffect(() => {
        const handleResize = () => { setTranslateY(getTranslateY()); };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let mounted = true;
        const startAnimations = async () => {
            if (mounted) {
                await controlsMiddle.start({ opacity: 1 });
                await Promise.all([
                    controlsTop.start({ opacity: 1, y: translateY }),
                    controlsBottom.start({ opacity: 1, y: -translateY })
                ]);
            };
        };
        controlsTop.set({ opacity: 0, y: 0 });
        controlsMiddle.set({ opacity: 0 });
        controlsBottom.set({ opacity: 0, y: 0 });
        startAnimations();
        return () => { mounted = false; };
    }, [label, translateY, controlsTop, controlsMiddle, controlsBottom]);

    const handleClick = () => {
        if (linkTo) {
            navigate(linkTo);
        } else {
            return;
        };
    }
    
    return (
        <BannerContainer $label={label} $linkTo={linkTo} onClick={handleClick}>
            <LogoTopText
                animate={controlsTop}
                initial={{ opacity: 0, y: 0 }}
                transition={{ opacity: { duration: 0.5 }, y: { type: "spring", stiffness: 500, damping: 36 } }}
            >
                <em>{label}</em>
            </LogoTopText>
            <LogoMiddleText
                animate={controlsMiddle}
                initial={{ opacity: 0 }}
                transition={{ duration: 1.0 }}
            >
                <em>{label}</em>
            </LogoMiddleText>
            <LogoBottomText
                animate={controlsBottom}
                initial={{ opacity: 0, y: 0 }}
                transition={{ opacity: { duration: 0.5 }, y: { type: "spring", stiffness: 500, damping: 36 } }}
            >
                <em>{label}</em>
            </LogoBottomText>
        </BannerContainer>
    );
};