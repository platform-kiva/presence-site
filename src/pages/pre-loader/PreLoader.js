import { motion as m } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// assets
import cursorIconFilled from '../../assets/icons/cursor_filled.png'

// styles
import './PreLoader.scss'

// components
import Banner from '../../components/banner/Banner'

export default function PreLoader() {
    const navigate = useNavigate()

    return (
        <div className='pre-loader-container' onClick={() => navigate("/")}>
            <m.div
                initial={{ opacity: 0.0, translateX: -20 }}
                animate={{ opacity: [0.0, 1.0], translateX: [-20, 0] }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    times: [0, 1]
                }}
                whileHover={{
                    scale: 1.08,
                    transition: { duration: 0.8 }
                }}
                className='pre-loader-banner-container'
                style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}}>
                <Banner />
            </m.div>
        </div>
    )
}
