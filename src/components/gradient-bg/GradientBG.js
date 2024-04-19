import { useSelector } from "react-redux";
import { selectDisplayedGradient, selectGradientA } from "../../store/gradients/gradient.selector";
import { selectGradientB } from "../../store/gradients/gradient.selector";
import { motion } from 'framer-motion'; 

// styles
import {
    GradientBGContainer,
    DynamicGradientDiv
} from "./GradientBG.styles";

export default function GradientBG({ setGradient = null}) {
    const displayedGradient = useSelector(selectDisplayedGradient);
    const gradientA = useSelector(selectGradientA);
    const gradientB = useSelector(selectGradientB);

    return (
        <>
            {!setGradient ?
                <>
                    {gradientA && gradientB &&
                        <GradientBGContainer $bg={displayedGradient === 'A' ? gradientA : gradientB}>
                            <motion.div
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: displayedGradient === 'A' ? 1 : 0 }}
                                transition={{ duration: 1.0 }}
                            >
                                <DynamicGradientDiv $gradient={gradientA} />
                            </motion.div>
                            <motion.div
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: displayedGradient === 'B' ? 1 : 0 }}
                                transition={{ duration: 1.0 }}
                            >
                                <DynamicGradientDiv $gradient={gradientB} />
                            </motion.div>
                        </GradientBGContainer>
                    }
                </>
                :
                <GradientBGContainer $bg={setGradient}>
                    <motion.div
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: displayedGradient === 'A' ? 1 : 0 }}
                        transition={{ duration: 1.0 }}
                    >
                        <DynamicGradientDiv $gradient={setGradient} />
                    </motion.div>
                    <motion.div
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: displayedGradient === 'B' ? 1 : 0 }}
                        transition={{ duration: 1.0 }}
                    >
                        <DynamicGradientDiv $gradient={setGradient} />
                    </motion.div>
                </GradientBGContainer>
            }
        </>
    );
}