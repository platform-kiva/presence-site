import { useContext } from 'react'

// styles
import { HeaderContainer } from './Header.styles.js'

// components
import Banner from '../banner/Banner'
import NavBtn from '../btns/nav-btn/NavBtn'

// context
import { CartContext } from '../../contexts/cart-context/CartContext'

export default function Header() {
    const { cartCount } = useContext(CartContext)
    
    return (
        <HeaderContainer>
            {cartCount === 0 ? 
                <Banner />
            :
                <NavBtn direction={"up"} btnIcon={"cart"} link={"/cart"} />      
            }
        </HeaderContainer>
    )
}
