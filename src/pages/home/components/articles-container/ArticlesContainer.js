import { useState } from 'react'

// styles
import './ArticlesContainer.scss'

// assets
import arrowDown from '../../../../assets/icons/arrow-down.png'
import arrowLeft from '../../../../assets/icons/arrow-left.png'
import arrowRight from '../../../../assets/icons/arrow-right.png'


// components
import CarouselBtn from '../../../../components/btns/carousel-btn/CarouselBtn'
import MatiContainer from './article-containers/mati-container/MatiContainer'
import SeaLevelContainer from './article-containers/sea-level-container/SeaLevelContainer'
import SpineContainer from './article-containers/spine-container/SpineContainer'

export default function ArticlesContainer({ articleData }) {
    const [articleIndex, setArticleIndex] = useState(0)
    const [isScrolled, setIsScrolled] = useState(false)

    const onScrollDown = () => {
        if (isScrolled) {
            const topElement = document.getElementById('a-c-t')
            if (topElement) {
                topElement.scrollIntoView({ behavior: 'smooth' });
                setIsScrolled(false)
            }
        } else if (!isScrolled) {
            const botElement = document.getElementById('a-c-b')
            if (botElement) {
                botElement.scrollIntoView({ behavior: 'smooth' });
                setIsScrolled(true)
            }
        }
        
        

    }

    const handleClick = (inc) => {
        const newIndex = articleIndex + inc
        if (newIndex === 3) {
            setArticleIndex(0)
        } else if (newIndex === -1) {
            setArticleIndex(2)
        } else {
            setArticleIndex(newIndex)
        }
        console.log(newIndex)
    }

    return (
        <div className='articles-container'>

            <div id='a-c-t' className='article-container-main'>
                <div onClick={() => handleClick(-1)}>
                    <CarouselBtn icon={arrowLeft} />  
                </div>

                {articleIndex === 0 && 
                    <div onClick={() => onScrollDown()}>
                        <MatiContainer articleData={articleData} articleIndex={articleIndex} />
                    </div>
                }

                {articleIndex === 1 &&
                    <div onClick={() => onScrollDown()}>
                        <SpineContainer articleData={articleData} articleIndex={articleIndex} />
                    </div>
                }

                {articleIndex === 2 &&
                    <div onClick={() => onScrollDown()}>
                        <SeaLevelContainer articleData={articleData} articleIndex={articleIndex} />
                    </div>
                }

                <div onClick={() => handleClick(1)} >
                    <CarouselBtn icon={arrowRight} />  
                </div>
            </div>

            <div className={`${isScrolled ? 'scroll-down-btn-container scroll-down-btn-container-active' : 'scroll-down-btn-container'}`} onClick={() => onScrollDown()}>
                <CarouselBtn icon={arrowDown} /> 
            </div>

            <div id='a-c-b' className='article-container-bot'>
                <div className='article-container-bot-left-col'>
                    <img className='article-container-bot-detail-img' src={articleData[articleIndex].img} alt=''/>

                </div>
                <div className='article-container-bot-right-col'>
                    <h1 className='article-container-bot-price'>$USD</h1>
                    <h3 className='article-container-bot-supply '>88 of 100 sold</h3>
                    <div className='article-container-bot-size-btns-container'>
                        <div className='article-container-bot-size-btn' style={{ opacity: '33%' }}>
                            <h4 className='article-container-bot-size-btn-text'>S</h4>
                        </div>
                        <div className='article-container-bot-size-btn' style={{ opacity: '33%' }}>
                            <h4 className='article-container-bot-size-btn-text'>M</h4>
                        </div>
                        <div className='article-container-bot-size-btn'>
                            <h4 className='article-container-bot-size-btn-text'>L</h4>
                        </div>
                    </div>
                    <div className='article-container-bot-add-to-cart-btn'>
                        <h4 className='article-container-bot-size-btn-text'>ADD TO CART</h4>
                    </div>
                    <div className='article-container-bot-description'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget purus a est varius viverra. Aenean tempus vestibulum diam non porttitor. Praesent pretium vitae leo sit amet elementum.<br/><br/> 
                            Proin luctus elit erat, et elementum nibh sollicitudin et. Nullam eros ex, viverra et ultricies quis, finibus eget justo. Mauris porttitor tincidunt.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
