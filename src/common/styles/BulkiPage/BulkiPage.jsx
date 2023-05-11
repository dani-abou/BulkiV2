import useScrollTrigger from '@mui/material/useScrollTrigger';
import Head from 'next/head';
import { useState } from 'react';
import BulkiFooter from '../../../components/BulkiFooter';
import BulkiNavbar from '../../../components/BulkiNavbar';
import { StyledBackgroundDiv, StyledBodyDiv, StyledFooterDiv, StyledNavbarDiv, StyledWholePage } from "./style";

const DEFAULT_HEAD = {
  title: 'Bulki',
  icon: '/favicon.ico',
  fonts: {
    rel: 'stylesheet',
    href: 'https://use.typekit.net/vou1mix.css'
  },
  hideNav: false,
  backgroundImg: true
}

const BulkiPage = ({ children, headProps }) => {
  const { title, icon, hideNav, backgroundImg, ...links } = { ...DEFAULT_HEAD, ...headProps }
  const [bodyRef, setBodyRef] = useState();
  const scrollTrigger = useScrollTrigger(
    {
      target: bodyRef,
      disableHysteresis: true,
      threshold: 27,
    });

  return <StyledWholePage $showImg={backgroundImg}>
    <Head>
      <title>{title || 'Bulki'}</title>
      <link rel="icon" href={icon || '/favicon.ico'} />
      {Object.keys(links).map(linkKey => <link rel={links[linkKey].rel} href={links[linkKey].href} key={linkKey} />)}
    </Head>
    {!hideNav && <BulkiNavbar />}
    {/* <StyledBodyDiv ref={node => {
      if (node) setBodyRef(node)
    }}> */}


    <StyledBackgroundDiv $skinny={scrollTrigger} $noNavbar={hideNav}>
      {children}
    </StyledBackgroundDiv>
    {/* <StyledFooterDiv $skinny={scrollTrigger}>
        <BulkiFooter />
      </StyledFooterDiv> */}

    {/* </StyledBodyDiv> */}
  </StyledWholePage >
}

export default BulkiPage