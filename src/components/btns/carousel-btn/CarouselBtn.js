// assets
import chevronIcon from '../../../assets/icons/chevron-icon.svg';

// styles
import {
  CarouselBtnContainer,
  CarouselBtnIcon
} from './CarouselBtn.styles.js';

export default function CarouselBtn({ icon, filled=true, active=true, isParentHovered=false }) {
  return (
    <CarouselBtnContainer $filled={filled} $active={active} $isParentHovered={isParentHovered}>
        {icon === "left" && 
          <CarouselBtnIcon src={chevronIcon} alt='left arrow icon' $isParentHovered={isParentHovered}/>
        }
        {icon === "right" &&
          <CarouselBtnIcon style={{ transform: 'rotate(-180deg)' }} src={chevronIcon} alt='right arrow icon' $isParentHovered={isParentHovered}/>
        }
    </CarouselBtnContainer>
  )
};