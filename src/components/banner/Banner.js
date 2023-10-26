// styles
import { 
    BannerContainer,
    BannerStampContainer,
    StampSmallText,
    StampLargeText,
    BannerDay
}from './Banner.styles.js'

export default function Banner() {
    const date = new Date()
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

    return (
    <BannerContainer>
        <StampLargeText>presence</StampLargeText>
        <BannerStampContainer>
            <StampSmallText>{months[date.getMonth()]}</StampSmallText>
            <StampSmallText>{date.getFullYear() % 100}</StampSmallText>
        </BannerStampContainer>
        <BannerDay>{date.getDate()}</BannerDay>
    </BannerContainer>
    )
}