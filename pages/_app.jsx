import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { BulkiPage, theme } from '../src/common';
import { BulkiContextProvider } from '../src/common/context';
import createEmotionCache from '../src/common/createEmotionCache';
import "../src/common/styles/scrollbar.css";
import Newsletter from '../src/page_components/newsletter';

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
        <link rel="shortcut icon" href="/favicon.ico" />

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <title>{pageHead.title || 'Bulki'}</title>

      </Head>
      <MUIThemeProvider theme={theme}>
        <SCThemeProvider theme={theme}>
          <BulkiContextProvider>
            <CssBaseline />
            {/* <Newsletter /> */}
            {/* <Component headControls={setPageHead} {...pageProps} /> */}


            <BulkiPage headProps={pageHead}>
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