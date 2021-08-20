import { useEffect } from 'react';
import LottieWeb from 'lottie-web';

import { LottieAnimationTypes } from '@/types/lottie-animation';
import { Lottie } from './styles';

const LottieAnimation = ({
  Width, Height, LoadingAnimation, ID, ...props
}:LottieAnimationTypes) => {
  useEffect(() => {
    if (process.browser) {
      const element = document.getElementById(`${ID}`);

      if (element) {
        LottieWeb.loadAnimation({
          container: element,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: LoadingAnimation,
        });
      }
    }
  }, []);

  return (
    <Lottie
      id={ID}
      Width={Width}
      Height={Height}
      style={props.style}
    />
  );
};

export default LottieAnimation;
