import styled from 'styled-components';

type LottieProps = {
  Width: number;
  Height: number;
}

export const Lottie = styled.div<LottieProps>`
  width: ${(props) => props.Width}px;
  height: ${(props) => props.Height}px;

  pointer-events: none;
`;
