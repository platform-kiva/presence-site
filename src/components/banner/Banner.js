// styles
import { 
    BannerContainer, LogoMiddleText, LogoBottomText, LogoTopText
}from './Banner.styles.js'

export default function Banner({ label }) {
    return (
        <BannerContainer>
            <LogoTopText><em>{label}</em></LogoTopText>
            <LogoMiddleText><em>{label}</em></LogoMiddleText>
            <LogoBottomText><em>{label}</em></LogoBottomText>
        </BannerContainer>
    )
}