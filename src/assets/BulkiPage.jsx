import BulkiNavbar from '../components/BulkiNavbar';
import styled from "styled-components";
import Head from 'next/head'
import { Paper } from '@mui/material';
import theme from "./theme"

const StyledWholePage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const StyledBackgroundDiv = styled(Paper)`
  flex: 1;
  overflow: auto;
  width: 100% !important;
  min-width: 1050px;

  margin: 0;
  padding: 2% 0;
  position: relative;
  background-color: ${props => props.theme.colors.background.hexa()};
  padding-bottom: 10%;
`

const DEFAULT_HEAD = {
  title: 'Bulki',
  icon: '/favicon.ico',
  fonts: {
    rel: 'stylesheet',
    href: 'https://use.typekit.net/vou1mix.css'
  }
}

// document.body.style.backgroundColor = theme.colors.background.hexa();

const BulkiPage = ({ children, headProps, ...props }) => {
  const { title, icon, ...links } = { ...DEFAULT_HEAD, ...headProps }
  return <StyledWholePage>
    <Head>
      <title>{title || 'Bulki'}</title>
      <link rel="icon" href={icon || '/favicon.ico'} />
      {Object.keys(links).map(linkKey => <link rel={links[linkKey].rel} href={links[linkKey].href} key={linkKey} />)}
    </Head>
    <BulkiNavbar />
    <StyledBackgroundDiv>
      {children}

    </StyledBackgroundDiv>
  </StyledWholePage>
}



export default BulkiPage