import { Paper } from '@mui/material';
import styled from "styled-components";

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
  min-height: 800px;
`
export const StyledBackgroundDiv = styled(Paper)`
  flex: 1 0 90%;
  width: 100% !important;
  margin: 0;
  /* padding: ${props => props.$skinny ? '8%' : '2%'} 0 3%; */
  padding: 3% 0 3%;

  position: relative;
  background-color: ${props => props.theme.colors.background.hexa()};
  transition: all 0.2s;
  border-radius: 0px;
`

export const StyledNavbarDiv = styled.div`
  flex: 0 0 150px;
  max-height: ${props => props.$skinny ? '75px' : '150px'};
  overflow: hidden;
  transition: all 0.2s ease-out;
`

export const StyledFooterDiv = styled.div`
  flex: 0 0 300px;
  background-color: ${props => props.theme.colors.footer.hexa()};
`

