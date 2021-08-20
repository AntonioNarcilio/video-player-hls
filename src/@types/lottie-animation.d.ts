import { HTMLAttributes } from 'react';

interface LottieAnimationTypes extends HTMLAttributes<HTMLDivElement> {
  Width: number;
  Height: number;
  ID: string;
  LoadingAnimation: object;
}

export { LottieAnimationTypes };
