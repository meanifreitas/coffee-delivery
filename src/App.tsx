import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GLobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GLobalStyle />
    </ThemeProvider>
  )
}

export default App
