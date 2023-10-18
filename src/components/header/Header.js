import { useContext } from 'react'

// styles
import './Header.scss'

// components
import Banner from '../banner/Banner'
import NavBtn from '../btns/nav-btn/NavBtn'

// context
import { CartContext } from '../../contexts/cart-context/CartContext'

export default function Header() {
    const { isCartEmpty } = useContext(CartContext)
    
    return (
        <div className='header-container'>
            {isCartEmpty &&
                <Banner />
            }
            {!isCartEmpty &&
                <NavBtn direction={"up"} btnIcon={"cart"}/>
            }
        </div>
    )
}
