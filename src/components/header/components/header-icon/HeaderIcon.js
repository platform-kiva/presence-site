// styles
import {
    HeaderIconContainer,
    ImgContainer,
    BGDiv
} from './HeaderIcon.styles';

export default function HeaderIcon({ children, iconSize }) {
  return (
    <HeaderIconContainer>
      <ImgContainer $iconSize={iconSize} >
        { children }
      </ImgContainer>
      <BGDiv />
    </HeaderIconContainer>
  )
}
