import { Paper } from '@mui/material';
import styled from "styled-components";

export const StyledWholePage = styled.div`
  width: 100vw;
  min-height: 100vh;
  /* min-height: 650px; */

  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  /* min-width: 1050px; */
  height: 100vh;

  ${props => props.$showImg ? `

  background: linear-gradient(rgba(150, 150, 150, 0.1), rgba(0, 0, 0, 0.4)), url('/cows.png');
  position: relative;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;`:

    `
  background-color: ${props.theme.colors.background.hexa()};
  `
  }

&::-webkit-scrollbar {
  display: none;
}


`
export const StyledBodyDiv = styled.div`
  flex: 1 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  /* min-height: 800px; */
  min-height: 100vh;
  position: relative;
  height: 100vh;
`

export const StyledBackgroundDiv = styled(Paper)`
  flex: 1 0 auto;
  display: block;
  width: 100% !important;
  margin: ${props => props.$noNavbar ? '0' : '40px'} 0 0;
  /* padding: ${props => props.$skinny ? '8%' : '2%'} 0 3%; */
  /* padding: 1% 0 3%; */

  position: relative;
  background-color: transparent;
  transition: all 0.2s;
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

