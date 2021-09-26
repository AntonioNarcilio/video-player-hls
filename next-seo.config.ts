import { DefaultSeoProps } from 'next-seo';

const defaultNextSeo:DefaultSeoProps = {
  title: 'Video Player HLS',
  description: 'Watch streaming videos in M3U8 format super easy!',

  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'initial-scale=1.0, width=device-width',
    },
    {
      name: 'author',
      content: 'Antonio Narcilio',
    },
  ],

  // additionalLinkTags: [
  //   {
  //     rel: 'icon',
  //     type: 'image/svg+xml',
  //     href: '/favicon.svg',
  //   },
  // ],

  openGraph: {
    type: 'website',
    locale: 'en_US',
    site_name: 'Video Player HLS',
    url: 'https://video-player-hls.vercel.app',
    profile: {
      firstName: 'Antonio',
      lastName: 'Narcilio',
      username: '@antonionarcilio',
    },
    images: [
      {
        url: 'https://video-player-hls.vercel.app/assets/preview.png',
        alt: 'preview',
      },
    ],
  },

  twitter: {
    handle: '@antonionarcilio',
    site: '@videoplayerhls',
    cardType: 'summary_large_image',
  },

};

export default defaultNextSeo;
