import { createGlobalStyle } from 'styled-components'
import { defaultTheme } from './themes/default'

export const GlobalStyle = createGlobalStyle`
   *{
      margin:0;
      padding:0;
      box-sizing:border-box;
   }
   :focus{
      outline: 0;
      box-shadow: 0 0 0 2px ${defaultTheme['green-500']};
   }
   body {
      background: ${defaultTheme['white']} ;
      color: ${defaultTheme['gray-800']};
      -webkit-font-smoothing: antialiased;
   }
   body, input, textarea, button{
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-weight: 400;
   }

`
