/* eslint-disable react/jsx-props-no-spreading */
import Document, {
  Html, Head, Main, NextScript, DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const TITLE_PAGE = 'HLS video player';
const DESCRIPTION = 'Watch streaming videos in M3U8 format super easy';
const URL_SITE = 'https://';
const URI_IMAGE = '/assets/preview.png';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () => originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: (App) => (props) => sheet.collectStyles(
          <>
            <App {...props} />
          </>,
        ),
        // useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

      // Run the parent `getInitialProps`, it now includes the custom `renderPage`
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="author" content="Antonio Narcilio" />

          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <meta property="og:locale" content="en_US" />
          <meta name="title" content={TITLE_PAGE} key="title" />
          <meta name="description" content={DESCRIPTION} key="desc" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={TITLE_PAGE} key="ogsitename" />
          <meta property="og:url" content={URL_SITE} key="ogurl" />
          <meta property="og:title" content={TITLE_PAGE} key="ogtitle" />
          <meta property="og:description" content={DESCRIPTION} key="ogdesc" />
          <meta property="og:image" content={URI_IMAGE} key="ogimg" />
          <meta property="og:image:type" content="image/jpeg" />

          {/* Twitter  */}
          <meta property="twitter:card" content="summary_large_image" key="tw" />
          <meta property="twitter:url" content={URL_SITE} key="twurl" />
          <meta property="twitter:title" content={TITLE_PAGE} key="twtitle" />
          <meta property="twitter:description" content={DESCRIPTION} key="twdesc" />
          <meta property="twitter:image" content={URI_IMAGE} key="twimg" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
