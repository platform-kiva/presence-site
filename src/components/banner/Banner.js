// styles
import './Banner.scss'

export default function Banner() {
    const date = new Date()
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

    return (
    <div className='banner-container'>
        <h2>presence</h2>
        <div className='banner-stamp-container'>
            <h3>{months[date.getMonth()]}</h3>
            <h3>{date.getFullYear() % 100}</h3>
        </div>
        <h2 className='banner-day'>{date.getDate()}</h2>
    </div>
    )
}
