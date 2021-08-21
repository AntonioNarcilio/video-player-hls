/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import Document, {
  Html, Head, Main, NextScript, DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const META_TAGS_I18N = {
  en_US: {
    title_page: 'HLS video player',
    description: 'Watch streaming videos in M3U8 format super easy!',
    url_site: 'https://video-player-hls.vercel.app',
    uri_image: 'https://video-player-hls.vercel.app/assets/preview.png',
  },
  pt_BR: {
    title_page: 'HLS video player',
    description: 'Visualize videos no formato M3U8 de forma super fácil!',
    url_site: 'https://video-player-hls.vercel.app',
    uri_image: 'https://video-player-hls.vercel.app/assets/preview.png',
  },
};

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
      <Html>
        <Head>
          <meta name="author" content="Antonio Narcilio" />

          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <meta property="og:locale" content="en_US" />
          <meta lang="en_US" name="title" content={META_TAGS_I18N.en_US.title_page} key="title" />
          <meta lang="en_US" name="description" content={META_TAGS_I18N.en_US.description} key="desc" />

          <meta lang="pt_BR" name="title" content={META_TAGS_I18N.pt_BR.title_page} key="title" />
          <meta lang="pt_BR" name="description" content={META_TAGS_I18N.pt_BR.description} key="desc" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta lang="en_US" property="og:site_name" content={META_TAGS_I18N.en_US.title_page} key="ogsitename" />
          <meta lang="en_US" property="og:url" content={META_TAGS_I18N.en_US.url_site} key="ogurl" />
          <meta lang="en_US" property="og:title" content={META_TAGS_I18N.en_US.title_page} key="ogtitle" />
          <meta lang="en_US" property="og:description" content={META_TAGS_I18N.en_US.description} key="ogdesc" />
          <meta lang="en_US" property="og:image" content={META_TAGS_I18N.en_US.uri_image} key="ogimg" />
          <meta lang="en_US" property="og:image:type" content="image/jpeg" />

          <meta lang="pt_BR" property="og:site_name" content={META_TAGS_I18N.en_US.title_page} key="ogsitename" />
          <meta lang="pt_BR" property="og:url" content={META_TAGS_I18N.en_US.url_site} key="ogurl" />
          <meta lang="pt_BR" property="og:title" content={META_TAGS_I18N.en_US.title_page} key="ogtitle" />
          <meta lang="pt_BR" property="og:description" content={META_TAGS_I18N.en_US.description} key="ogdesc" />
          <meta lang="pt_BR" property="og:image" content={META_TAGS_I18N.en_US.uri_image} key="ogimg" />
          <meta lang="pt_BR" property="og:image:type" content="image/jpeg" />

          {/* Twitter  */}
          <meta property="twitter:card" content="summary_large_image" key="tw" />
          <meta lang="en_US" property="twitter:url" content={META_TAGS_I18N.en_US.url_site} key="twurl" />
          <meta lang="en_US" property="twitter:title" content={META_TAGS_I18N.en_US.title_page} key="twtitle" />
          <meta lang="en_US" property="twitter:description" content={META_TAGS_I18N.en_US.description} key="twdesc" />
          <meta lang="en_US" property="twitter:image" content={META_TAGS_I18N.en_US.uri_image} key="twimg" />

          <meta lang="pt_BR" property="twitter:url" content={META_TAGS_I18N.en_US.url_site} key="twurl" />
          <meta lang="pt_BR" property="twitter:title" content={META_TAGS_I18N.en_US.title_page} key="twtitle" />
          <meta lang="pt_BR" property="twitter:description" content={META_TAGS_I18N.en_US.description} key="twdesc" />
          <meta lang="pt_BR" property="twitter:image" content={META_TAGS_I18N.en_US.uri_image} key="twimg" />

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
