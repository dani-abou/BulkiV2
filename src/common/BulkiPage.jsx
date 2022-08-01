import { ThemeProvider } from 'styled-components';
import BulkiNavbar from '../components/BulkiNavbar/BulkiNavbar';
import theme from './theme';
import styled from "styled-components";
import Head from 'next/head'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


const StyledBackgroundDiv = styled.div`
  width: 100vw !important;
  max-width:100% !important;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.colors.background.hexa()};
  position: relative;
`

const BulkiPage = ({ children, title = 'Bulki' }) => {
  return <ThemeProvider theme={theme} style={{ margin: '0', padding: '0' }}>
    <Head>
      <title>{title}</title>
      <link rel="icon" href='/favicon.ico' />
      <link rel="stylesheet" href="https://use.typekit.net/vou1mix.css"></link>
    </Head>
    <BulkiNavbar />
    <StyledBackgroundDiv>
      {children}
    </StyledBackgroundDiv>
  </ThemeProvider>
}

// export const getServerSideProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ['common']))
//   }
// });

export default BulkiPage