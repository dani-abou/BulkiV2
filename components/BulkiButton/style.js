import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${props =>
    props.typeStyles.backgroundColor === 'inherit' ? 'inherit' : props.theme.colors[props.typeStyles.backgroundColor].hexa()};
  border: ${props =>
    props.typeStyles.border === 'none' ? 'none' : `2px solid ${props.theme.colors[props.typeStyles.border].hexa()}`
  };
  color: ${props => props.theme.colors[props.typeStyles.color].hexa()};
  border-radius: 15px;
  padding: 8px 30px;
  width: 163px;
  height: 40px;
  cursor: pointer;
  outline: none;

  ${props => !props.noHover &&
    `:hover {
      transform: scale(1.05);
      box-shadow: 1px 1px 5px ${props.theme.colors.onSurface.hexa()};
      background-color: red;
      transition: background-color 9s;      
      `
  }
  }


`