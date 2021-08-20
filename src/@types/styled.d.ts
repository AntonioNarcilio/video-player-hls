// Informando para o typescript as propriedades do tema
import 'styled-components';
// 📃 Sobrescrevendo definições de tipos n o styled-component
// 📃 Precisa add o arquivo no tsconfig.json
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      text: string;
      textTitle: string;
      red: string;
      redDark: string;
      redShadow: string;
      green: string;
      greenDark: string;
      greenShadow: string;
      pink: string;
      pinkDark: string;
      pinkShadow: string;
      purple: string;
      purpleDark: string;
      purpleShadow: string;
      cyan: string;
    },
  }
}
