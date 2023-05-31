import useScrollTrigger from '@mui/material/useScrollTrigger';
import Head from 'next/head';
import { useState } from 'react';
import PrimabullFooter from '../../../components/PrimabullFooter';
import PrimabullNavbar from '../../../components/PrimabullNavbar';
import { Mobile } from '../screenSizes';
import { StyledBackgroundDiv, StyledBackgroundImage, StyledBodyDiv, StyledFooterDiv, StyledNavbarDiv, StyledWholePage } from "./style";

const DEFAULT_HEAD = {
  title: 'Primabull',
  icon: '/favicon.ico',
  fonts: {
    rel: 'stylesheet',
    href: 'https://use.typekit.net/vou1mix.css'
  },
  hideNav: false,
  hideFooter: false,
  backgroundImg: true
}

const PrimabullPage = ({ children, headProps }) => {
  const { title, icon, hideNav, hideFooter, backgroundImg, ...links } = { ...DEFAULT_HEAD, ...headProps }
  const [bodyRef, setBodyRef] = useState();
  const scrollTrigger = useScrollTrigger(
    {
      target: bodyRef,
      disableHysteresis: true,
      threshold: 27,
    });

  return <StyledBackgroundImage $showImg={backgroundImg}>
    <Head>
      <title>{title || 'Primabull'}</title>
      <link rel="icon" href={icon || '/favicon.ico'} />
      {Object.keys(links).map(linkKey => <link rel={links[linkKey].rel} href={links[linkKey].href} key={linkKey} />)}
    </Head>
    <StyledWholePage >

      {/* <StyledBodyDiv ref={node => {
      if (node) setBodyRef(node)
    }}> */}



      <StyledBodyDiv $showImg={backgroundImg}>
        {!hideNav && <PrimabullNavbar />}


        <StyledBackgroundDiv $skinny={scrollTrigger} $noNavbar={hideNav} priority>
          {children}
        </StyledBackgroundDiv>

        {/* </StyledBodyDiv> */}
      </StyledBodyDiv >

      {!hideFooter && <StyledFooterDiv $skinny={scrollTrigger}>
        <Mobile><br /><br /></Mobile>
        <PrimabullFooter />
      </StyledFooterDiv>
      }
    </StyledWholePage>
  </StyledBackgroundImage>
}

export default PrimabullPage