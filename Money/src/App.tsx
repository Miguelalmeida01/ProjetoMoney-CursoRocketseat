import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme/default'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/Transactions'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transactions></Transactions>
    </ThemeProvider>
  )
}
