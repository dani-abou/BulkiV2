import styled from "styled-components"
import { Paper } from '@mui/material';

export const StyledWholePage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 1050px;
`
export const StyledBodyDiv = styled.div`
  flex: 1 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const StyledBackgroundDiv = styled(Paper)`
  flex: 1 0 ${props => props.$skinny ? '90%' : '90%'};
  width: 100% !important;

  margin: 0;
  padding: ${props => props.$skinny ? '8%' : '2%'} 0 0;
  position: relative;
  background-color: ${props => props.theme.colors.background.hexa()};
  transition: all 0.2s;
`

export const StyledNavbarDiv = styled.div`
  flex: 0 0 ${props => props.$skinny ? '8%' : '18%'};
  transition: all 0.2s;
`

export const StyledFooterDiv = styled.div`
  flex: 0 0 300px;
  background-color: ${props => props.theme.colors.footer.hexa()};
`