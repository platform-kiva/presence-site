import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { BannerContainer, LogoMiddleText, LogoBottomText, LogoTopText } from './Banner.styles.js';

export default function Banner({ label }) {
    const controlsTop = useAnimation();
    const controlsMiddle = useAnimation();
    const controlsBottom = useAnimation();

    useEffect(() => {
        const startAnimations = async () => {
            await controlsMiddle.start({ opacity: 1 });
            await Promise.all([
                controlsTop.start({ opacity: 1, y: -13 }),
                controlsBottom.start({ opacity: 1, y: 13 })
            ]);
        };
        controlsTop.set({ opacity: 0, y: 0 });
        controlsMiddle.set({ opacity: 0 });
        controlsBottom.set({ opacity: 0, y: 0 });
        startAnimations();
    }, [label, controlsTop, controlsMiddle, controlsBottom]);

    return (
        <BannerContainer>
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
                transition={{ duration: 0.8 }}
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
}
