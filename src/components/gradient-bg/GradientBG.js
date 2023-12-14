import { motion } from "framer-motion";

// styles
import {
    GradientBGContainer,
    DynamicGradientDiv
} from "./GradientBG.styles";

export default function GradientBG({ currentGradient, nextGradient }) {
    return (
        <GradientBGContainer>
            <DynamicGradientDiv $gradient={currentGradient} />
            {nextGradient && (
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                >
                <DynamicGradientDiv gradient={nextGradient} />
                </motion.div>
            )}
        </GradientBGContainer>
    )
}
