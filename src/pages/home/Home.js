// styles
import './Home.scss'

// components
import ArticlesContainer from './components/articles-container/ArticlesContainer'
import Header from '../../components/header/Header'

export default function Home() {

    return (
      <div className='home-container'>
        <Header />
        <ArticlesContainer />
      </div>
    )
}