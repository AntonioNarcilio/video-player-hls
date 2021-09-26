import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { NextSeo } from 'next-seo';
import { ThemeContext } from 'styled-components';

import LottieAnimation from '@/components/LottieAnimation';
import loadingAnimation from '@/animation/500-error.json';
import HotToast from '@/components/HotToast';

import Container from '@/styles/pages/error';

const Custom500 = () => {
  const router = useRouter();
  const { colors } = useContext(ThemeContext);
  // Redirecionando para a pagina home
  useEffect(() => {
    toast.error('Internal Server Error', {
      position: 'top-center',
      style: {
        borderRadius: '6px',
        padding: '16px',
        fontWeight: 500,
        fontSize: '14px',
        color: `${colors.white}`,
        boxShadow: '0px 7px 8px 2px rgb(0 0 0 / 41%)',
      },
    });

    setTimeout(() => {
      toast('You will be redirected to the home page', {
        icon: '⌛',
        position: 'top-center',
        style: {
          borderRadius: '6px',
          padding: '16px',
          fontWeight: 500,
          fontSize: '14px',
          color: `${colors.white}`,
          boxShadow: '0px 7px 8px 2px rgb(0 0 0 / 41%)',
        },
      });
    }, 1000);

    setTimeout(() => {
      // replace: não adiciona uma nova entrada url (nao add a rota no caminho)
      router.replace('/');
    }, 6000);
  }, []);

  return (
    <>

      <NextSeo
        title="Internal Server Error"
        noindex
        nofollow
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'initial-scale=1.0, width=device-width',
          }, {
            httpEquiv: 'refresh',
            content: '5; url=/',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/error.svg',
          },
        ]}
      />
      <Container>
        <LottieAnimation
          ID="500"
          Width={600}
          Height={600}
          LoadingAnimation={loadingAnimation}
        />
      </Container>

      <HotToast />
    </>
  );
};

export default Custom500;
