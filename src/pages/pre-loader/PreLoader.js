import { useNavigate } from 'react-router-dom'

// styles
import { PreLoaderContainer, PreLoaderBannerContainer } from './PreLoader.styles.js'

// components
import Banner from '../../components/banner/Banner'

export default function PreLoader() {
    const navigate = useNavigate()

    return (
        <PreLoaderContainer onClick={() => navigate("/")}>
            <PreLoaderBannerContainer
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
            >
                <Banner />
            </PreLoaderBannerContainer>
        </PreLoaderContainer>
    )
}