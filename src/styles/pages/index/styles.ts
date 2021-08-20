import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;

  gap: 2rem;


  h1 {
    font-size: 50px;
    color: ${(props) => props.theme.colors.text};
  }

  footer {
    /* position: absolute; */

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    gap: 1rem;

    /* height: 100vh;
    width: 100vw; */
    /* margin-bottom: 6rem; */

    label {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 256px;
      height: 32px;

      color: ${(props) => props.theme.colors.text};
      background: ${(props) => props.theme.colors.secondary};
      border: 1px solid ${(props) => props.theme.colors.text};

      transition: all 0.4s;

      &:hover {
        opacity: 0;
        /* z-index: -1; */
      }
    }

    input[type=text] {
      outline: 0;
      border: 0;
      background: transparent;

      /* width: 640px;
      height: 2rem; */
      width: 256px;
      height: 32px;
      /* padding-left: 0.5rem; */
      color: ${(props) => props.theme.colors.text};
      border-bottom: 1px solid ${(props) => props.theme.colors.text};

      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;

      &::placeholder {
        color: ${(props) => props.theme.colors.text};
      }
    }

    hr {
      border: 0;
      width: 1px;
      height: 32px;
      background: ${(props) => props.theme.colors.text};
    }

    button {
      outline: 0;
      border: 0;
      background: transparent;

      width: 50px;
      height: 32px;

      color: ${(props) => props.theme.colors.text};
      border: 1px solid ${(props) => props.theme.colors.text};
    }
  }

`;

export const VideoWrapper = styled.main`
  width: 640px;
  max-height: 360px;

  /* position: fixed; */
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  box-shadow: 0px 30px 20px -10px rgb(0 0 0 / 47%);

  video#player {
    min-width: 640px;
    min-height: 360px;
  }


`;
