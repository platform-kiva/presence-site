import { useContext, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

// styles
import './ProductContainer.scss'

// components
import Header from '../../components/header/Header'
import NavBtn from '../../components/btns/nav-btn/NavBtn'
import CarouselBtn from '../../components/btns/carousel-btn/CarouselBtn'
import Product from './product/Product'

// context
import { ProductsContext } from '../../contexts/products-context/ProductsContext'

export default function ProductContainer() {
    const { products } = useContext(ProductsContext)
    
    const [isScrolled, setIsScrolled] = useState(false)
    const [productInd, setProductInd] = useOutletContext();

    const handleScroll = () => {
        if (!isScrolled) {
            const botElement = document.getElementById("productBotFold")
            botElement.scrollIntoView({ behavior: "smooth" })
        } else if (isScrolled) {
            const topElement = document.getElementById("productTopFold")
            topElement.scrollIntoView({ behavior: "smooth" })
        }
        setIsScrolled(!isScrolled)
    }

    const handleIndChange = (val) => {
        let currInd = productInd
        if (currInd === 2 && val === 1) {
            currInd = 0
        } else if (currInd === 0 && val === -1) {
            currInd = 2
        } else {
            currInd += val
        }
        setProductInd(currInd)
    }

    return (
        <div className='product-container-container'>
            <Header />
            <div className='product-carousel-btns-container'>
                <div className='product-carousel-btn-container' onClick={() => handleIndChange(-1)}>
                    <CarouselBtn icon={"left"} filled={false} />
                </div>
                <div className='product-carousel-btn-container' onClick={() => handleIndChange(1)}>
                    <CarouselBtn icon={"right"} filled={false} />
                </div>
            </div>
            <div className='products-container'>
                {products.map(product => (
                    <Product product={product} productInd={productInd} />
                ))}
            </div>
            <div className={`${isScrolled ? 'product-nav-btn-container-scrolled': 'product-nav-btn-container'}`} onClick={() => handleScroll()}>
                <NavBtn direction={isScrolled ? "up" : "down"} btnIcon={isScrolled ? "up" : "down"}/>
            </div>
        </div>
    )
}