import { useContext } from 'react'

// styles
import './Header.scss'

// components
import Banner from '../banner/Banner'
import NavBtn from '../btns/nav-btn/NavBtn'

// context
import { CartContext } from '../../contexts/cart-context/CartContext'

export default function Header() {
    const { cartCount } = useContext(CartContext)
    
    return (
        <div className='header-container'>
            {cartCount === 0 ? 
                <Banner />
            :
                <NavBtn direction={"up"} btnIcon={"cart"} link={"/cart"} />      
            }
        </div>
    )
}
