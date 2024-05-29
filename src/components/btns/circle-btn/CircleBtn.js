// styles
import {
  CircleBtnContainer,
  BtnLabel
} from './CircleBtn.styles.js'

export default function CircleBtn({ label, bg, isActive }) {

  return (
    <CircleBtnContainer $bg={bg} $isActive={isActive} >
        <BtnLabel >{label}</BtnLabel>
    </CircleBtnContainer>
  )
}