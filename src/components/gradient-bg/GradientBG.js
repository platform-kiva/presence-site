// styles
import {
    GradientBGContainer,
    DynamicGradientDiv
} from "./GradientBG.styles";

export default function GradientBG({ gradient }) {
    return (
        <GradientBGContainer>
            <DynamicGradientDiv $gradient={gradient} />
        </GradientBGContainer>
    )
}
