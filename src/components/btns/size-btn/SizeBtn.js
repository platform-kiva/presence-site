// styles
import {
  SizeBtnContainer,
  BtnLabel
} from './SizeBtn.styles.js'

export default function SizeBtn({ size, accentCol, selectedSize=null }) {

  return (
    <SizeBtnContainer $size={size} $selectedSize={selectedSize}>
        <BtnLabel $accentCol={accentCol}>{size}</BtnLabel>
    </SizeBtnContainer>
  )
}