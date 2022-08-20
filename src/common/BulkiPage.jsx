import { BulkiNavbar } from '../components/BulkiNavbar';
import styled from "styled-components";
import Head from 'next/head'
import { Paper } from '@mui/material';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


const StyledBackgroundDiv = styled(Paper)`
  width: 100% !important;
  min-width: 950px;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  background-color: ${props => props.theme.colors.background.hexa()};
  overflow-x: hidden;
  overflow-y: auto;
`

const DEFAULT_HEAD = {
  title: 'Bulki',
  icon: '/favicon.ico',
  fonts: {
    rel: 'stylesheet',
    href: 'ttps://use.typekit.net/vou1mix.css'
  }
}

const BulkiPage = ({ children, headProps }) => {
  const { title, icon, ...links } = { ...DEFAULT_HEAD, ...headProps }
  return <>
    <Head>
      <title>{title || 'Bulki'}</title>
      <link rel="icon" href={icon || '/favicon.ico'} />
      <link rel="stylesheet" href="https://use.typekit.net/vou1mix.css"></link>
      {Object.keys(links).map(linkKey => <link rel={links[linkKey].rel} href={links[linkKey].href} key={linkKey} />)}
    </Head>
    <BulkiNavbar />
    <StyledBackgroundDiv elevation={0} >
      {children}
    </StyledBackgroundDiv>
  </>
}

// export const getServerSideProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ['common']))
//   }
// });

export default BulkiPage