// assets
import shirt1 from '../../assets/clothing/mati_ALPHA.png'
import shirt2 from '../../assets/clothing/spine_ALPHA.png'
import shirt3 from '../../assets/clothing/water_ALPHA.png'

// styles
import './Home.scss'

// components
import ArticlesContainer from './components/articles-container/ArticlesContainer'
import Cart from '../cart/Cart.js'
import Header from '../../components/header/Header'

export default function Home() {

    const articleData = [
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
        <div
          className='article-gradient-bg'
          style=
            {{
              background: `linear-gradient(0deg, rgba(${articleData[0].botGradient[0]}, ${articleData[0].botGradient[1]}, ${articleData[0].botGradient[2]}, 0.8) 0%, rgba(${articleData[0].topGradient[0]}, ${articleData[0].topGradient[1]}, ${articleData[0].topGradient[2]}, 0.8) 88%)`
            }}
        />

        <Cart articleData={articleData} />
        <Header />
        <ArticlesContainer articleData={articleData}/>
      </div>
    )
}