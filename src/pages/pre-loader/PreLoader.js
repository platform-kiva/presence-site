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
            <div className='pre-loader-banner-container' style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}}>
                <Banner />
            </div>
        </div>
    )
}
