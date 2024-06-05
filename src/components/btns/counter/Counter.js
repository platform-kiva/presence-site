import { useDispatch, useSelector } from 'react-redux';
import { selectUserSize } from '../../../store/system/system.selector.js';
import { setUserSize } from '../../../store/system/system.action.js';

import {
    CounterContainer,
    BtnsContainer,
    BtnContainer,
    DisplayContainer,
    CounterLabel
} from './Counter.styles.js';

// components
import CircleBtn from '../circle-btn/CircleBtn.js';

export default function Counter({ label }) {
    const dispatch = useDispatch();
    const userSize = useSelector(selectUserSize);
    const sizes = ['S','M','L','XL','2XL', '3XL', '4XL'];

    const handleSizeSelection = (unit) => {
        if (unit === -1) {
            if (userSize === 0) {
                dispatch(setUserSize(6));
            } else {
                const newUserSize = userSize - 1;
                dispatch(setUserSize(newUserSize));
            }
        } else {
            if (userSize === 6) {
                dispatch(setUserSize(0));
            } else {
                const newUserSize = userSize + 1;
                dispatch(setUserSize(newUserSize));
            }
        }
    };

    return (
        <CounterContainer>
            <CounterLabel>{label}</CounterLabel>
            <BtnsContainer>
                <BtnContainer onClick={() => handleSizeSelection(-1)}>
                    <CircleBtn label={"-"} bg={false} isActive={true}/>
                </BtnContainer>
                <DisplayContainer>
                    <CircleBtn label={sizes[userSize]} bg={false} isActive={false}/>
                </DisplayContainer>
                <BtnContainer onClick={() => handleSizeSelection(1)}>
                    <CircleBtn label={"+"} bg={false} isActive={true}/>
                </BtnContainer>
            </BtnsContainer>
        </CounterContainer>
    )
}
