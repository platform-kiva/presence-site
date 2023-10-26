import { useNavigate } from 'react-router-dom'

// styles
import {
    OrderCompleteContainer,
    OrderCompleteContent,
    HeaderText,
    Instructions
} from './OrderComplete.styles.js'

// components
import PrimaryBtn from '../../components/btns/primary-btn/PrimaryBtn.js'

export default function OrderComplete() {
    const navigate = useNavigate()

    return (
        <OrderCompleteContainer>
            <OrderCompleteContent>
                <HeaderText>order complete</HeaderText>
                <Instructions>check your email for further details</Instructions>
                <div onClick={() => navigate("/")} style={{ width: "200px" }}>
                    <PrimaryBtn label={"BACK TO SHOP"}/>
                </div>
            </OrderCompleteContent>
        </OrderCompleteContainer>
    )
}
