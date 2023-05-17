import useScrollTrigger from '@mui/material/useScrollTrigger';
import Head from 'next/head';
import { useState } from 'react';
import PrimabullFooter from '../../../components/PrimabullFooter';
import PrimabullNavbar from '../../../components/PrimabullNavbar';
import { StyledBackgroundDiv, StyledBodyDiv, StyledFooterDiv, StyledNavbarDiv, StyledWholePage } from "./style";

const DEFAULT_HEAD = {
  title: 'Primabull',
  icon: '/favicon.ico',
  fonts: {
    rel: 'stylesheet',
    href: 'https://use.typekit.net/vou1mix.css'
  },
  hideNav: false,
  backgroundImg: true
}

const PrimabullPage = ({ children, headProps }) => {
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
      <title>{title || 'Primabull'}</title>
      <link rel="icon" href={icon || '/favicon.ico'} />
      {Object.keys(links).map(linkKey => <link rel={links[linkKey].rel} href={links[linkKey].href} key={linkKey} />)}
    </Head>
    {!hideNav && <PrimabullNavbar />}
    {/* <StyledBodyDiv ref={node => {
      if (node) setBodyRef(node)
    }}> */}


    <StyledBackgroundDiv $skinny={scrollTrigger} $noNavbar={hideNav} priority>
      {children}
    </StyledBackgroundDiv>
    {/* <StyledFooterDiv $skinny={scrollTrigger}>
        <PrimabullFooter />
      </StyledFooterDiv> */}

    {/* </StyledBodyDiv> */}
  </StyledWholePage >
}

export default PrimabullPage