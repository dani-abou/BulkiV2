import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { theme, BulkiPage } from '../src/assets';
import createEmotionCache from '../src/assets/createEmotionCache';
import { useState } from 'react';
import { BulkiContextProvider } from '../src/assets/context';

// Client-side cache shared for the whole session 
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {


  const [pageHead, setPageHead] = useState({ title: 'Bulki' })

  const { Component, emotionCache =
    clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport"
          content="initial-scale=1, width=device-width" />
      </Head>
      <MUIThemeProvider theme={theme}>
        <SCThemeProvider theme={theme}>
          <BulkiContextProvider>
            <BulkiPage headProps={pageHead}>
              <CssBaseline />
              <Component headControls={setPageHead} {...pageProps} />
            </BulkiPage>
          </BulkiContextProvider>
        </SCThemeProvider>
      </MUIThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};