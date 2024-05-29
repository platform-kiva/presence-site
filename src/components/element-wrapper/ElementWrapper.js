import { motion } from 'framer-motion';
import { useFadeInUpAnimation } from '../../hooks/fadeUpAndIn.js';

export default function ElementWrapper({ children, delay=0.2 }) {
    const motionPropsWithDelay = useFadeInUpAnimation(delay);

    return (
        <motion.div { ...motionPropsWithDelay } style={{ width: "100%", height: "100%" }}>
            { children }
        </motion.div>
    )
}
