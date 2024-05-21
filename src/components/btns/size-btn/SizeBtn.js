// styles
import {
  SizeBtnContainer,
  BtnLabel
} from './SizeBtn.styles.js'

export default function SizeBtn({ isActive, size, accentCol, selectedSize=null }) {

  return (
    <SizeBtnContainer $size={size} $selectedSize={selectedSize} $isActive={isActive}>
        <BtnLabel $accentCol={accentCol}>{size}</BtnLabel>
    </SizeBtnContainer>
  )
}