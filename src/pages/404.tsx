import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { ThemeContext } from 'styled-components';

import Head from '@/components/Head';
import LottieAnimation from '@/components/LottieAnimation';
import loadingAnimation from '@/animation/404-error.json';
import HotToast from '@/components/HotToast';

import Container from '@/styles/pages/error';

export default function NotFound() {
  const router = useRouter();
  const { colors } = useContext(ThemeContext);
  // Redirecionando para a pagina home
  useEffect(() => {
    toast.error('Page not found', {
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
      <Head title="Not found" />

      <Container>
        <LottieAnimation
          ID="404"
          Width={600}
          Height={600}
          LoadingAnimation={loadingAnimation}
        />
      </Container>

      <HotToast />
    </>
  );
}
