import BulkiNavbar from '../../../components/BulkiNavbar';
import Head from 'next/head'
import BulkiFooter from '../../../components/BulkiFooter';
import { useState } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { StyledWholePage, StyledBodyDiv, StyledBackgroundDiv, StyledNavbarDiv, StyledFooterDiv } from "./style"

const DEFAULT_HEAD = {
  title: 'Bulki',
  icon: '/favicon.ico',
  fonts: {
    rel: 'stylesheet',
    href: 'https://use.typekit.net/vou1mix.css'
  }
}

const BulkiPage = ({ children, headProps }) => {
  const { title, icon, ...links } = { ...DEFAULT_HEAD, ...headProps }
  const [bodyRef, setBodyRef] = useState();
  const scrollTrigger = useScrollTrigger(
    {
      target: bodyRef,
      disableHysteresis: true,
      threshold: 27,
    });

  return <StyledWholePage>
    <Head>
      <title>{title || 'Bulki'}</title>
      <link rel="icon" href={icon || '/favicon.ico'} />
      {Object.keys(links).map(linkKey => <link rel={links[linkKey].rel} href={links[linkKey].href} key={linkKey} />)}
    </Head>
    <StyledNavbarDiv $skinny={scrollTrigger}>
      <BulkiNavbar skinny={scrollTrigger} />
    </StyledNavbarDiv>
    <StyledBodyDiv ref={node => {
      if (node) setBodyRef(node)
    }}>
      <StyledBackgroundDiv $skinny={scrollTrigger}>
        {children}
      </StyledBackgroundDiv>
      <StyledFooterDiv $skinny={scrollTrigger}>
        <BulkiFooter />
      </StyledFooterDiv>
    </StyledBodyDiv>
  </StyledWholePage >
}

export default BulkiPage