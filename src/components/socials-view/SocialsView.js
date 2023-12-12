// styles
import {
    SocialsViewContainer,
    SocialLink,
    SocialIconImgContainer
} from './SocialsView.styles.js';

// assets
import instagramIcon from '../../assets/icons/instagram-icon-light.png';
import snapchatIcon from '../../assets/icons/snapchat-logo-light.png';
import tiktokIcon from '../../assets/icons/tiktok-icon-light.png';

// components
import ImgLoader from '../img-loader/ImgLoader.js'

export default function SocialsView() {

    return (
        <SocialsViewContainer>
            <SocialIconImgContainer>
                <SocialLink to={'https://www.instagram.com/presence.exp'} target="_blank">
                    <ImgLoader src={instagramIcon}  alt="Instagram icon" />
                </SocialLink>
            </SocialIconImgContainer>
            <SocialIconImgContainer>
                <SocialLink to={'https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=8316e9bcedb14f7ea5bb3e35e53a2ffa&metadata=01'} target="_blank">
                    <ImgLoader src={snapchatIcon} alt="Snapchat icon" />
                </SocialLink>
            </SocialIconImgContainer>
            <SocialIconImgContainer>
                <SocialLink to={'https://www.tiktok.com/@presence.exp'} target="_blank">
                    <ImgLoader src={tiktokIcon} alt="Tiktok icon" />
                </SocialLink>
            </SocialIconImgContainer>
        </SocialsViewContainer>
    )
}
