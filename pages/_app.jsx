import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { PrimabullPage, theme } from '../src/common';
import { PrimabullContextProvider } from '../src/common/context';
import createEmotionCache from '../src/common/createEmotionCache';
import "../src/common/styles/scrollbar.css";

// Client-side cache shared for the whole session 
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {

  const [pageHead, setPageHead] = useState({ title: 'Primabull' })

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
        <title>{pageHead.title || 'Primabull'}</title>

      </Head>
      <MUIThemeProvider theme={theme}>
        <SCThemeProvider theme={theme}>
          <PrimabullContextProvider>
            <CssBaseline />
            {/* <Newsletter /> */}
            {/* <Component headControls={setPageHead} {...pageProps} /> */}


            <PrimabullPage headProps={pageHead}>
              <Component headControls={setPageHead} />
              <Analytics />
            </PrimabullPage>

          </PrimabullContextProvider>
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