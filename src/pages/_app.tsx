/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import dracula from '../styles/themes/dracula';
// import light from '../styles/themes/light';
import GlobalStyles from '../styles/global';

export default function App({ Component, pageProps }:AppProps) {
  return (
    <>
      <ThemeProvider theme={dracula}>
        <Head>
          <title>Template</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
