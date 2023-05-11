import styled from "styled-components"
import { BulkiCaption } from "../../common/styles"

export const StyledLabel = styled(BulkiCaption)`
    color: ${props => props.theme.colors.neutral.darken(0.3).hexa()};
`