import { useState } from 'react'
import { Outlet } from 'react-router-dom'

// styles
import './Home.scss'

// assets
import shirt1 from '../../assets/clothing/mati_ALPHA.png'
import shirt2 from '../../assets/clothing/spine_ALPHA.png'
import shirt3 from '../../assets/clothing/water_ALPHA.png'

export default function Home() {
    const [productInd, setProductInd] = useState(0)

    const productData =
    [
      {
          img: shirt1,
          topGradient: [32, 172, 232],
          botGradient: [219, 120, 212]
      },
      {
          img: shirt2,
          topGradient: [208, 84, 18],
          botGradient: [252, 232, 52]
      },
      {
          img: shirt3,
          topGradient: [230, 169, 89],
          botGradient: [47, 117, 180]
      }
    ]

    return (
      <div className='home-container'>
        <div className='outlet-container'>
          <Outlet context={[productInd, setProductInd]} />
        </div>
        <div
          className='article-gradient-bg'
          style=
            {{
              background: `linear-gradient(45deg, rgba(${productData[productInd].botGradient[0]}, ${productData[productInd].botGradient[1]}, ${productData[productInd].botGradient[2]}, 0.8) 0%, rgba(${productData[productInd].topGradient[0]}, ${productData[productInd].topGradient[1]}, ${productData[productInd].topGradient[2]}, 0.8) 88%)`
            }}
        />
      </div>
    )
}