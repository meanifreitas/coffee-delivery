import { createGlobalStyle } from 'styled-components'

export const GLobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    background: ${(props) => props.theme.background}
  }

  button {
    border: 0;
  }
`
