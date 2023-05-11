import styled from "styled-components";
import { BulkiCaption, BulkiSubtitle1, BulkiSubtitle2 } from "../../common/styles/tags";

// export const StyledInputDiv = styled.div`
//   display: flex;
//   border-radius: 15px;
//   border: 1px solid ${props => props.theme.colors.onSurface.hexa()};
//   gap:8px;
//   overflow: hidden;
//   height: 35px;
//   align-items: center;
//   padding:0;
//   overflow: hidden;
// `

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: ${props => props.$error ? `1px solid red` : `0.5px solid ${props.theme.colors.neutral.alpha(0.5).hexa()}`};
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  color: ${props => props.theme.colors.neutral.darken(0.5).hexa()};
  background-color: inherit;


  :focus {
    border-color: ${props => props.theme.colors.primary.darken(0.35).hexa()};
    border-width: 1.7px;
  }

  
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
  
`
export const StyledLabel = styled(BulkiSubtitle2)`
  margin-top: 10px;
  margin-bottom: 5px;
  line-height: 0.8;
  color: ${props => props.theme.colors.neutral.darken(0.3).hexa()};
`

export const StyledHelper = styled(BulkiCaption)`
  color: red;
`