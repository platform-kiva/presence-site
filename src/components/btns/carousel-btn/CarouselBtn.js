// assets
import cardIcon from '../../../assets/icons/card-icon.png';
import cartIcon from '../../../assets/icons/bag-icon.svg';
import chevronUp from '../../../assets/icons/chevron-icon-up.png';
import chevronDown from '../../../assets/icons/chevron-icon-down.png';
import chevronLeft from '../../../assets/icons/chevron-icon-left.png';
import chevronRight from '../../../assets/icons/chevron-icon-right.png';

// styles
import {
  CarouselBtnContainer,
  CarouselBtnIcon
} from './CarouselBtn.styles.js';

export default function CarouselBtn({ icon, filled=true, active=true, isParentHovered=false }) {
  return (
    <CarouselBtnContainer $filled={filled} $active={active} $isParentHovered={isParentHovered}>
        {icon === "up" &&
          <CarouselBtnIcon src={chevronUp} alt='up arrow icon' $isParentHovered={isParentHovered}/>
        }
        {icon === "down" &&
          <CarouselBtnIcon src={chevronDown} alt='down arrow icon' $isParentHovered={isParentHovered}/>
        }
        {icon === "left" && 
          <CarouselBtnIcon src={chevronLeft} alt='left arrow icon' $isParentHovered={isParentHovered}/>
        }
        {icon === "right" &&
          <CarouselBtnIcon src={chevronRight} alt='right arrow icon' $isParentHovered={isParentHovered}/>
        }
        {icon === "card" &&
          <CarouselBtnIcon src={cardIcon} alt='card icon' $isParentHovered={isParentHovered}/>
        }
        {icon === "cart" &&
          <CarouselBtnIcon src={cartIcon} alt='cart icon' style={{ filter: 'invert(1)' }} $isParentHovered={isParentHovered}/>
        }
    </CarouselBtnContainer>
  )
};