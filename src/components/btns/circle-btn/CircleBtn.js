// styles
import {
  CircleBtnContainer,
  BtnLabel
} from './CircleBtn.styles.js'

export default function CircleBtn({ children, label=null, bg, isActive }) {

  return (
    <CircleBtnContainer $bg={bg} $isActive={isActive} >
      {label &&
        <BtnLabel >{label}</BtnLabel>
      }
      { children }
    </CircleBtnContainer>
  )
}