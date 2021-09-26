/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';

import SEO from '@/seo';
import dark from '../styles/themes/dark';
import GlobalStyles from '../styles/global';

export default function App({ Component, pageProps }:AppProps) {
  return (
    <>
      <ThemeProvider theme={dark}>
        <DefaultSeo {...SEO} />

        <GlobalStyles />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
