import { useSelector } from 'react-redux'
import { selectCartCount } from '../../store/cart/cart.selector.js'

// styles
import { HeaderContainer } from './Header.styles.js'

// components
import Banner from '../banner/Banner'
import NavBtn from '../btns/nav-btn/NavBtn'

export default function Header() {
    const cartCount = useSelector(selectCartCount)
    
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
