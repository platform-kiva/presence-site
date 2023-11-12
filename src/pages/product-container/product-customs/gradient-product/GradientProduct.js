import { useEffect, useState } from 'react'

// styles
import './GradientProduct.scss'

// assets
import blank_shirt from './assets/shirt-mockup-blank-resized.png'
import design_ALPHA from './assets/mati-eye-placement-ALPHA.png'

// components
import PrimaryBtn from '../../../../components/btns/primary-btn/PrimaryBtn'
import Product from '../../product/Product'

const getRandomRgbValue = () => Math.floor(Math.random() * 256);
const generateRgbaString = (alpha) => {
    return `rgba(${getRandomRgbValue()}, ${getRandomRgbValue()}, ${getRandomRgbValue()}, ${alpha})`
};
  
export default function GradientProduct({ product }) {
    const alphaStart = 0.49;
    const alphaEnd = 0.56;
    const [startColor, setStartColor] = useState('rgba(219, 120, 212, 0.49)');
    const [endColor, setEndColor] = useState('rgba(32, 172, 232, 0.56)');
    const [isFrozen, setIsFrozen] = useState(false)

    useEffect(() => {
        if (!isFrozen) { 
            const interval = setInterval(() => {
            setStartColor(generateRgbaString(alphaStart));
            setEndColor(generateRgbaString(alphaEnd));
            }, 2000);
        
            return () => clearInterval(interval);
        }
      }, [isFrozen]);

    const handleFreeze = () => {
        setIsFrozen(!isFrozen)
    }

    return (
        <div>
            <Product product={product} customizationID={'customizationID'}/>
            <div id='customizationID' className='custom-gradient-container'
                style={{
                    background: `linear-gradient(0deg, ${startColor} 0%, ${endColor} 100%)`
                }}
            >
                <div div className='rgb-vals-container'>
                    <h3>{startColor}</h3>
                    <h3>{endColor}</h3>
                </div>

                <div className='custom-header-container'>
                    <div>
                        <h1>CHOOSE YOUR OWN</h1>
                    </div>
                    <div onClick={() => handleFreeze()}>
                        <PrimaryBtn label={isFrozen ? "UNFREEZE" : "FREEZE"}/>
                    </div>
                    {isFrozen &&
                        <div onClick={() => handleFreeze()}>
                            <PrimaryBtn label={"NEXT"}/>
                        </div>
                    }
                </div>
                

                <div className='mockup-container'>
                    <img src={design_ALPHA} className='design-overlay' alt='alpha design' />
                    <div
                        className='gradient-box'
                        style={{
                            background: `linear-gradient(0deg, ${startColor} 0%, ${endColor} 100%)`
                        }}
                    />
                    <img src={blank_shirt} className='shirt-mockup' alt='blank shirt' />
                </div>
                
            </div>
        </div>
    )
}
