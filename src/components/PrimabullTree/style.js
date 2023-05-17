import styled from "styled-components";
import { TreeItem } from '@mui/lab';

export const StyledEndNode = styled(TreeItem)`
  min-height: 50px;
  background-color: ${props => props.parent ? props.theme.colors.onSurface.alpha(0.1).hexa() : 'transparent'};

  
`


export const StyledParentNode = styled(TreeItem)`

  background-color: ${props => props.$parent ? props.theme.colors.onSurface.alpha(0.1).hexa() : 'transparent'};
  height: 50px;
  position: relative;

`

export const StyledCenteredDiv = styled.div`

`

