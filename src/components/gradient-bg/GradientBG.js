import { useSelector } from "react-redux";
import { selectDisplayedGradient, selectGradientA } from "../../store/gradients/gradient.selector.js";
import { selectGradientB } from "../../store/gradients/gradient.selector.js";
import { motion } from 'framer-motion'; 

// styles
import {
    GradientBGContainer,
    DynamicGradientDiv
} from "./GradientBG.styles.js";

export default function GradientBG({ setGradient = null, shirtDisplay = false }) {
    const displayedGradient = useSelector(selectDisplayedGradient);
    const gradientA = useSelector(selectGradientA);
    const gradientB = useSelector(selectGradientB);

    return (
        <>
            {!setGradient ?
                <>
                    {gradientA && gradientB &&
                        <GradientBGContainer $bg={displayedGradient === 'A' ? gradientA : gradientB} $shirtDisplay={shirtDisplay}>
                            <motion.div
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: displayedGradient === 'A' ? 1 : 0 }}
                                transition={{ duration: 1.0 }}
                            >
                                <DynamicGradientDiv $gradient={gradientA} $shirtDisplay={shirtDisplay}/>
                            </motion.div>
                            <motion.div
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: displayedGradient === 'B' ? 1 : 0 }}
                                transition={{ duration: 1.0 }}
                            >
                                <DynamicGradientDiv $gradient={gradientB}$shirtDisplay={shirtDisplay}/>
                            </motion.div>
                        </GradientBGContainer>
                    }
                </>
                :
                <GradientBGContainer $bg={setGradient} $shirtDisplay={shirtDisplay}>
                    <motion.div
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: displayedGradient === 'A' ? 1 : 0 }}
                        transition={{ duration: 1.0 }}
                    >
                        <DynamicGradientDiv $gradient={setGradient} $shirtDisplay={shirtDisplay}/>
                    </motion.div>
                    <motion.div
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: displayedGradient === 'B' ? 1 : 0 }}
                        transition={{ duration: 1.0 }}
                    >
                        <DynamicGradientDiv $gradient={setGradient} $shirtDisplay={shirtDisplay}/>
                    </motion.div>
                </GradientBGContainer>
            }
        </>
    );
}