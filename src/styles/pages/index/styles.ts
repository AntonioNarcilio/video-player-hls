import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;

  h1 {
    font-size: 50px;
    color: ${(props) => props.theme.colors.text};
  }

  video {
    border-radius: 8px;
  }
`;
