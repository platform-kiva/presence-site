// styles
import {
  PrimaryBtnContainer,
  BtnLabel
} from './PrimaryBtn.styles.js'

export default function PrimaryBtn({ label, accentCol, isActive=true }) {
  return (
    <PrimaryBtnContainer $isActive={isActive}>
        <BtnLabel $accentCol={accentCol}>{label}</BtnLabel>
    </PrimaryBtnContainer>
  )
}