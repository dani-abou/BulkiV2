import styled from "styled-components";

export const StyledInputDiv = styled.div`
  display: flex;
  border-radius: 15px;
  border: 1px solid ${props => props.theme.colors.onSurface.hexa()};
  gap:8px;
  overflow: hidden;
  height: 35px;
  align-items: center;
  padding:0;
  overflow: hidden;
`

export const StyledInput = styled.input`
  flex: 1 1 80%;
  border: none;
  outline: none;
  border-radius: 15px;
  height: 100%;
  background-color: transparent;
`

export const StyledInputEnd = styled.div`
  flex: 0 0 18%;
  height: 100%;
  text-align: center;  
  padding: 0;
  margin:0;
  ${props => props.borderOn == 'right' ?
    `border-right: 1px solid ${props.theme.colors.onSurface.alpha(0.3).hexa()};` :
    `border-left: 1px solid ${props.theme.colors.onSurface.alpha(0.3).hexa()};`

  }
`