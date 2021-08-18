import Lottie from 'react-lottie';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import loadingAnimation from '../animation/500-error.json';
import Container from '../styles/pages/error/styles';

export default function ServerSideError() {
  const history = useRouter();
  // Redirecionando para a pagina home
  useEffect(() => {
    setTimeout(() => {
      // replace: não adiciona uma nova entrada url (nao add a rota no caminho)
      history.replace('/');
    }, 5000);
  }, []);

  return (
    <>
      <Head>
        <title>Server-side error occurred</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Lottie
          options={{
            loop: false,
            autoplay: true,
            animationData: loadingAnimation,
          }}
          width={550}
        />
      </Container>
    </>
  );
}
