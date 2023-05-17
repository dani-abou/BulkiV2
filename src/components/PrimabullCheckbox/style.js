import styled from "styled-components"
import { PrimabullCaption } from "../../common/styles"

export const StyledLabel = styled(PrimabullCaption)`
    color: ${props => props.theme.colors.neutral.darken(0.3).hexa()};
`