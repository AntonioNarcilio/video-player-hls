import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
    width: 0px;
}

body {
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};
}

body,
input,
textarea,
button {
  font: 400 1rem "inter", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit; /* herda a cor do container dos links */
  text-decoration: none;
}


@media (max-width: 1000px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

`;

// export const GlobalContainer = styled.div`
//   /* margin-left: calc(1024px / 15); */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;

//   @media (max-width: 720px) {
//     margin: 0 auto;
//   }
// `;
