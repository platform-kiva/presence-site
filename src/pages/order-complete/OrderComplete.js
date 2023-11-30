import { useNavigate } from 'react-router-dom'

// styles
import {
    OrderCompleteContainer,
    OrderCompleteContent,
    BtnContainer,
    GradientBG
} from './OrderComplete.styles.js'

// components
import PrimaryBtn from '../../components/btns/primary-btn/PrimaryBtn.js'

export default function OrderComplete() {
    const navigate = useNavigate()

    return (
        <OrderCompleteContainer>
            <OrderCompleteContent>
                <h2>order complete</h2>
                <h3>check your email for further details</h3>
                <BtnContainer onClick={() => navigate("/home")}>
                    <PrimaryBtn label={"BACK TO SHOP"}/>
                </BtnContainer>
            </OrderCompleteContent>
            <GradientBG />
        </OrderCompleteContainer>
    )
}
