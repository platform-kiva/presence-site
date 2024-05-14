import React from "react";
import { useSelector } from "react-redux";
import { selectSystemMode } from "../../../../store/system/system.selector.js";
import { motion, AnimatePresence } from 'framer-motion'; 

// styles
import {
    ModeBGContainer,
    DynamicBGDiv
} from "./ModeBG.styles.js";

export default function ModeBG() {
    const systemMode = useSelector(selectSystemMode);

    return (
        <AnimatePresence>
            {systemMode && (
                <ModeBGContainer $mode={systemMode}>
                    <AnimatePresence>
                        {systemMode === 'light' && (
                            <motion.div
                                key="light"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, when: 'beforeChildren' }}
                                exit={{ opacity: 0, when: 'beforeChildren' }}
                                transition={{ duration: 1.0 }}
                            >
                                <DynamicBGDiv $mode={systemMode}/>
                            </motion.div>
                        )}
                        {systemMode === 'dark' && (
                            <motion.div
                                key="dark"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, when: 'beforeChildren' }}
                                exit={{ opacity: 0, when: 'beforeChildren' }}
                                transition={{ duration: 1.0 }}
                            >
                                <DynamicBGDiv $mode={systemMode}/>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </ModeBGContainer>
            )}
        </AnimatePresence>
    );
}
