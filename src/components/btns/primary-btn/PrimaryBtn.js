// styles
import {
  PrimaryBtnContainer,
  BtnLabel
} from './PrimaryBtn.styles.js'

export default function PrimaryBtn({ label, accentCol, isActive=true, wasActivated=false }) {
  return (
    <PrimaryBtnContainer $isActive={isActive} $wasActivated={wasActivated}>
        <BtnLabel $accentCol={accentCol}>{label}</BtnLabel>
    </PrimaryBtnContainer>
  )
};