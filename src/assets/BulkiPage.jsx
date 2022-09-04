import BulkiNavbar from '../components/BulkiNavbar';
import styled from "styled-components";
import Head from 'next/head'
import { Paper } from '@mui/material';
import BulkiFooter from '../components/BulkiFooter';
import { useRef, useState } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const StyledWholePage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 1050px;

`
const StyledBodyDiv = styled.div`
  flex: 1 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`
const StyledBackgroundDiv = styled(Paper)`
  flex: 1 0 85%;
  width: 100% !important;

  margin: 0;
  padding: 2% 0 0;
  position: relative;
  background-color: ${props => props.theme.colors.background.hexa()};
`

const StyledFooterDiv = styled.div`
  flex: 0 0 300px;
  background-color: ${props => props.theme.colors.footer.hexa()};
`

const DEFAULT_HEAD = {
  title: 'Bulki',
  icon: '/favicon.ico',
  fonts: {
    rel: 'stylesheet',
    href: 'https://use.typekit.net/vou1mix.css'
  }
}

const BulkiPage = ({ children, headProps, ...props }) => {
  const { title, icon, ...links } = { ...DEFAULT_HEAD, ...headProps }
  const [bodyRef, setBodyRef] = useState();
  const scrollTrigger = useScrollTrigger(
    {
      target: bodyRef,
      disableHysteresis: true,
      threshold: 0,
    });

  return <StyledWholePage>
    <Head>
      <title>{title || 'Bulki'}</title>
      <link rel="icon" href={icon || '/favicon.ico'} />
      {Object.keys(links).map(linkKey => <link rel={links[linkKey].rel} href={links[linkKey].href} key={linkKey} />)}
    </Head>
    <BulkiNavbar scrollTrigger={scrollTrigger} />
    <StyledBodyDiv ref={node => {
      if (node) setBodyRef(node)
    }}>
      {console.log(scrollTrigger)}
      <StyledBackgroundDiv>
        {children}
      </StyledBackgroundDiv>
      <StyledFooterDiv>
        <BulkiFooter />
      </StyledFooterDiv>
    </StyledBodyDiv>
  </StyledWholePage >
}



export default BulkiPage