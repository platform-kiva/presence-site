// styles
import {
  CustomShirtContainer,
  CustomShirtImgContainer,
  DesignAlphaImgContainer,
  CustomGradient
} from './CustomShirtDisplay.styles.js'

// assets
import blankAlpha from '../../assets/clothing/blank_ALPHA.png'
import designAlpha from '../../assets/clothing/design_ALPHA.png'

// compoments
import ImgLoader from '../../components/img-loader/ImgLoader'

export default function CustomShirtDisplay({ product }) {

  return (
    <CustomShirtContainer>
      <DesignAlphaImgContainer>
        <ImgLoader src={designAlpha} alt={"design"} />
      </DesignAlphaImgContainer>
      <CustomGradient $topGradient={product.topGradient} $botGradient={product.botGradient}/>
      <CustomShirtImgContainer>
        <ImgLoader src={blankAlpha} alt={"custom product"} />
      </CustomShirtImgContainer>
    </CustomShirtContainer>
  )
}
