// styles
import { 
    BannerContainer, LogoMiddleText, LogoBottomText, LogoTopText
}from './Banner.styles.js'

export default function Banner() {
    return (
        <BannerContainer>
            <LogoTopText><em>presence</em></LogoTopText>
            <LogoMiddleText><em>presence</em></LogoMiddleText>
            <LogoBottomText><em>presence</em></LogoBottomText>
        </BannerContainer>
    )
}