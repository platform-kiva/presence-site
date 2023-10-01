import { useEffect, useState } from 'react'

// styles
import './Header.scss'

// assets
import bagIcon from '../../assets/icons/bag-icon.svg'
import cursorIconFilled from '../../assets/icons/cursor_filled.png'

export default function Header() {
    const [date, setDate] = useState(new Date())
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

    const refreshClock = () => {
        console.log('new time')
        setDate(new Date())
      }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000)
        console.log('useEffect ran')
        return function cleanup() {
          clearInterval(timerId)
        }
      }, [])

    return (
        <div className='header-container'>
            <div className='header-left-col' style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}}>
                {/* <h1>OPEN</h1> */}
            </div>

            <div className='header-middle-col'>
                <span>mind &nbsp;(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;&nbsp;body</span>
                <div className='header-date'>
                    <h2 className='header-date-month'>{months[date.getMonth()]}</h2>
                    <h2 className='header-date-day'>{date.getDate()}</h2>
                    {/* <h2 className='header-date-year'>{date.getFullYear()}</h2> */}
                    <h2 className='header-date-year'>fa23</h2>
                </div>
                {/* <div className='header-time'>
                    <h2 className='header-time-text'>{date.toLocaleTimeString('it-IT')}</h2>
                </div>   */}
            </div>

            <div className='header-right-col'>
                {/* <img src={bagIcon} alt="cart" style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}} /> */}
            </div>
        </div>
    )
}
